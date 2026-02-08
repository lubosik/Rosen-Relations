import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import ContactForm from '@/components/ContactForm';
import CalendlyEmbed from '@/components/CalendlyEmbed';

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
                lineHeight: '1.25'
              }}
            >
              Get in Touch
            </h1>
            <p 
              className="font-light max-w-2xl mx-auto"
              style={{ 
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)',
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

      {/* Contact Form Section - Book a Call anchor */}
      <section 
        id="book"
        className="w-full py-12 sm:py-20 lg:py-24 scroll-mt-24"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-2xl mx-auto space-y-12 sm:space-y-20 min-w-0">
            {/* Contact Form */}
            <div 
              className="p-5 sm:p-8 lg:p-10 xl:p-12 rounded-lg min-w-0"
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

            {/* Calendly Inline Embed */}
            <div className="space-y-4 sm:space-y-6 min-w-0 overflow-hidden">
              <h2
                className="font-light"
                style={{
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                  letterSpacing: '0.04em',
                  lineHeight: '1.3',
                  textTransform: 'uppercase',
                }}
              >
                Book a 30-Minute Call
              </h2>
              <div
                className="p-3 sm:p-6 rounded-lg min-w-0 overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid rgba(212, 192, 190, 0.3)',
                  boxShadow: '0 4px 20px rgba(11, 11, 11, 0.04)',
                }}
              >
                <CalendlyEmbed />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Additional CTAs */}
      <section 
        className="w-full py-12 sm:py-16 lg:py-20"
        style={{ backgroundColor: 'var(--color-warm-sand)' }}
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 px-4">
            <div>
              <h2 
                className="font-light mb-3 sm:mb-4"
                style={{ 
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
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
                  fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)',
                  lineHeight: '1.7',
                  letterSpacing: '0.01em',
                  opacity: 0.8
                }}
              >
                Explore our services or book a call to get started on your journey.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/services"
                className="button inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ 
                  backgroundColor: 'var(--color-ink-black)',
                  color: 'var(--color-pure-white)',
                  outlineColor: 'var(--color-ink-black)',
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                  letterSpacing: '0.08em'
                }}
              >
                View Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
