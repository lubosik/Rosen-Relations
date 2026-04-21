// Nav scroll state
const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile hamburger
const hamburger = document.getElementById('navHamburger');
const drawer = document.getElementById('navDrawer');
const drawerClose = document.getElementById('navDrawerClose');
hamburger?.addEventListener('click', () => drawer.classList.add('open'));
drawerClose?.addEventListener('click', () => drawer.classList.remove('open'));
// Close on outside click
document.addEventListener('click', (e) => {
  if (!drawer || !hamburger) return;
  if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
    drawer.classList.remove('open');
  }
});

// Curtain reveal on page load (Hero)
window.addEventListener('load', () => {
  const curtainL = document.getElementById('curtainLeft');
  const curtainR = document.getElementById('curtainRight');
  const heroContent = document.querySelector('.hero-content');

  // Set timeout even if not on hero page, but check first
  if (!curtainL || !curtainR) return; // not on hero page

  // Small delay so user registers the black screen first
  setTimeout(() => {
    curtainL.classList.add('open');
    curtainR.classList.add('open');
    // Animate hero content after curtains are mostly open
    setTimeout(() => {
      heroContent?.classList.add('visible');
    }, 900);
  }, 200);
});

// Reveal elements
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));
}

// Smooth video loop fade for Hero Background
const heroVideos = document.querySelectorAll('video.hero-bg');
heroVideos.forEach(video => {
  video.addEventListener('timeupdate', () => {
    if (video.duration > 0) {
      // Fade out 0.8 seconds before the video ends
      if (video.duration - video.currentTime < 0.8) {
        video.style.opacity = '0';
      } else if (video.currentTime < 1.5) {
        // Fade back in at the start
        video.style.opacity = '1';
      }
    }
  });
});

// iOS / mobile: inline muted loops often need a programmatic play() (and only the visible desktop/mobile variant).
function shouldKickstartHeroVideo(video) {
  const narrow = window.matchMedia('(max-width: 768px)').matches;
  if (video.classList.contains('hero-bg')) {
    if (narrow && video.classList.contains('desktop-video')) return false;
    if (!narrow && video.classList.contains('mobile-video')) return false;
  }
  if (video.classList.contains('vre-opening-img')) {
    if (narrow && video.classList.contains('vre-opening-video--desktop')) return false;
    if (!narrow && video.classList.contains('vre-opening-video--mobile')) return false;
  }
  return true;
}

function kickstartLoopingBackgroundVideos() {
  document.querySelectorAll('video.hero-bg, video.vre-opening-img').forEach((video) => {
    if (!shouldKickstartHeroVideo(video)) return;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    const tryPlay = () => {
      video.play().catch(() => {});
    };
    tryPlay();
    if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
      video.addEventListener('loadeddata', tryPlay, { once: true });
    }
  });
}

window.addEventListener('load', () => {
  kickstartLoopingBackgroundVideos();
  [450, 1400, 2800].forEach((ms) => setTimeout(kickstartLoopingBackgroundVideos, ms));
});

window.addEventListener('pageshow', (e) => {
  if (e.persisted) kickstartLoopingBackgroundVideos();
});

// When hero / VRE opening scrolls into view (e.g. after curtain opens), retry play — helps Mobile Safari.
(function observeHeroVideoVisibility() {
  const roots = document.querySelectorAll('.hero-bg-wrapper, .vre-opening');
  if (!roots.length || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && en.intersectionRatio > 0.08) kickstartLoopingBackgroundVideos();
      });
    },
    { threshold: [0, 0.1, 0.25] }
  );
  roots.forEach((el) => io.observe(el));
})();
