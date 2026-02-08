import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import { rosenAssets } from '@/lib/rosen-assets';

export default function StatementBlock() {
  return (
    <section
      className="relative w-full overflow-x-hidden py-16 sm:py-24 lg:py-32"
      style={{ minHeight: '60vh' }}
    >
      {/* Soft background - gradient using tokens */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(165deg, rgba(235, 234, 223, 0.98) 0%, rgba(231, 222, 207, 0.95) 50%, rgba(212, 192, 190, 0.3) 100%)',
        }}
      />

      <Container>
        <div className="relative grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Left: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-2 lg:order-1 min-w-0">
            <div
              className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-lg"
              style={{
                boxShadow: '0 12px 40px rgba(11, 11, 11, 0.12), 0 4px 12px rgba(11, 11, 11, 0.08)',
                border: '1px solid rgba(212, 192, 190, 0.3)',
              }}
            >
              <Image
                src={rosenAssets.statementImage}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={90}
              />
            </div>
          </div>

          {/* Right: Statement panel */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <div
              className="w-full max-w-2xl mx-auto lg:mx-0 px-5 py-10 sm:px-12 sm:py-16 lg:px-16 lg:py-20 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(235, 234, 223, 0.9) 0%, rgba(231, 222, 207, 0.85) 100%)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                border: '1px solid rgba(212, 192, 190, 0.45)',
                boxShadow: '0 12px 40px rgba(11, 11, 11, 0.1), 0 4px 12px rgba(11, 11, 11, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
              }}
            >
              <div className="space-y-6 sm:space-y-8">
                <div
                  className="statement text-left space-y-2 sm:space-y-3"
                  style={{
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
                    lineHeight: '1.35',
                    letterSpacing: '0.02em',
                    fontWeight: 300,
                  }}
                >
                  <p className="font-light">Your brand intentional.</p>
                  <p className="font-light">Your presence understood.</p>
                  <p className="font-light">Your story redefined.</p>
                </div>

                <p
                  className="font-light max-w-md"
                  style={{
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                    lineHeight: '1.6',
                    letterSpacing: '0.01em',
                    opacity: 0.8,
                  }}
                >
                  Bespoke visibility ecosystems for discerning brands, founders, and executives.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <Link
                    href="/services"
                    className="button inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-3.5 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
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
                    className="button inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-3.5 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
