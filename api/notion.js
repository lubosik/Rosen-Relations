// Vercel Serverless Function — Notion CRM
// Supports three call patterns:
//   1. { pageId, ...fields }  → PATCH that specific page (funnel steps 2 & 3)
//   2. { email, ...fields }   → upsert by email (contact form)
//   3. { ...fields }          → create new anonymous lead (funnel step 1)

const DATABASE_ID = '33cd32de-83ba-80e8-accf-e9bfd1703629';
const NOTION_VER  = '2022-06-28';

const notionHeaders = () => ({
  Authorization:    `Bearer ${process.env.NOTION_TOKEN}`,
  'Notion-Version': NOTION_VER,
  'Content-Type':   'application/json',
});

// ── property helpers ───────────────────────────────────────────────────────

function rt(str) {
  return { rich_text: [{ text: { content: (str || '').slice(0, 2000) } }] };
}

function buildProperties(data) {
  const p = {};

  // Title field (First Name) — required for page creation
  if (data.firstName != null) {
    p['First Name'] = { title: [{ text: { content: data.firstName } }] };
  } else if (!data.pageId) {
    // Step 1 create: no name yet — placeholder overwritten at step 3
    p['First Name'] = { title: [{ text: { content: 'New Lead' } }] };
  }

  if (data.lastName          != null) p['Last Name']           = rt(data.lastName);
  if (data.company           != null) p['Company Name']         = rt(data.company);
  if (data.email)                     p['Email']                = { email: data.email };
  if (data.phone             != null) p['Phone']                = { phone_number: data.phone || null };
  if (data.source)                    p['Source']               = { select: { name: data.source } };
  if (data.painPoints        != null) p['Pain Point']           = rt(data.painPoints);
  if (data.budget            != null) p['Marketing Budget']     = rt(data.budget);
  if (data.reasonForInquiry  != null) p['Reason for Inquiry']   = rt(data.reasonForInquiry);
  if (data.message           != null) p['Message']              = rt(data.message);

  return p;
}

// ── Notion API wrappers ────────────────────────────────────────────────────

async function findByEmail(email) {
  const res  = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method:  'POST',
      headers: notionHeaders(),
      body:    JSON.stringify({ filter: { property: 'Email', email: { equals: email } } }),
    }
  );
  const json = await res.json();
  if (!res.ok) console.error('[notion] findByEmail error:', json);
  return json.results || [];
}

async function createRecord(properties) {
  const res = await fetch('https://api.notion.com/v1/pages', {
    method:  'POST',
    headers: notionHeaders(),
    body:    JSON.stringify({ parent: { database_id: DATABASE_ID }, properties }),
  });
  const json = await res.json();
  if (!res.ok) console.error('[notion] createRecord error:', JSON.stringify(json));
  return json;
}

async function updateRecord(pageId, properties) {
  const res = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
    method:  'PATCH',
    headers: notionHeaders(),
    body:    JSON.stringify({ properties }),
  });
  const json = await res.json();
  if (!res.ok) console.error('[notion] updateRecord error:', JSON.stringify(json));
  return json;
}

// ── handler ────────────────────────────────────────────────────────────────

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  if (!process.env.NOTION_TOKEN) {
    console.error('[notion] NOTION_TOKEN is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!data) return res.status(400).json({ error: 'No body' });

    const properties = buildProperties(data);
    let result;

    if (data.pageId) {
      // Steps 2 & 3: update the page created at step 1
      result = await updateRecord(data.pageId, properties);
    } else if (data.email) {
      // Contact form: upsert by email
      const existing = await findByEmail(data.email);
      result = existing.length > 0
        ? await updateRecord(existing[0].id, properties)
        : await createRecord(properties);
    } else {
      // Step 1: create anonymous lead (no email yet)
      result = await createRecord(properties);
    }

    return res.status(200).json({ ok: true, id: result.id });
  } catch (err) {
    console.error('[notion] handler error:', err);
    return res.status(500).json({ error: err.message });
  }
};
