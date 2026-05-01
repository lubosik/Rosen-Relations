// ── FUNNEL SYSTEM — Rosen Relations ──────────────────────────────────────
// Progressive Notion CRM population:
//   Step 1 → creates Notion page (source + pain points), saves pageId
//   Step 2 → updates same page (budget)
//   Step 3 → updates same page (contact details)
// Drop-offs are captured at whichever step they reach.

const CAL_BASE = 'https://cal.com/rosen-relations/15min';
const WEB3FORMS_ACCESS_KEY = '47c2e037-9077-412d-9b7f-fa2239e9ae79';

let funnelData = {
  source:     'Pop-up',
  painPoints: '',
  budget:     '',
  firstName:  '',
  lastName:   '',
  company:    '',
  email:      '',
  phone:      '',
};

// Notion page created at step 1; steps 2 & 3 update the same page
let funnelPageId       = null;
let funnelCreatePromise = null; // resolves to { ok, id }

// DOM refs
const overlay   = document.getElementById('funnelOverlay');
const closeBtn  = document.getElementById('funnelClose');
const progress  = document.getElementById('funnelProgressFill');
const stepLabel = document.getElementById('funnelStepLabel');
const step1     = document.getElementById('funnelStep1');
const step2     = document.getElementById('funnelStep2');
const step3     = document.getElementById('funnelStep3');

// ── open / close ──────────────────────────────────────────────────────────

function openFunnel(opts = {}) {
  if (sessionStorage.getItem('funnel_submitted')) return;
  if (!opts.force && sessionStorage.getItem('funnel_shown')) return;
  if (!overlay) return;

  // Fresh state for every new session
  funnelPageId        = null;
  funnelCreatePromise = null;
  funnelData = { source: 'Pop-up', painPoints: '', budget: '', firstName: '', lastName: '', company: '', email: '', phone: '' };

  // Reset UI to step 1
  if (step1) step1.hidden = false;
  if (step2) step2.hidden = true;
  if (step3) step3.hidden = true;
  if (progress) progress.style.width = '33%';
  if (stepLabel) stepLabel.textContent = 'Step 1 of 3';
  document.querySelectorAll('.funnel-check input').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="budget"]').forEach(rb => rb.checked = false);

  overlay.hidden = false;
  document.body.style.overflow = 'hidden';

  if (opts.preselect === 'vre') {
    const vreCheck = document.getElementById('vreCheck');
    if (vreCheck) vreCheck.checked = true;
  }
}

function closeFunnel() {
  if (!overlay) return;
  overlay.hidden = true;
  document.body.style.overflow = '';
  sessionStorage.setItem('funnel_shown', 'true');
}

closeBtn?.addEventListener('click', closeFunnel);
overlay?.addEventListener('click', (e) => { if (e.target === overlay) closeFunnel(); });

// ── Notion helper ─────────────────────────────────────────────────────────

async function notionPost(payload) {
  try {
    const res = await fetch('/api/notion', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
    });
    return await res.json(); // { ok: true, id: '...' }
  } catch (e) {
    console.warn('[Notion] sync error:', e);
    return null;
  }
}

function buildLeadMessage() {
  return [
    'Source: ' + funnelData.source,
    'Pain points: ' + (funnelData.painPoints || 'None selected'),
    'Marketing budget: ' + (funnelData.budget || 'Not provided'),
    'Name: ' + [funnelData.firstName, funnelData.lastName].filter(Boolean).join(' '),
    'Company: ' + (funnelData.company || 'Not provided'),
    'Email: ' + funnelData.email,
    'Phone: ' + (funnelData.phone || 'Not provided'),
  ].join('\n');
}

async function web3FormsPost() {
  const data = new FormData();
  data.set('access_key', WEB3FORMS_ACCESS_KEY);
  data.set('subject', 'New Discovery Call Funnel | Rosen Relations');
  data.set('from_name', 'Rosen Relations Website');
  data.set('name', [funnelData.firstName, funnelData.lastName].filter(Boolean).join(' '));
  data.set('email', funnelData.email);
  data.set('phone', funnelData.phone || '');
  data.set('company', funnelData.company || '');
  data.set('marketing_budget', funnelData.budget || '');
  data.set('pain_points', funnelData.painPoints || '');
  data.set('message', buildLeadMessage());

  try {
    return await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
      keepalive: true,
    });
  } catch (e) {
    console.warn('[Web3Forms] sync error:', e);
    return null;
  }
}

// ── step navigation ───────────────────────────────────────────────────────

