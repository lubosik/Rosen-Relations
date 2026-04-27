const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

const BASE = 'http://localhost:4321';
const OUT = path.join(__dirname, 'screenshots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

async function forceVisible(page) {
  await page.evaluate(() => {
    document.querySelectorAll(
      '.hs-svc-card, .hs-founder-img-col, .hs-founder-text-col, ' +
      '.hs-services-header, .hs-testimonial-card'
    ).forEach(el => el.classList.add('hs-visible'));
  });
  await page.waitForTimeout(300);
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  // ── DESKTOP 1440px ──────────────────────────────────────────────
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const p = await ctx.newPage();
    p.on('console', () => {}); p.on('pageerror', () => {});
    await p.goto(BASE + '/index.html', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await p.waitForTimeout(800);
    await forceVisible(p);

    await p.screenshot({ path: path.join(OUT, 'desktop-nav.png'), clip: { x: 0, y: 0, width: 1440, height: 100 } });

    // hover Services for dropdown check
    await p.locator('.nav-dropdown-wrap').first().hover();
    await p.waitForTimeout(350);
    await p.screenshot({ path: path.join(OUT, 'desktop-dropdown.png'), clip: { x: 0, y: 0, width: 1440, height: 320 } });

    console.log('✓ desktop nav');
    await ctx.close();
  }

  // ── MOBILE 390px (iPhone 14) ────────────────────────────────────
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const p = await ctx.newPage();
    p.on('console', () => {}); p.on('pageerror', () => {});
    await p.goto(BASE + '/index.html', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await p.waitForTimeout(800);

    // Mobile nav bar
    await p.screenshot({ path: path.join(OUT, 'mobile-nav.png'), clip: { x: 0, y: 0, width: 390, height: 80 } });

    // Open the drawer via JS (headless viewport quirk workaround)
    await p.evaluate(() => {
      document.getElementById('navDrawer').classList.add('open');
    });
    await p.waitForTimeout(600);
    await p.screenshot({ path: path.join(OUT, 'mobile-drawer.png'), clip: { x: 0, y: 0, width: 390, height: 844 } });

    console.log('✓ mobile nav + drawer');
    await ctx.close();
  }

  // ── PRESS/AFFILIATIONS desktop (the page from the screenshot) ───
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const p = await ctx.newPage();
    p.on('console', () => {}); p.on('pageerror', () => {});
    await p.goto(BASE + '/press-affiliations.html', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await p.waitForTimeout(800);
    await p.screenshot({ path: path.join(OUT, 'press-nav.png'), clip: { x: 0, y: 0, width: 1440, height: 100 } });
    console.log('✓ press/affiliations nav');
    await ctx.close();
  }

  await browser.close();
  console.log('\nDone.');
})();
