'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Container from '@/components/Container';
import Link from 'next/link';

const plans = [
  {
    id: 'monthly',
    name: 'Monthly Membership',
    price: '$39',
    period: '/mo',
    description: 'Monthly access to our growing library of online classes, training courses, special events, and 1-on-1 coaching sessions.',
  },
  {
    id: 'annual',
    name: 'Annual Membership',
    price: '$429',
    period: '/yr',
    badge: 'Get 1 month free',
    description: 'Annual access to our growing library of online classes, training courses, special events, and 1-on-1 coaching sessions.',
  },
];

function JoinForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan');
  const [selectedPlan, setSelectedPlan] = useState<string>(planParam || 'monthly');
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
              Join Rosen Relations
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
              Choose your membership plan and create your account to get started.
            </p>
          </div>
        </Container>
      </section>

      {/* Plan Selection and Form */}
      <section 
        className="w-full py-20 sm:py-24 lg:py-32"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Plan Selection */}
            <div>
              <h2 
                className="font-light mb-8 text-center"
                style={{ 
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  letterSpacing: '0.04em',
                  lineHeight: '1.3'
                }}
              >
                Select Your Plan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlan(plan.id)}
                    className="p-6 rounded-lg text-left transition-all duration-300"
                    style={{
                      background: selectedPlan === plan.id
                        ? 'linear-gradient(135deg, rgba(235, 234, 223, 0.95) 0%, rgba(231, 222, 207, 0.9) 100%)'
                        : 'linear-gradient(135deg, rgba(235, 234, 223, 0.8) 0%, rgba(231, 222, 207, 0.75) 100%)',
                      border: selectedPlan === plan.id
                        ? '2px solid rgba(240, 176, 176, 0.6)'
                        : '1px solid rgba(212, 192, 190, 0.4)',
                      cursor: 'pointer',
                      boxShadow: selectedPlan === plan.id
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
                    {plan.badge && (
                      <div 
                        className="text-xs font-light uppercase tracking-wide mb-2"
                        style={{ 
                          color: 'var(--color-rose-accent)',
                          letterSpacing: '0.1em'
                        }}
                      >
                        {plan.badge}
                      </div>
                    )}
                    <h3 
                      className="font-light mb-2"
                      style={{ 
                        color: 'var(--color-ink-black)',
                        fontSize: '1.25rem',
                        letterSpacing: '0.03em'
                      }}
                    >
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span 
                        className="font-light"
                        style={{ 
                          color: 'var(--color-ink-black)',
                          fontSize: '2rem'
                        }}
                      >
                        {plan.price}
                      </span>
                      <span 
                        className="font-light"
                        style={{ 
                          color: 'var(--color-ink-black)',
                          opacity: 0.7
                        }}
                      >
                        {plan.period}
                      </span>
                    </div>
                    <p 
                      className="font-light text-sm"
                      style={{ 
                        color: 'var(--color-ink-black)',
                        opacity: 0.8,
                        lineHeight: '1.6'
                      }}
                    >
                      {plan.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Registration Form */}
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
              <h2 
                className="font-light mb-8"
                style={{ 
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  letterSpacing: '0.03em',
                  lineHeight: '1.3'
                }}
              >
                Create Your Account
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 rounded-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: 'var(--color-pure-white)',
                      borderColor: 'rgba(212, 192, 190, 0.4)',
                      color: 'var(--color-ink-black)',
                      fontSize: '1rem',
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
                    className="w-full px-4 py-3 rounded-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: 'var(--color-pure-white)',
                      borderColor: 'rgba(212, 192, 190, 0.4)',
                      color: 'var(--color-ink-black)',
                      fontSize: '1rem',
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
                    className="w-full px-4 py-3 rounded-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: 'var(--color-pure-white)',
                      borderColor: 'rgba(212, 192, 190, 0.4)',
                      color: 'var(--color-ink-black)',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-sans)'
                    }}
                  />
                  <p 
                    className="mt-2 text-sm font-light"
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
                    className="button w-full px-10 py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ 
                      backgroundColor: 'var(--color-ink-black)',
                      color: 'var(--color-pure-white)',
                      outlineColor: 'var(--color-ink-black)',
                      fontSize: '0.875rem',
                      letterSpacing: '0.08em'
                    }}
                  >
                    {isSubmitting ? 'Creating Account...' : `Join ${plans.find(p => p.id === selectedPlan)?.name}`}
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
