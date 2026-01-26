import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';

export default function AboutSection() {
  return (
    <section 
      className="w-full py-20 sm:py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-soft-ivory)' }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-10 lg:gap-12">
            {/* Headline */}
            <h2 
              className="font-light leading-[1.2]"
              style={{ 
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '0.04em'
              }}
            >
              We're here to help you thrive every step of the way!
            </h2>

            {/* Quoted Paragraph */}
            <blockquote 
              className="quote pl-8 border-l-2"
              style={{ 
                borderLeftColor: 'var(--color-rose-accent)',
                borderLeftWidth: '3px',
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                lineHeight: '1.7'
              }}
            >
              After 12 years of personal and professional experience, Rosen Relations was founded to transform high performance professionals into luxury-positioned brands that command attention, trust, and authority. With our comprehensive guided resources, you'll unearth renewed confidence and tactics to help your business thrive.
            </blockquote>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="button inline-block w-fit px-10 py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ 
                  backgroundColor: 'var(--color-ink-black)',
                  color: 'var(--color-pure-white)',
                  outlineColor: 'var(--color-ink-black)',
                  fontSize: '0.875rem',
                  letterSpacing: '0.08em'
                }}
              >
                BOOK NANI TO SPEAK AT YOUR NEXT EVENT !
              </Link>
            </div>
          </div>

          {/* Right: Circular Image */}
          <div className="flex justify-center lg:justify-end">
            <div 
              className="relative w-full max-w-md aspect-square rounded-full overflow-hidden"
              style={{ 
                boxShadow: '0 12px 40px rgba(11, 11, 11, 0.15), 0 2px 8px rgba(11, 11, 11, 0.1)',
                border: '1px solid rgba(212, 192, 190, 0.2)'
              }}
            >
              <Image
                src="/home-image-2.webp"
                alt="Nani speaking at an event"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
