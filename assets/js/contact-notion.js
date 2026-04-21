// ── CONTACT FORM — Rosen Relations ───────────────────────────────────────
// On submit:
//   1. Posts to Web3Forms → sends email to Nani
//   2. Posts to /api/notion → creates a new CRM page with all fields
// Both run in parallel; user sees one inline result message.

document.addEventListener('DOMContentLoaded', () => {
  const form      = document.getElementById('contactForm');
  const resultEl  = document.getElementById('formResult');
  const submitBtn = form?.querySelector('.contact-submit');
  if (!form || !resultEl) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // ── collect fields ──────────────────────────────────────────────────
    const fullName          = (document.getElementById('name')?.value        || '').trim();
    const nameParts         = fullName.split(' ');
    const firstName         = nameParts[0] || '';
    const lastName          = nameParts.slice(1).join(' ') || '';
    const company           = (document.getElementById('company')?.value     || '').trim();
    const email             = (document.getElementById('email')?.value       || '').trim();
    const phone             = (document.getElementById('phone')?.value       || '').trim();
    const reasonForInquiry  = (document.getElementById('inquiryType')?.value || '').trim();
    const message           = (document.getElementById('message')?.value     || '').trim();

    if (!firstName || !email) return;

    // ── UI: loading state ───────────────────────────────────────────────
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
    resultEl.textContent = '';
    resultEl.className   = 'form-result';

    // ── build Web3Forms payload ─────────────────────────────────────────
    const formData = new FormData(form);
    const w3fJson  = JSON.stringify(Object.fromEntries(formData));

    // ── run both requests in parallel ───────────────────────────────────
    const [w3fRes] = await Promise.allSettled([

      // 1. Web3Forms → email to Nani
      fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    w3fJson,
      }),

      // 2. Notion CRM → new contact page
      fetch('/api/notion', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          source:          'Contact form',
          firstName,
          lastName,
          company,
          email,
          phone,
          reasonForInquiry,
          message,
        }),
      }),

    ]);

    // ── parse Web3Forms response (primary success indicator) ────────────
    let success = false;
    let responseMsg = 'Your message has been sent. We will be in touch shortly.';

    if (w3fRes.status === 'fulfilled') {
      try {
        const json = await w3fRes.value.json();
        success    = w3fRes.value.ok && json.success !== false;
        if (!success) responseMsg = json.message || 'Something went wrong. Please try again.';
      } catch {
        success = false;
        responseMsg = 'Something went wrong. Please try again.';
      }
    } else {
      responseMsg = 'Network error. Please try again.';
    }

    // ── show result ─────────────────────────────────────────────────────
    resultEl.textContent = responseMsg;
    resultEl.className   = success ? 'form-result form-result--success' : 'form-result form-result--error';

    if (success) form.reset();

    // ── restore button ──────────────────────────────────────────────────
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Submit Inquiry'; }

    // Auto-hide result after 5 seconds
    setTimeout(() => { resultEl.textContent = ''; resultEl.className = 'form-result'; }, 5000);
  });
});
