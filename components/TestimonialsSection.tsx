import Container from './Container';

/**
 * Testimonials section — "Why clients love us"
 * Uses site palette: ivory, blush, ink.
 * Placeholder content for Rosen Relations.
 */

const testimonials = [
  {
    company: 'Luxury Brand Co',
    quote:
      "Rosen Relations has nailed it every time we've requested their support. Not only is the service incredibly accurate when matching a solution to our visibility needs, but I also find it to be incredibly quick and frictionless.",
    name: 'Placeholder Name',
    title: 'VP of Brand at Luxury Brand Co',
    initials: 'PN',
  },
  {
    company: 'Outer',
    quote:
      "We're scaling our presence in a moment when things are changing very quickly. Our Rosen Relations partner was able to help us move with the times and position our brand with intention.",
    name: 'Placeholder Name',
    title: 'VP of Marketing',
    initials: 'PN',
  },
  {
    company: 'Remote Year',
    quote:
      "With Rosen Relations, you could just bring on one person and test it out. The low-risk experience upfront was very compelling to me, and the results exceeded our expectations.",
    name: 'Placeholder Name',
    title: 'Co-Founder',
    initials: 'PN',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="w-full py-14 sm:py-20 lg:py-24"
      style={{
        backgroundColor: 'var(--color-soft-ivory)',
        borderTop: '1px solid rgba(212, 192, 190, 0.2)',
      }}
    >
      <Container>
        <h2
          className="font-light text-center mb-10 sm:mb-16"
          style={{
            color: 'var(--color-ink-black)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            letterSpacing: '0.04em',
            lineHeight: '1.3',
            textTransform: 'uppercase',
          }}
        >
          Why clients love us
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.company}
              className="relative rounded-lg overflow-hidden min-w-0"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(235, 234, 223, 0.85) 100%)',
                border: '1px solid rgba(212, 192, 190, 0.35)',
                boxShadow: '0 4px 24px rgba(11, 11, 11, 0.04), 0 2px 8px rgba(11, 11, 11, 0.02)',
              }}
            >
              {/* Subtle vertical accent stripe — blush instead of mint */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{
                  background: 'linear-gradient(180deg, rgba(244, 194, 194, 0.4) 0%, rgba(240, 176, 176, 0.25) 100%)',
                }}
                aria-hidden
              />

              <div className="relative pl-6 pr-6 pt-6 pb-5 sm:pl-8 sm:pr-8 sm:pt-10 sm:pb-8">
                {/* Company / Logo placeholder */}
                <div
                  className="font-light uppercase tracking-[0.15em] mb-4 sm:mb-6"
                  style={{
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    letterSpacing: '0.2em',
                    opacity: 0.7,
                  }}
                >
                  {testimonial.company}
                </div>

                {/* Quote */}
                <blockquote
                  className="font-light mb-5 sm:mb-8 max-w-[65ch]"
                  style={{
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                    lineHeight: '1.7',
                    letterSpacing: '0.01em',
                    opacity: 0.9,
                  }}
                >
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Reviewer info */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(212, 192, 190, 0.5)',
                      color: 'var(--color-ink-black)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p
                      className="font-medium"
                      style={{
                        color: 'var(--color-ink-black)',
                        fontSize: '0.9375rem',
                        lineHeight: '1.4',
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="font-light"
                      style={{
                        color: 'var(--color-ink-black)',
                        fontSize: '0.8125rem',
                        lineHeight: '1.4',
                        opacity: 0.75,
                      }}
                    >
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
