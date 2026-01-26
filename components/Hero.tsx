import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '85vh', aspectRatio: '16/9' }}>
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-section.jpg"
          alt="Professional woman in a luxurious modern interior setting"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      {/* Glassmorphism Overlay Band at Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        style={{
          background: 'linear-gradient(to top, rgba(235, 234, 223, 0.92) 0%, rgba(235, 234, 223, 0.78) 40%, rgba(235, 234, 223, 0.5) 80%, transparent 100%)',
          backdropFilter: 'blur(10px) saturate(180%)',
          WebkitBackdropFilter: 'blur(10px) saturate(180%)',
        }}
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Headline */}
          <h1 
            className="text-center font-light leading-[1.15] tracking-wide"
            style={{ 
              color: 'var(--color-ink-black)',
              letterSpacing: '0.05em',
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              textShadow: '0 1px 3px rgba(235, 234, 223, 0.8)'
            }}
          >
            Take control of{' '}
            <span className="relative inline-block">
              your
              <span 
                className="absolute -bottom-1 left-0 right-0 h-0.5"
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
