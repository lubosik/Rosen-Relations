import Link from 'next/link';
import Container from './Container';

const plans = [
  {
    name: 'Monthly Membership',
    price: '$39',
    period: '/mo',
    badge: null,
    description: 'Monthly access to our growing library of online classes, training courses, special events, and 1-on-1 coaching sessions.',
    cta: 'Start Monthly',
  },
  {
    name: 'Annual Membership',
    price: '$429',
    period: '/yr',
    badge: 'Get 1 month free',
    description: 'Annual access to our growing library of online classes, training courses, special events, and 1-on-1 coaching sessions.',
    cta: 'Start Annual',
    featured: true,
  },
];

export default function PricingSection() {
  return (
    <section 
      className="w-full py-20 sm:py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-soft-ivory)' }}
    >
      <Container>
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Headline */}
          <div className="text-center">
            <h2 
              className="font-light"
              style={{ 
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                letterSpacing: '0.04em',
                lineHeight: '1.3'
              }}
            >
              Choose the right plan for you
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card relative p-8 sm:p-10 rounded-lg transition-all duration-300 ${
                  plan.featured ? 'featured' : ''
                }`}
                style={{
                  background: plan.featured
                    ? 'linear-gradient(135deg, rgba(235, 234, 223, 0.95) 0%, rgba(231, 222, 207, 0.9) 100%)'
                    : 'linear-gradient(135deg, rgba(235, 234, 223, 0.9) 0%, rgba(231, 222, 207, 0.85) 100%)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: plan.featured
                    ? '2px solid rgba(212, 192, 190, 0.5)'
                    : '1px solid rgba(212, 192, 190, 0.4)',
                  boxShadow: plan.featured
                    ? '0 8px 32px rgba(11, 11, 11, 0.12), 0 2px 8px rgba(11, 11, 11, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                    : '0 4px 16px rgba(11, 11, 11, 0.08), 0 1px 4px rgba(11, 11, 11, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-light uppercase tracking-wide"
                    style={{
                      backgroundColor: 'var(--color-rose-accent)',
                      color: 'var(--color-ink-black)',
                      letterSpacing: '0.1em'
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan Name */}
                <h3 
                  className="font-light mb-4"
                  style={{ 
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                    letterSpacing: '0.03em',
                    lineHeight: '1.4'
                  }}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span 
                      className="font-light"
                      style={{ 
                        color: 'var(--color-ink-black)',
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        letterSpacing: '0.02em',
                        lineHeight: '1'
                      }}
                    >
                      {plan.price}
                    </span>
                    <span 
                      className="font-light"
                      style={{ 
                        color: 'var(--color-ink-black)',
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        opacity: 0.7
                      }}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p 
                  className="font-light mb-8"
                  style={{ 
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                    lineHeight: '1.7',
                    letterSpacing: '0.01em',
                    opacity: 0.85
                  }}
                >
                  {plan.description}
                </p>

                {/* Trust Microcopy */}
                <div className="mb-8 space-y-3">
                  <div className="flex items-start gap-2">
                    <span 
                      className="text-sm font-light"
                      style={{ 
                        color: 'var(--color-ink-black)',
                        opacity: 0.7,
                        lineHeight: '1.5'
                      }}
                    >
                      ✓ Cancel anytime
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span 
                      className="text-sm font-light"
                      style={{ 
                        color: 'var(--color-ink-black)',
                        opacity: 0.7,
                        lineHeight: '1.5'
                      }}
                    >
                      ✓ Full access to all resources
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span 
                      className="text-sm font-light"
                      style={{ 
                        color: 'var(--color-ink-black)',
                        opacity: 0.7,
                        lineHeight: '1.5'
                      }}
                    >
                      ✓ Priority support included
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/join"
                  className="button block w-full text-center px-8 py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ 
                    backgroundColor: plan.featured ? 'var(--color-ink-black)' : 'var(--color-blush-pink)',
                    color: plan.featured ? 'var(--color-pure-white)' : 'var(--color-ink-black)',
                    outlineColor: plan.featured ? 'var(--color-ink-black)' : 'var(--color-blush-pink)',
                    fontSize: '0.875rem',
                    letterSpacing: '0.08em',
                    boxShadow: plan.featured 
                      ? '0 4px 12px rgba(11, 11, 11, 0.2)'
                      : '0 4px 12px rgba(244, 194, 194, 0.3)'
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Class Pack Headings */}
          <div className="pt-8 border-t" style={{ borderTopColor: 'rgba(212, 192, 190, 0.3)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 
                  className="font-light mb-2"
                  style={{ 
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                    letterSpacing: '0.03em'
                  }}
                >
                  Beginner Class Pack
                </h3>
                <p 
                  className="font-light text-sm"
                  style={{ 
                    color: 'var(--color-ink-black)',
                    opacity: 0.6
                  }}
                >
                  Coming soon
                </p>
              </div>
              <div className="text-center">
                <h3 
                  className="font-light mb-2"
                  style={{ 
                    color: 'var(--color-ink-black)',
                    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                    letterSpacing: '0.03em'
                  }}
                >
                  Elite Class Pack
                </h3>
                <p 
                  className="font-light text-sm"
                  style={{ 
                    color: 'var(--color-ink-black)',
                    opacity: 0.6
                  }}
                >
                  Coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
