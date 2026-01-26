import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 'min(70vh, 500px)' }}>
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-section.png"
          alt="Professional woman in a luxurious modern interior setting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Glassmorphism Overlay Band at Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12"
        style={{
          background: 'linear-gradient(to top, rgba(235, 234, 223, 0.95) 0%, rgba(235, 234, 223, 0.85) 25%, rgba(235, 234, 223, 0.6) 50%, rgba(235, 234, 223, 0.3) 75%, transparent 100%)',
          backdropFilter: 'blur(10px) saturate(180%)',
          WebkitBackdropFilter: 'blur(10px) saturate(180%)',
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-2">
          {/* Headline */}
          <h1 
            className="text-center font-light leading-tight tracking-wide"
            style={{ 
              color: 'var(--color-ink-black)',
              letterSpacing: '0.05em',
              fontSize: 'clamp(1.25rem, 4.5vw, 3rem)',
              textShadow: '0 1px 3px rgba(235, 234, 223, 0.8)',
              lineHeight: '1.2'
            }}
          >
            Take control of{' '}
            <span className="relative inline-block">
              your
              <span 
                className="absolute -bottom-0.5 left-0 right-0 h-0.5"
                style={{ 
                  backgroundColor: 'var(--color-rose-accent)',
                  boxShadow: '0 1px 3px rgba(240, 176, 176, 0.4)'
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
