// Duplicate all items inside the banner track for a seamless infinite loop.
// The CSS animation moves the track by -50% of its total width, which equals
// exactly the original content width — creating a perfect seamless repeat.
const track = document.getElementById('bannerTrack');
if (track) {
  const items = Array.from(track.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
}
