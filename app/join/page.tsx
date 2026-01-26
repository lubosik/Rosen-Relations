'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Container from '@/components/Container';
import Link from 'next/link';

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

function JoinForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan');
  const [selectedPlan, setSelectedPlan] = useState<string>(planParam || 'starter');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Wire to auth provider
    // This is a UI shell - actual auth integration will happen later
    
    setTimeout(() => {
      setIsSubmitting(false);
      // TODO: Redirect to dashboard or success page
    }, 1000);
  };

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
              Join Rosen Relations
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
              Choose your package and create your account to get started.
            </p>
          </div>
        </Container>
      </section>

      {/* Plan Selection and Form */}
      <section 
        className="w-full py-12 sm:py-20 lg:py-24"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            {/* Package Selection */}
            <div>
              <h2 
                className="font-light mb-6 sm:mb-8 text-center"
                style={{ 
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                  letterSpacing: '0.04em',
                  lineHeight: '1.3'
                }}
              >
                Choose the right plan for you
              </h2>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 mb-8">
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

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {packages.map((pkg) => {
                  const price = billingPeriod === 'monthly' ? pkg.monthlyPrice : pkg.annualPrice;
                  const period = billingPeriod === 'monthly' ? '/mo' : '/yr';
                  const isSelected = selectedPlan === pkg.id;
                  
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPlan(pkg.id)}
                      className="p-4 sm:p-6 lg:p-8 rounded-lg text-left transition-all duration-300 relative"
                      style={{
                        background: isSelected
                          ? 'linear-gradient(135deg, rgba(235, 234, 223, 0.95) 0%, rgba(231, 222, 207, 0.9) 100%)'
                          : 'linear-gradient(135deg, rgba(235, 234, 223, 0.8) 0%, rgba(231, 222, 207, 0.75) 100%)',
                        border: isSelected
                          ? '2px solid rgba(240, 176, 176, 0.6)'
                          : '1px solid rgba(212, 192, 190, 0.4)',
                        cursor: 'pointer',
                        boxShadow: isSelected
                          ? '0 0 0 2px rgba(240, 176, 176, 0.3)'
                          : 'none'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.outline = '2px solid rgba(240, 176, 176, 0.5)';
                        e.currentTarget.style.outlineOffset = '2px';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.outline = 'none';
                      }}
                    >
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
                      <div className="flex items-baseline gap-2 mb-4 sm:mb-6">
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
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Registration Form */}
            <div 
              className="p-6 sm:p-8 lg:p-10 xl:p-12 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(235, 234, 223, 0.95) 0%, rgba(231, 222, 207, 0.9) 100%)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(212, 192, 190, 0.4)',
                boxShadow: '0 8px 32px rgba(11, 11, 11, 0.08), 0 2px 8px rgba(11, 11, 11, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              }}
            >
              <h2 
                className="font-light mb-6 sm:mb-8"
                style={{ 
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1.25rem, 4vw, 2rem)',
                  letterSpacing: '0.03em',
                  lineHeight: '1.3'
                }}
              >
                Create Your Account
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-light"
                    style={{ 
                      color: 'var(--color-ink-black)',
                      fontSize: '0.9375rem',
                      letterSpacing: '0.02em'
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: 'var(--color-pure-white)',
                      borderColor: 'rgba(212, 192, 190, 0.4)',
                      color: 'var(--color-ink-black)',
                      fontSize: 'clamp(0.9375rem, 2vw, 1rem)',
                      fontFamily: 'var(--font-sans)'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-light"
                    style={{ 
                      color: 'var(--color-ink-black)',
                      fontSize: '0.9375rem',
                      letterSpacing: '0.02em'
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: 'var(--color-pure-white)',
                      borderColor: 'rgba(212, 192, 190, 0.4)',
                      color: 'var(--color-ink-black)',
                      fontSize: 'clamp(0.9375rem, 2vw, 1rem)',
                      fontFamily: 'var(--font-sans)'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 font-light"
                    style={{ 
                      color: 'var(--color-ink-black)',
                      fontSize: '0.9375rem',
                      letterSpacing: '0.02em'
                    }}
                  >
                    Password *
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    minLength={8}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: 'var(--color-pure-white)',
                      borderColor: 'rgba(212, 192, 190, 0.4)',
                      color: 'var(--color-ink-black)',
                      fontSize: 'clamp(0.9375rem, 2vw, 1rem)',
                      fontFamily: 'var(--font-sans)'
                    }}
                  />
                  <p 
                    className="mt-2 text-xs sm:text-sm font-light"
                    style={{ 
                      color: 'var(--color-ink-black)',
                      opacity: 0.6
                    }}
                  >
                    Must be at least 8 characters
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button w-full px-8 sm:px-10 py-3 sm:py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ 
                      backgroundColor: 'var(--color-ink-black)',
                      color: 'var(--color-pure-white)',
                      outlineColor: 'var(--color-ink-black)',
                      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                      letterSpacing: '0.08em'
                    }}
                  >
                    {isSubmitting ? 'Creating Account...' : `Join ${packages.find(p => p.id === selectedPlan)?.name || 'Package'}`}
                  </button>
                </div>

                <p 
                  className="text-center text-sm font-light"
                  style={{ 
                    color: 'var(--color-ink-black)',
                    opacity: 0.7
                  }}
                >
                  Already have an account?{' '}
                  <Link
                    href="/login"
                    className="underline hover:no-underline transition-all duration-300"
                    style={{ 
                      color: 'var(--color-rose-accent)',
                      textDecorationColor: 'var(--color-rose-accent)'
                    }}
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: 'var(--color-soft-ivory)' }}>
        <p style={{ color: 'var(--color-ink-black)' }}>Loading...</p>
      </div>
    }>
      <JoinForm />
    </Suspense>
  );
}
