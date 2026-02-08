'use client';

/**
 * Vertical video module for Services page.
 * Responsive, never overflows. Placeholder with play affordance when no video.
 * When video exists: poster + play overlay when autoplay blocked.
 * Set hasVideo = true and add /public/assets/services-video.mp4 for real content.
 */

import { useState, useRef } from 'react';

export default function ServicesVideoModule() {
  const hasVideo = false;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      className="relative w-full max-w-[320px] sm:max-w-sm aspect-[9/16] overflow-hidden rounded-lg flex-shrink-0 min-w-0 mx-auto lg:mx-0"
      style={{
        border: '1px solid rgba(212, 192, 190, 0.35)',
        boxShadow: '0 8px 32px rgba(11, 11, 11, 0.08), 0 2px 8px rgba(11, 11, 11, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
      }}
    >
      {hasVideo ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            poster="/assets/rosen/Rosen Relations 4.jpg"
          >
            <source src="/assets/services-video.mp4" type="video/mp4" />
          </video>
          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center w-full h-full min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-rose-accent)] rounded-lg"
              aria-label="Play video"
            >
              <span
                className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: 'rgba(235, 234, 223, 0.95)',
                  border: '1px solid rgba(212, 192, 190, 0.5)',
                  boxShadow: '0 4px 20px rgba(11, 11, 11, 0.15)',
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1"
                  style={{ color: 'var(--color-ink-black)' }}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </>
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6"
          style={{
            background: 'linear-gradient(165deg, rgba(235, 234, 223, 0.98) 0%, rgba(231, 222, 207, 0.95) 50%, rgba(212, 192, 190, 0.4) 100%)',
          }}
        >
          <span
            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full flex-shrink-0"
            style={{
              backgroundColor: 'rgba(212, 192, 190, 0.4)',
              border: '1px solid rgba(212, 192, 190, 0.5)',
            }}
            aria-hidden
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-0.5"
              style={{ color: 'var(--color-ink-black)', opacity: 0.7 }}
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span
            className="font-light tracking-[0.15em] uppercase text-xs sm:text-sm text-center"
            style={{
              color: 'var(--color-ink-black)',
              letterSpacing: '0.2em',
              opacity: 0.6,
            }}
          >
            Video coming soon
          </span>
        </div>
      )}
    </div>
  );
}
