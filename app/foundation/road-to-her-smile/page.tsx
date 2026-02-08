import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Road to Her Smile | STILL HER FOUNDATION',
  description: 'Road to Her Smile. A flagship initiative from Still Her Foundation. Coming soon.',
  openGraph: {
    title: 'Road to Her Smile | STILL HER FOUNDATION',
    description: 'Road to Her Smile. A flagship initiative from Still Her Foundation. Coming soon.',
  },
};

export default function RoadToHerSmilePage() {
  return (
    <>
      {/* Hero / Coming Soon */}
      <section
        className="w-full min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center py-16 sm:py-24 lg:py-32"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-10 px-4 min-w-0">
            <h1
              className="font-light"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1.75rem, 6vw, 3.5rem)',
                letterSpacing: '0.05em',
                lineHeight: '1.25',
                textTransform: 'uppercase',
              }}
            >
              Road to Her Smile
            </h1>
            <p
              className="font-light max-w-md mx-auto"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
                opacity: 0.85,
              }}
            >
              Coming soon. A flagship initiative from Still Her Foundation.
            </p>
            <p
              className="font-light text-sm tracking-[0.2em] uppercase"
              style={{
                color: 'var(--color-ink-black)',
                letterSpacing: '0.25em',
                opacity: 0.6,
              }}
            >
              We&apos;re building something meaningful. Check back soon.
            </p>
          </div>
        </Container>
      </section>

      {/* CTAs */}
      <section
        className="w-full py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: 'var(--color-warm-sand)' }}
      >
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6 min-w-0">
            <p
              className="font-light"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
                opacity: 0.9,
              }}
            >
              In the meantime, we&apos;d love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact#book"
                className="button inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: 'var(--color-ink-black)',
                  color: 'var(--color-pure-white)',
                  outlineColor: 'var(--color-ink-black)',
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                  letterSpacing: '0.08em',
                }}
              >
                Book a Call
              </Link>
              <Link
                href="/contact"
                className="button inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-ink-black)',
                  outlineColor: 'var(--color-ink-black)',
                  border: '1px solid var(--color-ink-black)',
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                  letterSpacing: '0.08em',
                }}
              >
                Contact Us
              </Link>
            </div>
            <Link
              href="/foundation"
              className="inline-flex items-center min-h-[44px] mt-6 font-light text-sm tracking-[0.1em] uppercase"
              style={{
                color: 'var(--color-ink-black)',
                letterSpacing: '0.15em',
                opacity: 0.7,
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
              }}
            >
              ← Back to Still Her Foundation
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
