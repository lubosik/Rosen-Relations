'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from './Container';

const packages = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: '$199',
    annualPrice: '$1,990',
    description: 'Get the content system and folder structure. Receive edited content delivered to your Drive, then post and engage yourself.',
    features: [
      'Content system & folder structure',
      'Edited content delivered to your Drive',
      'You post & engage independently',
    ],
    notIncluded: [
      'Auto-posting via Hootsuite',
      'Automated content flow (Make)',
      'Monthly performance reports',
      'Auto replies via ManyChat',
      'Auto DMs for lead qualification',
      'Dedicated account manager',
    ],
  },
  {
    id: 'hands-free',
    name: 'Hands-Free Posting',
    monthlyPrice: '$999',
    annualPrice: '$9,990',
    description: 'Everything in Starter, plus auto-posting. We use Hootsuite to schedule and publish, and Make to automatically move content from your Drive into the scheduler. At the end of each month, you also get a simple performance report.',
    features: [
      'Everything in Starter',
      'Auto-posting via Hootsuite',
      'Automated content flow (Make)',
      'Monthly performance reports',
      'Dedicated account manager',
    ],
    notIncluded: [
      'Auto replies via ManyChat',
      'Auto DMs for lead qualification',
      'Automated engagement workflows',
    ],
    featured: true,
    badge: 'Most Popular',
  },
  {
    id: 'hands-free-engagement',
    name: 'Hands-Free Posting + Auto-Engagement',
    monthlyPrice: '$1,499',
    annualPrice: '$14,990',
    description: 'Everything in Hands-Free Posting, plus auto replies and auto DMs using ManyChat. When people comment "how much" or DM "send info," it replies for you and pushes them toward the next step, without you living in your inbox.',
    features: [
      'Everything in Hands-Free Posting',
      'Auto replies via ManyChat',
      'Auto DMs for lead qualification',
      'Automated engagement workflows',
      'Monthly performance reports',
      'Dedicated account manager',
    ],
  },
];

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section 
      className="w-full py-20 sm:py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-soft-ivory)' }}
    >
      <Container>
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Headline */}
          <div className="text-center space-y-6">
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

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 px-4">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                className={`font-light transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm px-2 py-1`}
                style={{ 
                  color: billingPeriod === 'monthly' ? 'var(--color-ink-black)' : 'var(--color-ink-black)',
                  fontSize: 'clamp(0.875rem, 2vw, 0.9375rem)',
                  opacity: billingPeriod === 'monthly' ? 1 : 0.5,
                  outlineColor: 'var(--color-rose-accent)'
                }}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  backgroundColor: billingPeriod === 'annual' ? 'var(--color-rose-accent)' : 'rgba(212, 192, 190, 0.5)',
                  outlineColor: 'var(--color-rose-accent)'
                }}
                aria-label="Toggle billing period"
              >
                <span
                  className="absolute top-1 left-1 w-5 h-5 rounded-full transition-transform duration-300"
                  style={{
                    transform: billingPeriod === 'annual' ? 'translateX(28px)' : 'translateX(0)',
                    backgroundColor: 'var(--color-pure-white)',
                    boxShadow: '0 2px 4px rgba(11, 11, 11, 0.2)'
                  }}
                />
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('annual')}
                className={`font-light transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm px-2 py-1 flex items-center flex-wrap justify-center gap-1`}
                style={{ 
                  color: billingPeriod === 'annual' ? 'var(--color-ink-black)' : 'var(--color-ink-black)',
                  fontSize: 'clamp(0.875rem, 2vw, 0.9375rem)',
                  opacity: billingPeriod === 'annual' ? 1 : 0.5,
                  outlineColor: 'var(--color-rose-accent)'
                }}
              >
                <span>Annual</span>
                {billingPeriod === 'annual' && (
                  <span 
                    className="text-xs"
                    style={{ 
                      color: 'var(--color-rose-accent)'
                    }}
                  >
                    (Save 2 months)
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-6">
            {packages.map((pkg) => {
              const price = billingPeriod === 'monthly' ? pkg.monthlyPrice : pkg.annualPrice;
              const period = billingPeriod === 'monthly' ? '/mo' : '/yr';
              
              return (
                <div
                  key={pkg.id}
                  className={`pricing-card relative p-6 sm:p-8 lg:p-10 rounded-lg transition-all duration-300 ${
                    pkg.featured ? 'featured' : ''
                  }`}
                  style={{
                    background: pkg.featured
                      ? 'linear-gradient(135deg, rgba(235, 234, 223, 0.95) 0%, rgba(231, 222, 207, 0.9) 100%)'
                      : 'linear-gradient(135deg, rgba(235, 234, 223, 0.9) 0%, rgba(231, 222, 207, 0.85) 100%)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: pkg.featured
                      ? '2px solid rgba(212, 192, 190, 0.5)'
                      : '1px solid rgba(212, 192, 190, 0.4)',
                    boxShadow: pkg.featured
                      ? '0 8px 32px rgba(11, 11, 11, 0.12), 0 2px 8px rgba(11, 11, 11, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                      : '0 4px 16px rgba(11, 11, 11, 0.08), 0 1px 4px rgba(11, 11, 11, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  }}
                >
                  {/* Badge */}
                  {pkg.badge && (
                    <div 
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-light uppercase tracking-wide"
                      style={{
                        backgroundColor: 'var(--color-rose-accent)',
                        color: 'var(--color-ink-black)',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {pkg.badge}
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 
                    className="font-light mb-3 sm:mb-4"
                    style={{ 
                      color: 'var(--color-ink-black)',
                      fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
                      letterSpacing: '0.03em',
                      lineHeight: '1.4'
                    }}
                  >
                    Package {packages.indexOf(pkg) + 1}: {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-baseline gap-2">
                      <span 
                        className="font-light"
                        style={{ 
                          color: 'var(--color-ink-black)',
                          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                          letterSpacing: '0.02em',
                          lineHeight: '1'
                        }}
                      >
                        {price}
                      </span>
                      <span 
                        className="font-light"
                        style={{ 
                          color: 'var(--color-ink-black)',
                          fontSize: 'clamp(0.875rem, 2vw, 1.25rem)',
                          opacity: 0.7
                        }}
                      >
                        {period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p 
                    className="font-light mb-4 sm:mb-6"
                    style={{ 
                      color: 'var(--color-ink-black)',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                      lineHeight: '1.7',
                      letterSpacing: '0.01em',
                      opacity: 0.85
                    }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span 
                          className="text-xs sm:text-sm font-light flex-shrink-0 mt-0.5"
                          style={{ 
                            color: 'var(--color-rose-accent)'
                          }}
                        >
                          ✓
                        </span>
                        <span 
                          className="text-xs sm:text-sm font-light"
                          style={{ 
                            color: 'var(--color-ink-black)',
                            opacity: 0.7,
                            lineHeight: '1.5'
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Not Included Section (for Package 1 and 2) */}
                  {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                    <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3 border-t pt-4 sm:pt-6" style={{ borderTopColor: 'rgba(212, 192, 190, 0.3)' }}>
                      <p 
                        className="text-xs font-light uppercase tracking-wide mb-2 sm:mb-3"
                        style={{ 
                          color: 'var(--color-ink-black)',
                          opacity: 0.5,
                          letterSpacing: '0.1em'
                        }}
                      >
                        Not Included
                      </p>
                      {pkg.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span 
                            className="text-xs sm:text-sm font-light flex-shrink-0 mt-0.5"
                            style={{ 
                              color: 'var(--color-ink-black)',
                              opacity: 0.3
                            }}
                          >
                            ✗
                          </span>
                          <span 
                            className="text-xs sm:text-sm font-light line-through"
                            style={{ 
                              color: 'var(--color-ink-black)',
                              opacity: 0.3,
                              lineHeight: '1.5',
                              textDecorationColor: 'var(--color-ink-black)'
                            }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href="/join"
                    className="button block w-full text-center px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ 
                      backgroundColor: pkg.featured ? 'var(--color-ink-black)' : 'var(--color-blush-pink)',
                      color: pkg.featured ? 'var(--color-pure-white)' : 'var(--color-ink-black)',
                      outlineColor: pkg.featured ? 'var(--color-ink-black)' : 'var(--color-blush-pink)',
                      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                      letterSpacing: '0.08em',
                      boxShadow: pkg.featured 
                        ? '0 4px 12px rgba(11, 11, 11, 0.2)'
                        : '0 4px 12px rgba(244, 194, 194, 0.3)'
                    }}
                  >
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
