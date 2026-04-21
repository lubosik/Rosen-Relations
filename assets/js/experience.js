// === VRE PAGE — Experience JS ===

// ── 1. Hero opening reveal ────────────────────────────
window.addEventListener('load', () => {
  document.querySelector('.vre-opening-content')?.classList.add('visible');
});

// ── 2. Right-edge progress bar ────────────────────────
const progressFill = document.getElementById('vreProgressFill');

function updateProgressBar() {
  if (!progressFill) return;
  const chaptersEl = document.querySelector('.vre-chapters');
  if (!chaptersEl) return;
  const r      = chaptersEl.getBoundingClientRect();
  const totalH = chaptersEl.offsetHeight - window.innerHeight;
  const pct    = Math.max(0, Math.min(100, (-r.top / totalH) * 100));
  progressFill.style.height = pct + '%';
}

window.addEventListener('scroll', updateProgressBar, { passive: true });
updateProgressBar();

// ── 3. Scroll-reveal for .reveal elements ─────────────
const ioReveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      ioReveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => ioReveal.observe(el));

// ── 4. Squiggly connector draw-on animation ───────────
const ioConnector = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('drawn');
      ioConnector.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.chapter-connector').forEach(el => ioConnector.observe(el));
