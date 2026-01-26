import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Rosen Relations. Send us a message and we will respond as soon as possible.',
  openGraph: {
    title: 'Contact | Rosen Relations',
    description: 'Get in touch with Rosen Relations. Send us a message and we will respond as soon as possible.',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="w-full py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 
              className="font-light"
              style={{ 
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                letterSpacing: '0.05em',
                lineHeight: '1.2'
              }}
            >
              Get in Touch
            </h1>
            <p 
              className="font-light max-w-2xl mx-auto"
              style={{ 
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
                opacity: 0.8
              }}
            >
              We would love to hear from you. Send us a message and we will respond as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section 
        className="w-full py-20 sm:py-24 lg:py-32"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-2xl mx-auto">
            <div 
              className="p-8 sm:p-10 lg:p-12 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(235, 234, 223, 0.95) 0%, rgba(231, 222, 207, 0.9) 100%)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(212, 192, 190, 0.4)',
                boxShadow: '0 8px 32px rgba(11, 11, 11, 0.08), 0 2px 8px rgba(11, 11, 11, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              }}
            >
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Additional CTAs */}
      <section 
        className="w-full py-16 sm:py-20"
        style={{ backgroundColor: 'var(--color-warm-sand)' }}
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 
                className="font-light mb-4"
                style={{ 
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  letterSpacing: '0.04em',
                  lineHeight: '1.3'
                }}
              >
                Other Ways to Connect
              </h2>
              <p 
                className="font-light max-w-2xl mx-auto"
                style={{ 
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                  lineHeight: '1.7',
                  letterSpacing: '0.01em',
                  opacity: 0.8
                }}
              >
                Explore our programs or join our community to get started on your journey.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs"
                className="button inline-block text-center px-8 py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ 
                  backgroundColor: 'var(--color-ink-black)',
                  color: 'var(--color-pure-white)',
                  outlineColor: 'var(--color-ink-black)',
                  fontSize: '0.875rem',
                  letterSpacing: '0.08em'
                }}
              >
                View Programs
              </Link>
              <Link
                href="/join"
                className="button inline-block text-center px-8 py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ 
                  backgroundColor: 'var(--color-blush-pink)',
                  color: 'var(--color-ink-black)',
                  outlineColor: 'var(--color-blush-pink)',
                  fontSize: '0.875rem',
                  letterSpacing: '0.08em',
                  boxShadow: '0 4px 12px rgba(244, 194, 194, 0.3)'
                }}
              >
                Join Now
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
