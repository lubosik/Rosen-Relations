import { Metadata } from 'next';
import ProgramTiles from '@/components/ProgramTiles';
import PricingSection from '@/components/PricingSection';
import FreeResourceBlock from '@/components/FreeResourceBlock';

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Gain full access to our programs when you become a member. Online classes, 1-on-1 coaching, special events, and training courses to help you build your luxury brand.',
  openGraph: {
    title: 'Programs | Rosen Relations',
    description: 'Gain full access to our programs when you become a member. Online classes, 1-on-1 coaching, and special events.',
  },
};

export default function ProgramsPage() {
  return (
    <>
      {/* Programs Hero Section */}
      <section 
        className="w-full py-16 sm:py-20 lg:py-24 flex items-center justify-center"
        style={{ 
          backgroundColor: 'var(--color-blush-pink)',
          minHeight: 'min(50vh, 400px)'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-center font-light leading-tight px-2"
            style={{ 
              color: 'var(--color-ink-black)',
              fontSize: 'clamp(1.5rem, 6vw, 3.5rem)',
              letterSpacing: '0.05em',
              lineHeight: '1.3'
            }}
          >
            Gain full access to our{' '}
            <span className="relative inline-block">
              programs
              <span 
                className="absolute -bottom-0.5 left-0 right-0 h-px"
                style={{ 
                  backgroundColor: 'rgba(240, 176, 176, 0.6)',
                  opacity: 0.7
                }}
                aria-hidden="true"
              />
            </span>{' '}
            when you become a{' '}
            <span className="relative inline-block">
              member
              <span 
                className="absolute -bottom-0.5 left-0 right-0 h-px"
                style={{ 
                  backgroundColor: 'rgba(240, 176, 176, 0.6)',
                  opacity: 0.7
                }}
                aria-hidden="true"
              />
            </span>
            .
          </h1>
        </div>
      </section>

      <ProgramTiles />
      <PricingSection />
      <FreeResourceBlock />
    </>
  );
}
