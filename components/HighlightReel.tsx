'use client';

/**
 * Thin, full-width highlight reel video strip at top of homepage.
 * Placeholder: "Highlight reel coming soon" gradient poster when no video asset.
 * Structured as video slot for easy swap when assets are provided.
 * Respects prefers-reduced-motion (no motion in placeholder).
 */
export default function HighlightReel() {
  // Placeholder: no video asset yet. Set to true when /public/assets/highlight-reel.mp4 exists.
  const hasVideo = false;

  return (
    <section
      className="w-full overflow-hidden"
      aria-label="Highlight reel"
      style={{
        aspectRatio: '21 / 9',
        minHeight: '120px',
        maxHeight: '200px',
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          minHeight: '120px',
        }}
      >
        {hasVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          >
            <source src="/assets/highlight-reel.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(235, 234, 223, 0.98) 0%, rgba(231, 222, 207, 0.95) 50%, rgba(212, 192, 190, 0.4) 100%)',
              borderBottom: '1px solid rgba(212, 192, 190, 0.2)',
            }}
          >
            <span
              className="font-light tracking-widest uppercase text-sm sm:text-base"
              style={{
                color: 'var(--color-ink-black)',
                letterSpacing: '0.2em',
                opacity: 0.7,
              }}
            >
              Highlight reel coming soon
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
