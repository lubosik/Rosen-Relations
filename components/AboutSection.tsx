import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import { rosenAssets } from '@/lib/rosen-assets';

export default function AboutSection() {
  return (
    <section 
      className="w-full py-20 sm:py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-soft-ivory)' }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: About Preview */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 order-2 lg:order-1">
            <h2 
              className="font-light leading-tight uppercase"
              style={{ 
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                letterSpacing: '0.04em',
                lineHeight: '1.2'
              }}
            >
              About Chantal &quot;Nani&quot; Rosen
            </h2>

            <p 
              className="font-light"
              style={{ 
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                lineHeight: '1.7',
                letterSpacing: '0.01em'
              }}
            >
              Chantal &quot;Nani&quot; Rosen is the founder of Rosen Relations and is widely known as The Luxury Lens, a distinction that speaks to both aesthetic mastery and a strategic ability to see brands in their highest, most intentional form. With a background in modeling, visual storytelling, and creative direction, she brings a refined editorial eye to every project, ensuring each brand&apos;s presence is curated with precision and purpose. She has partnered with globally recognized brands including Breitling, Neiman Marcus, Kendra Scott, and America&apos;s Heart. As a woman-owned firm, Rosen Relations challenges outdated industry norms and redefines how visibility, influence, and creative leadership are cultivated.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link
                href="/services"
                className="button inline-block w-full sm:w-auto text-center px-6 sm:px-10 py-3 sm:py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ 
                  backgroundColor: 'var(--color-ink-black)',
                  color: 'var(--color-pure-white)',
                  outlineColor: 'var(--color-ink-black)',
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                  letterSpacing: '0.08em'
                }}
              >
                Explore Services
              </Link>
              <Link
                href="/contact#book"
                className="button inline-block w-full sm:w-auto text-center px-6 sm:px-10 py-3 sm:py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ 
                  backgroundColor: 'var(--color-blush-pink)',
                  color: 'var(--color-ink-black)',
                  outlineColor: 'var(--color-blush-pink)',
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                  letterSpacing: '0.08em',
                  boxShadow: '0 4px 12px rgba(244, 194, 194, 0.3)'
                }}
              >
                Book a Call
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
                src={rosenAssets.founderPicture}
                alt="Chantal Nani Rosen, founder of Rosen Relations"
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
  );
}
