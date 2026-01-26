'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import Link from 'next/link';

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Wire to auth provider
    // This is a UI shell - actual auth integration will happen later
    
    setTimeout(() => {
      setIsSubmitting(false);
      // TODO: Redirect to dashboard or return URL
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
              Welcome Back
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
              Sign in to access your account and continue your journey with Rosen Relations.
            </p>
          </div>
        </Container>
      </section>

      {/* Login Form */}
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
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="block font-light"
                      style={{ 
                        color: 'var(--color-ink-black)',
                        fontSize: '0.9375rem',
                        letterSpacing: '0.02em'
                      }}
                    >
                      Password *
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-sm font-light underline hover:no-underline transition-all duration-300"
                      style={{ 
                        color: 'var(--color-rose-accent)',
                        textDecorationColor: 'var(--color-rose-accent)'
                      }}
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
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
                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                  </button>
                </div>

                <p 
                  className="text-center text-sm font-light"
                  style={{ 
                    color: 'var(--color-ink-black)',
                    opacity: 0.7
                  }}
                >
                  Don't have an account?{' '}
                  <Link
                    href="/join"
                    className="underline hover:no-underline transition-all duration-300"
                    style={{ 
                      color: 'var(--color-rose-accent)',
                      textDecorationColor: 'var(--color-rose-accent)'
                    }}
                  >
                    Join now
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
