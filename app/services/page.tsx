import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import ServicesVideoModule from '@/components/ServicesVideoModule';

export const metadata: Metadata = {
  title: 'Services | Rosen Relations',
  description: 'Luxury brand relations and visibility strategy services.',
  openGraph: {
    title: 'Services | Rosen Relations',
    description: 'Luxury brand relations and visibility strategy services.',
  },
};

const SERVICE_OFFERINGS = [
  {
    title: 'Brand Elevation & Strategy',
    description: 'Comprehensive brand positioning and narrative development for luxury and high-end markets.',
  },
  {
    title: 'High-End Visual Conceptualization',
    description: 'Editorial direction and visual storytelling aligned with your brand identity.',
  },
  {
    title: 'Strategic Presence & Visibility',
    description: 'Media positioning, thought leadership, and authority-building across channels.',
  },
  {
    title: 'Bespoke Brand Ecosystems',
    description: 'Curated ecosystems designed to communicate authority, clarity, and cultural relevance.',
  },
];

export default function ServicesPage() {
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
              Services
            </h1>
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
              Intentional engagements crafted to align aesthetics, messaging, and long-term brand equity.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content: Services List + Video */}
      <section
        className="w-full py-12 sm:py-16 lg:py-24"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
            {/* Left: Service Offerings */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-10 min-w-0">
              {SERVICE_OFFERINGS.map((offering, index) => (
                <div
                  key={offering.title}
                  className="pb-6 sm:pb-10 border-b last:border-b-0"
                  style={{
                    borderColor: 'rgba(212, 192, 190, 0.3)',
                  }}
                >
                  <span
                    className="block mb-3 font-light text-xs uppercase tracking-[0.2em]"
                    style={{
                      color: 'var(--color-ink-black)',
                      opacity: 0.6,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2
                    className="font-light mb-3 sm:mb-4"
                    style={{
                      color: 'var(--color-ink-black)',
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                      letterSpacing: '0.04em',
                      lineHeight: '1.3',
                      textTransform: 'uppercase',
                    }}
                  >
                    {offering.title}
                  </h2>
                  <p
                    className="font-light max-w-[65ch]"
                    style={{
                      color: 'var(--color-ink-black)',
                      fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                      lineHeight: '1.7',
                      letterSpacing: '0.01em',
                      opacity: 0.9,
                    }}
                  >
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Vertical Video Module */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end min-w-0">
              <ServicesVideoModule />
            </div>
          </div>
        </Container>
      </section>

      {/* Book a Call CTA */}
      <section
        className="w-full py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: 'var(--color-warm-sand)' }}
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
              Every engagement is intentional. Ready to elevate your brand?
            </p>
            <Link
              href="/contact#book"
              className="button inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto text-center px-8 sm:px-10 py-3 sm:py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
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
          </div>
        </Container>
      </section>
    </>
  );
}
