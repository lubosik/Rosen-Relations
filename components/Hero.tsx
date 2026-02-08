import Image from 'next/image';
import { rosenAssets } from '@/lib/rosen-assets';

export default function Hero() {
  return (
    <section className="hero-home relative w-full overflow-hidden">
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0">
        <Image
          src={rosenAssets.hero}
          alt="Professional woman in a luxurious modern interior setting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
          style={{ objectPosition: 'center 40%' }}
        />
      </div>

      {/* Glassmorphism Overlay Band at Bottom — mobile-optimized padding, readable gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-12"
        style={{
          background: 'linear-gradient(to top, rgba(235, 234, 223, 0.97) 0%, rgba(235, 234, 223, 0.9) 20%, rgba(235, 234, 223, 0.7) 45%, rgba(235, 234, 223, 0.4) 70%, transparent 100%)',
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)',
          paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
        }}
      >
        <div className="mx-auto w-full max-w-7xl min-w-0 px-2 sm:px-4">
          {/* Headline — wraps elegantly, no collision */}
          <h1
            className="text-center font-light leading-tight tracking-wide break-words"
            style={{
              color: 'var(--color-ink-black)',
              letterSpacing: '0.05em',
              fontSize: 'clamp(1.25rem, 4.5vw, 3rem)',
              textShadow: '0 1px 4px rgba(235, 234, 223, 0.9), 0 2px 8px rgba(11, 11, 11, 0.08)',
              lineHeight: '1.25',
            }}
          >
            Take control of{' '}
            <span className="relative inline-block">
              your
              <span
                className="absolute -bottom-0.5 left-0 right-0 h-0.5"
                style={{
                  backgroundColor: 'var(--color-rose-accent)',
                  boxShadow: '0 1px 3px rgba(240, 176, 176, 0.4)',
                }}
                aria-hidden="true"
              />
            </span>{' '}
            media footprint!
          </h1>
        </div>
      </div>
    </section>
  );
}
