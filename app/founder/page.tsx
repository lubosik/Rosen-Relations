import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import FounderImage from '@/components/FounderImage';

export const metadata: Metadata = {
  title: 'About Founder | Rosen Relations',
  description: 'Chantal Nani Rosen, The Luxury Lens. Founder and visionary behind Rosen Relations, bringing editorial direction and visual storytelling to luxury brand relations.',
  openGraph: {
    title: 'About Founder | Rosen Relations',
    description: 'Chantal Nani Rosen, The Luxury Lens. Founder and visionary behind Rosen Relations.',
  },
};

export default function FounderPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full py-12 sm:py-16 lg:py-20"
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
              Chantal &quot;Nani&quot; Rosen
            </h1>
            <p
              className="font-light max-w-2xl mx-auto"
              style={{
                color: 'var(--color-rose-accent)',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                letterSpacing: '0.12em',
                lineHeight: '1.5',
                textTransform: 'uppercase',
              }}
            >
              The Luxury Lens
            </p>
            <p
              className="font-light max-w-2xl mx-auto"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
                opacity: 0.85,
              }}
            >
              Founder & Strategic Vision
            </p>
          </div>
        </Container>
      </section>

      {/* Editorial Profile - Image + Narrative */}
      <section
        className="w-full py-12 sm:py-16 lg:py-24"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
            {/* Left: Narrative */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 min-w-0">
              <div className="space-y-6">
                <p
                  className="font-light max-w-[65ch]"
                  style={{
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
                    lineHeight: '1.75',
                    letterSpacing: '0.01em',
                  }}
                >
                  Chantal &quot;Nani&quot; Rosen brings over a decade of experience in editorial direction and visual storytelling to luxury brand relations. Operating through what she calls &quot;The Luxury Lens,&quot; a refined perspective that sees brands as cultural narratives, she founded Rosen Relations to architect how discerning founders and executives are seen, understood, and remembered in competitive luxury markets.
                </p>
                <p
                  className="font-light max-w-[65ch]"
                  style={{
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
                    lineHeight: '1.75',
                    letterSpacing: '0.01em',
                  }}
                >
                  Her background bridges editorial direction, high-end visual conceptualization, and strategic visibility. She curates bespoke brand ecosystems designed to communicate authority, clarity, and cultural relevance. Every engagement is intentional, crafted to align aesthetics, messaging, and long-term brand equity.
                </p>
                <p
                  className="font-light max-w-[65ch]"
                  style={{
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
                    lineHeight: '1.75',
                    letterSpacing: '0.01em',
                  }}
                >
                  Under Nani&apos;s leadership, Rosen Relations partners with brands, founders, and executives who seek not just visibility but a presence that commands attention, trust, and authority. She founded the firm after 12 years of personal and professional experience, with a mission to transform high-performance professionals into luxury-positioned brands that inspire.
                </p>
              </div>
            </div>

            {/* Right: Premium Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end min-w-0">
              <FounderImage />
            </div>
          </div>
        </Container>
      </section>

      {/* Closing Statement */}
      <section
        className="w-full py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: 'var(--color-warm-sand)' }}
      >
        <Container>
          <div className="max-w-[65ch] mx-auto text-center">
            <blockquote
              className="quote"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1.0625rem, 2vw, 1.3125rem)',
                lineHeight: '1.75',
                fontStyle: 'italic',
              }}
            >
              Every brand has a story worth telling. Our job is to ensure it&apos;s told with intention, clarity, and the kind of presence that resonates.
            </blockquote>
          </div>
        </Container>
      </section>

      {/* CTAs */}
      <section
        className="w-full py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
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
              Ready to elevate your brand presence?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/services"
                className="button inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: 'var(--color-ink-black)',
                  color: 'var(--color-pure-white)',
                  outlineColor: 'var(--color-ink-black)',
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                  letterSpacing: '0.08em',
                }}
              >
                Explore Services
              </Link>
              <Link
                href="/contact#book"
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
                Book a Call
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