// Step 1 → 2  (pain points)
document.getElementById('funnelStep1Next')?.addEventListener('click', () => {
  const checked = [...document.querySelectorAll('.funnel-check input:checked')].map(i => i.value);
  funnelData.painPoints = checked.join(', ');

  // Create Notion page now — captures this lead even if they drop off here
  funnelCreatePromise = notionPost({
    source:     funnelData.source,
    painPoints: funnelData.painPoints,
  });
  funnelCreatePromise.then(r => { if (r?.id) funnelPageId = r.id; });

  // Advance UI immediately (don't await — keep it instant for the user)
  if (step1) step1.hidden = true;
  if (step2) step2.hidden = false;
  if (progress) progress.style.width = '66%';
  if (stepLabel) stepLabel.textContent = 'Step 2 of 3';
});

// Step 2 → 3  (budget)
document.getElementById('funnelStep2Next')?.addEventListener('click', async () => {
  const sel = document.querySelector('input[name="budget"]:checked');
  if (!sel) return;
  funnelData.budget = sel.value;

  // Resolve pageId from step 1 (the fetch is already in-flight, just await it)
  if (funnelCreatePromise) {
    const r = await funnelCreatePromise;
    if (r?.id) funnelPageId = r.id;
  }

  // Update the same Notion page with the budget
  if (funnelPageId) {
    notionPost({ pageId: funnelPageId, budget: funnelData.budget });
  }

  if (step2) step2.hidden = true;
  if (step3) step3.hidden = false;
  if (progress) progress.style.width = '100%';
  if (stepLabel) stepLabel.textContent = 'Step 3 of 3';
});

// Step 3 submit  (contact details → Notion → Cal.com)
document.getElementById('funnelSubmitBtn')?.addEventListener('click', async () => {
  const fn = document.getElementById('funnelFirstName')?.value.trim();
  const ln = document.getElementById('funnelLastName')?.value.trim();
  const co = document.getElementById('funnelCompany')?.value.trim();
  const em = document.getElementById('funnelEmail')?.value.trim();
  const ph = document.getElementById('funnelPhone')?.value.trim();

  if (!fn || !em) { alert('Please enter your first name and email.'); return; }

  funnelData = { ...funnelData, firstName: fn, lastName: ln, company: co, email: em, phone: ph };

  if (funnelPageId) {
    // Update the page created at step 1 with full contact details
    notionPost({
      pageId:    funnelPageId,
      firstName: fn,
      lastName:  ln,
      company:   co,
      email:     em,
      phone:     ph,
    });
  } else {
    // Fallback: create full record if the step 1 page wasn't saved (e.g. network error)
    notionPost({ ...funnelData });
  }

  await web3FormsPost();

  const params = new URLSearchParams({
    name: [fn, ln].filter(Boolean).join(' '),
    email: em,
    notes: 'Pain points: ' + funnelData.painPoints + ' | Marketing budget: ' + funnelData.budget + (co ? ' | Company: ' + co : ''),
    marketing_budget: funnelData.budget,
    pain_points: funnelData.painPoints,
  });
  if (ph) params.set('phone', ph);
  if (co) params.set('company', co);

  const calUrl = `${CAL_BASE}?${params.toString()}`;
  sessionStorage.setItem('funnel_submitted', 'true');
  closeFunnel();
  window.location.href = calUrl;
});

// ── trigger logic ─────────────────────────────────────────────────────────

// Homepage: auto-trigger at 60% scroll depth
if (document.body.classList.contains('page-home')) {
  let triggered = false;
  window.addEventListener('scroll', () => {
    if (triggered) return;
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (pct >= 60) { triggered = true; setTimeout(() => openFunnel(), 800); }
  }, { passive: true });
}

// Services page: auto-trigger when bottom prompt section enters view
const promptEl = document.querySelector('.services-funnel-prompt');
if (promptEl) {
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { obs.disconnect(); setTimeout(() => openFunnel(), 1200); }
  }, { threshold: 1.0 });
  obs.observe(promptEl);
}

// Services page: "Begin Your Application" explicit button
document.getElementById('servicesOpenFunnel')?.addEventListener('click', () => {
  sessionStorage.removeItem('funnel_shown');
  openFunnel({ force: true });
});

// VRE page: explicit CTA opens funnel with VRE pre-selected
document.getElementById('vreApplyOpenFunnel')?.addEventListener('click', () => {
  sessionStorage.removeItem('funnel_shown');
  openFunnel({ force: true, preselect: 'vre' });
});
