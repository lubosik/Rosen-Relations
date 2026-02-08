import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';
import { rosenAssets } from '@/lib/rosen-assets';

export const metadata: Metadata = {
  title: 'Company Bio & History | Rosen Relations',
  description: 'Rosen Relations LLC is a luxury brand relations and visibility strategy firm. Learn our story, mission, and how we architect brand presence for discerning clients.',
  openGraph: {
    title: 'Company Bio & History | Rosen Relations',
    description: 'Rosen Relations LLC is a luxury brand relations and visibility strategy firm specializing in brand elevation and strategic presence.',
  },
};

export default function CompanyPage() {
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
              Company Bio & History
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
              Our story, our approach, and our commitment to luxury brand elevation.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Narrative - Firm Profile */}
      <section
        className="w-full py-12 sm:py-16 lg:py-24"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-3xl mx-auto space-y-10 sm:space-y-16 min-w-0">
            <div className="space-y-8">
              <p
                className="font-light max-w-[65ch]"
                style={{
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
                  lineHeight: '1.75',
                  letterSpacing: '0.01em',
                }}
              >
                Rosen Relations LLC is a luxury brand relations and visibility strategy firm specializing in brand elevation, high-end visual conceptualization, and strategic presence. We partner with discerning brands, founders, and executives to architect how they are seen, understood, and remembered in competitive luxury markets.
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
                Operating at the intersection of editorial direction, visual storytelling, and strategic visibility, Rosen Relations curates bespoke brand ecosystems designed to communicate authority, clarity, and cultural relevance. Every engagement is intentional, crafted to align aesthetics, messaging, and long-term brand equity.
              </p>
            </div>

            {/* Founder Story Insert */}
            <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1 min-w-0">
                <blockquote
                  className="quote pl-6 sm:pl-8 border-l-2 max-w-[65ch]"
                  style={{
                    borderLeftColor: 'var(--color-rose-accent)',
                    borderLeftWidth: '3px',
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                    lineHeight: '1.7',
                  }}
                >
                  After 12 years of personal and professional experience, Rosen Relations was founded to transform high performance professionals into luxury-positioned brands that command attention, trust, and authority. With our comprehensive guided resources, you&apos;ll unearth renewed confidence and tactics to help your business thrive.
                </blockquote>
              </div>
              <div
                className="relative w-full max-w-xs sm:max-w-sm aspect-square flex-shrink-0 overflow-hidden rounded-lg mx-auto lg:mx-0 min-w-0"
                style={{
                  boxShadow: '0 12px 40px rgba(11, 11, 11, 0.12), 0 4px 12px rgba(11, 11, 11, 0.08)',
                  border: '1px solid rgba(212, 192, 190, 0.25)',
                }}
              >
                <Image
                  src={rosenAssets.founderPicture}
                  alt="Chantal Nani Rosen, founder of Rosen Relations"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 50vw, 384px"
                  quality={90}
                />
              </div>
            </div>

            <div className="space-y-8">
              <p
                className="font-light max-w-[65ch]"
                style={{
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
                  lineHeight: '1.75',
                  letterSpacing: '0.01em',
                }}
              >
                At Rosen Relations, we believe that every professional has the potential to become a recognized authority in their field. Our approach combines strategic media positioning, authentic storytelling, and premium brand development to help you stand out in a crowded marketplace.
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
                Through our comprehensive programs, one-on-one coaching, and curated resources, we provide the tools and guidance you need to elevate your presence, expand your reach, and build a legacy that resonates with your ideal audience.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section
        className="w-full py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: 'var(--color-warm-sand)' }}
      >
        <Container>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2
              className="font-light"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                letterSpacing: '0.04em',
                lineHeight: '1.3',
                textTransform: 'uppercase',
              }}
            >
              Our Mission
            </h2>
            <div className="max-w-[65ch] mx-auto space-y-6">
            <p
              className="font-light"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
                opacity: 0.9,
              }}
            >
              We&apos;re here to help you thrive every step of the way. Our mission is to empower ambitious professionals with the strategic insights, practical tools, and unwavering support needed to build brands that not only succeed but inspire.
            </p>
            <p
              className="font-light"
              style={{
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
                opacity: 0.9,
              }}
            >
              Whether you&apos;re launching a new venture, scaling your existing business, or positioning yourself as a thought leader, Rosen Relations provides the comprehensive guidance to help you achieve your goals with confidence and clarity.
            </p>
            </div>
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
