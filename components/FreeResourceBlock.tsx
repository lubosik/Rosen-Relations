import Link from 'next/link';
import Container from './Container';

export default function FreeResourceBlock() {
  return (
    <section 
      className="w-full py-20 sm:py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-blush-pink)' }}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Title */}
          <h2 
            className="font-light"
            style={{ 
              color: 'var(--color-ink-black)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              letterSpacing: '0.04em',
              lineHeight: '1.3'
            }}
          >
            Beginner's Guide to Business
          </h2>

          {/* FREE Label */}
          <div>
            <span 
              className="font-light uppercase tracking-wide"
              style={{ 
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                letterSpacing: '0.1em',
                opacity: 0.9
              }}
            >
              FREE
            </span>
          </div>

          {/* Description */}
          <p 
            className="font-light max-w-2xl mx-auto"
            style={{ 
              color: 'var(--color-ink-black)',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: '1.7',
              letterSpacing: '0.01em',
              opacity: 0.85
            }}
          >
            This free introduction will provide you with expert tips for getting started, a checklist for your first year of business, and helpful follow-up links.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Link
              href="/join"
              className="button inline-block px-10 py-4 rounded-sm transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ 
                backgroundColor: 'var(--color-rose-accent)',
                color: 'var(--color-ink-black)',
                outlineColor: 'var(--color-rose-accent)',
                fontSize: '0.875rem',
                letterSpacing: '0.08em',
                boxShadow: '0 4px 16px rgba(240, 176, 176, 0.5), 0 2px 4px rgba(240, 176, 176, 0.3)'
              }}
            >
              Get started
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
