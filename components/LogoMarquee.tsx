'use client';

/**
 * Logo marquee — no chip containers, enlarged logos, uniform size.
 * Decorative, non-interactive. Respects prefers-reduced-motion.
 */

import Image from 'next/image';
import { affiliationLogos } from '@/lib/affiliation-logos';

/* Uniform logo size — tuned for mobile legibility and desktop impact */
const LOGO_HEIGHT_MOBILE = 48;
const LOGO_HEIGHT_DESKTOP = 72;

function LogoItem({ item }: { item: { name: string; src: string; alt: string } }) {
  return (
    <span
      className="inline-flex items-center justify-center flex-shrink-0 logo-marquee-item"
      style={{
        height: `clamp(${LOGO_HEIGHT_MOBILE}px, 12vw, ${LOGO_HEIGHT_DESKTOP}px)`,
        width: 'auto',
        minWidth: '72px',
        maxWidth: '160px',
      }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={180}
        height={LOGO_HEIGHT_DESKTOP}
        style={{
          height: `clamp(${LOGO_HEIGHT_MOBILE}px, 12vw, ${LOGO_HEIGHT_DESKTOP}px)`,
          width: 'auto',
          maxWidth: '160px',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
        sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 160px"
      />
    </span>
  );
}

export default function LogoMarquee() {
  return (
    <section
      className="w-full overflow-hidden py-10 sm:py-12 lg:py-16 logo-marquee-section"
      style={{
        background: 'linear-gradient(180deg, rgba(245, 244, 240, 0.6) 0%, rgba(235, 234, 223, 0.85) 50%, rgba(245, 244, 240, 0.6) 100%)',
        borderTop: '1px solid rgba(212, 192, 190, 0.25)',
        borderBottom: '1px solid rgba(212, 192, 190, 0.25)',
      }}
      aria-label="Previous collaborations and affiliations"
    >
      <div className="relative w-full">
        <div
          className="affiliation-mask-left pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-20 lg:w-28"
          style={{
            background: 'linear-gradient(to right, rgba(245, 244, 240, 0.95) 0%, transparent 100%)',
          }}
          aria-hidden
        />
        <div
          className="affiliation-mask-right pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-20 lg:w-28"
          style={{
            background: 'linear-gradient(to left, rgba(245, 244, 240, 0.95) 0%, transparent 100%)',
          }}
          aria-hidden
        />

        <div className="min-w-0 overflow-hidden">
          <div className="affiliation-marquee-track flex items-center">
            <div className="affiliation-marquee-content flex items-center gap-8 sm:gap-12 lg:gap-16">
              {affiliationLogos.map((item) => (
                <LogoItem key={item.name} item={item} />
              ))}
            </div>
            <div
              className="affiliation-marquee-content affiliation-marquee-dup flex items-center gap-8 sm:gap-12 lg:gap-16"
              aria-hidden
              style={{ marginLeft: '2rem' }}
            >
              {affiliationLogos.map((item) => (
                <LogoItem key={`dup-${item.name}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
