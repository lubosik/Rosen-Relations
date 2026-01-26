'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Container from './Container';

export default function CTABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-32"
      style={{ minHeight: '60vh' }}
    >
      {/* Soft Floral Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(244, 194, 194, 0.25) 0%, rgba(240, 176, 176, 0.2) 30%, rgba(235, 234, 223, 0.4) 70%, rgba(231, 222, 207, 0.5) 100%)',
          backgroundImage: 'radial-gradient(ellipse at 75% 25%, rgba(244, 194, 194, 0.2) 0%, transparent 60%), radial-gradient(ellipse at 25% 75%, rgba(240, 176, 176, 0.15) 0%, transparent 60%)',
        }}
      />

      {/* Elegant Overlay for Readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(235, 234, 223, 0.3) 0%, rgba(235, 234, 223, 0.5) 50%, rgba(235, 234, 223, 0.7) 100%)',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
        }}
      />

      {/* Content */}
      <Container>
        <div 
          className={`cta-banner-content relative z-10 text-center space-y-6 sm:space-y-8 ${
            isVisible ? 'cta-visible' : 'cta-hidden'
          }`}
        >
          {/* Headline */}
          <h2 
            className="font-light leading-tight"
            style={{ 
              color: 'var(--color-ink-black)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '0.04em',
              textShadow: '0 2px 8px rgba(235, 234, 223, 0.8)'
            }}
          >
            Let's kickstart{' '}
            <span className="relative inline-block">
              your
              <span 
                className="absolute -bottom-1 left-0 right-0 h-0.5"
                style={{ 
                  backgroundColor: 'var(--color-rose-accent)',
                  boxShadow: '0 1px 3px rgba(240, 176, 176, 0.4)'
                }}
                aria-hidden="true"
              />
            </span>{' '}
            media footprint!
          </h2>

          {/* Subtext */}
          <p 
            className="font-light max-w-2xl mx-auto"
            style={{ 
              color: 'var(--color-ink-black)',
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              lineHeight: '1.6',
              letterSpacing: '0.01em'
            }}
          >
            We'll be with you every step of the way.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href="/join"
              className="button inline-block px-10 py-4 rounded-sm transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ 
                backgroundColor: 'var(--color-blush-pink)',
                color: 'var(--color-ink-black)',
                outlineColor: 'var(--color-blush-pink)',
                fontSize: '0.875rem',
                letterSpacing: '0.08em',
                boxShadow: '0 4px 16px rgba(244, 194, 194, 0.4), 0 2px 4px rgba(244, 194, 194, 0.2)'
              }}
            >
              Join now
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
