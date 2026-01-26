import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';

const programTiles = [
  {
    label: 'Online classes',
    href: '/programs/online-classes',
    image: '/hero-section.jpg',
  },
  {
    label: '1-on-1 Coaching',
    href: '/programs/coaching',
    image: '/home-image-2.webp',
  },
  {
    label: 'Special events',
    href: '/programs/special-events',
    image: '/hero-section.jpg',
  },
];

export default function ProgramTiles() {
  return (
    <section 
      className="w-full py-20 sm:py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-soft-ivory)' }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {programTiles.map((tile, index) => (
            <Link
              key={index}
              href={tile.href}
              className="group relative block aspect-square overflow-hidden rounded-lg transition-all duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ 
                outlineColor: 'var(--color-rose-accent)'
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={tile.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                />
              </div>

              {/* Soft Pink Tonal Overlay */}
              <div 
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-75"
                style={{
                  background: 'linear-gradient(to bottom, rgba(244, 194, 194, 0.55) 0%, rgba(244, 194, 194, 0.65) 50%, rgba(244, 194, 194, 0.7) 100%)',
                  mixBlendMode: 'multiply'
                }}
              />
              
              {/* Darkening Overlay for Text Readability */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(to top, rgba(11, 11, 11, 0.4) 0%, rgba(11, 11, 11, 0.2) 50%, transparent 100%)'
                }}
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8">
                <h3 
                  className="font-light text-left transition-transform duration-300 group-hover:translate-y-[-4px] z-10"
                  style={{ 
                    color: 'var(--color-pure-white)',
                    fontSize: 'clamp(1.125rem, 4vw, 1.75rem)',
                    letterSpacing: '0.05em',
                    lineHeight: '1.3',
                    textShadow: '0 3px 12px rgba(11, 11, 11, 0.6), 0 1px 4px rgba(11, 11, 11, 0.4), 0 0 2px rgba(11, 11, 11, 0.3)',
                    textTransform: 'uppercase',
                    fontWeight: 300
                  }}
                >
                  {tile.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
