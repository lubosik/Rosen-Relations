import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'STILL HER FOUNDATION | Rosen Relations',
  description: 'Community and non-profit initiatives. Dedicated to building connection, healing, and purpose.',
  openGraph: {
    title: 'STILL HER FOUNDATION | Rosen Relations',
    description: 'Community and non-profit initiatives. Dedicated to building connection, healing, and purpose.',
  },
};

export default function FoundationPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full py-14 sm:py-20 lg:py-28"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 px-4">
            <h1
              className="font-light"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1.75rem, 6vw, 4rem)',
                letterSpacing: '0.05em',
                lineHeight: '1.25',
                textTransform: 'uppercase',
              }}
            >
              Still Her Foundation
            </h1>
            <p
              className="font-light max-w-2xl mx-auto"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
                opacity: 0.9,
              }}
            >
              A community initiative dedicated to connection, healing, and purpose.
            </p>
          </div>
        </Container>
      </section>

      {/* Non-Profit Bio Placeholder */}
      <section
        className="w-full py-10 sm:py-16 lg:py-20"
        style={{ backgroundColor: 'var(--color-warm-sand)' }}
      >
        <Container>
          <div
            className="max-w-2xl mx-auto py-12 sm:py-16 lg:py-20 text-center rounded-lg px-6 sm:px-8 min-w-0"
            style={{
              border: '1px solid rgba(212, 192, 190, 0.35)',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              boxShadow: '0 4px 24px rgba(11, 11, 11, 0.04)',
            }}
          >
            <span
              className="font-light tracking-[0.2em] uppercase text-xs sm:text-sm"
              style={{
                color: 'var(--color-ink-black)',
                letterSpacing: '0.25em',
                opacity: 0.6,
              }}
            >
              Our Story
            </span>
            <p
              className="mt-4 font-light max-w-md mx-auto"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
                opacity: 0.75,
              }}
            >
              Content coming soon.
            </p>
          </div>
        </Container>
      </section>

      {/* Community Pillars Placeholder */}
      <section
        className="w-full py-10 sm:py-16 lg:py-20"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-4xl mx-auto min-w-0">
            <h2
              className="font-light text-center mb-10 sm:mb-16"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                letterSpacing: '0.04em',
                lineHeight: '1.3',
                textTransform: 'uppercase',
              }}
            >
              Community Pillars
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-5 sm:p-8 rounded-lg text-center min-w-0"
                  style={{
                    border: '1px solid rgba(212, 192, 190, 0.35)',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 2px 12px rgba(11, 11, 11, 0.03)',
                  }}
                >
                  <span
                    className="font-light tracking-[0.15em] uppercase text-xs"
                    style={{
                      color: 'var(--color-ink-black)',
                      letterSpacing: '0.2em',
                      opacity: 0.5,
                    }}
                  >
                    Pillar {i}
                  </span>
                  <p
                    className="mt-3 font-light"
                    style={{
                      color: 'var(--color-ink-black)',
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                      opacity: 0.6,
                    }}
                  >
                    Content coming soon.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Road to Her Smile CTA */}
      <section
        className="w-full py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: 'var(--color-warm-sand)' }}
      >
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2
              className="font-light"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                letterSpacing: '0.04em',
                lineHeight: '1.3',
                textTransform: 'uppercase',
              }}
            >
              Road to Her Smile
            </h2>
            <p
              className="font-light"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
                opacity: 0.85,
              }}
            >
              A flagship initiative. Learn more about this project.
            </p>
            <Link
              href="/foundation/road-to-her-smile"
              className="button inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto text-center px-8 sm:px-10 py-3 sm:py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: 'var(--color-ink-black)',
                color: 'var(--color-pure-white)',
                outlineColor: 'var(--color-ink-black)',
                fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                letterSpacing: '0.08em',
              }}
            >
              Explore Road to Her Smile
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
