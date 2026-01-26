import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Rosen Relations and our mission to transform high performance professionals into luxury-positioned brands through comprehensive guided resources and expert coaching.',
  openGraph: {
    title: 'About | Rosen Relations',
    description: 'Learn about Rosen Relations and our mission to transform high performance professionals into luxury-positioned brands.',
  },
};

export default function AboutPage() {
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
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                letterSpacing: '0.05em',
                lineHeight: '1.2'
              }}
            >
              About Rosen Relations
            </h1>
            <p 
              className="font-light max-w-2xl mx-auto"
              style={{ 
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                lineHeight: '1.7',
                letterSpacing: '0.01em'
              }}
            >
              Transforming high performance professionals into luxury-positioned brands that command attention, trust, and authority.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Section */}
      <section 
        className="w-full py-20 sm:py-24 lg:py-32"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left: Text Content */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 order-2 lg:order-1">
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

              {/* Additional Narrative Content */}
              <div className="space-y-6">
                <p 
                  className="font-light"
                  style={{ 
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.7',
                    letterSpacing: '0.01em'
                  }}
                >
                  At Rosen Relations, we believe that every professional has the potential to become a recognized authority in their field. Our approach combines strategic media positioning, authentic storytelling, and premium brand development to help you stand out in a crowded marketplace.
                </p>
                <p 
                  className="font-light"
                  style={{ 
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.7',
                    letterSpacing: '0.01em'
                  }}
                >
                  Through our comprehensive programs, one-on-one coaching, and curated resources, we provide the tools and guidance you need to elevate your presence, expand your reach, and build a legacy that resonates with your ideal audience.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Link
                  href="/programs"
                  className="button inline-block w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ 
                    backgroundColor: 'var(--color-ink-black)',
                    color: 'var(--color-pure-white)',
                    outlineColor: 'var(--color-ink-black)',
                    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                    letterSpacing: '0.08em'
                  }}
                >
                  Explore Programs
                </Link>
                <Link
                  href="/join"
                  className="button inline-block w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ 
                    backgroundColor: 'var(--color-blush-pink)',
                    color: 'var(--color-ink-black)',
                    outlineColor: 'var(--color-blush-pink)',
                    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                    letterSpacing: '0.08em',
                    boxShadow: '0 4px 12px rgba(244, 194, 194, 0.3)'
                  }}
                >
                  Join Now
                </Link>
              </div>
            </div>

            {/* Right: Circular Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div 
                className="relative w-full max-w-xs sm:max-w-md aspect-square rounded-full overflow-hidden"
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Additional Section - Mission/Values */}
      <section 
        className="w-full py-20 sm:py-24 lg:py-32"
        style={{ backgroundColor: 'var(--color-warm-sand)' }}
      >
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 
              className="font-light text-center"
              style={{ 
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                letterSpacing: '0.04em',
                lineHeight: '1.3'
              }}
            >
              Our Mission
            </h2>
            <div className="space-y-6">
              <p 
                className="font-light text-center"
                style={{ 
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                  lineHeight: '1.7',
                  letterSpacing: '0.01em'
                }}
              >
                We're here to help you thrive every step of the way. Our mission is to empower ambitious professionals with the strategic insights, practical tools, and unwavering support needed to build brands that not only succeed but inspire.
              </p>
              <p 
                className="font-light text-center"
                style={{ 
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                  lineHeight: '1.7',
                  letterSpacing: '0.01em'
                }}
              >
                Whether you're launching a new venture, scaling your existing business, or positioning yourself as a thought leader, Rosen Relations provides the comprehensive guidance to help you achieve your goals with confidence and clarity.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
