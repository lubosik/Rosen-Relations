'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Container from './Container';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header 
      role="banner" 
      className="sticky top-0 z-50 w-full backdrop-blur-sm"
      style={{ 
        backgroundColor: 'rgba(235, 234, 223, 0.95)',
        borderBottom: '1px solid rgba(212, 192, 190, 0.2)'
      }}
    >
      <Container>
        <nav className="relative flex items-center justify-between py-4 sm:py-6">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm"
            style={{ 
              outlineColor: 'var(--color-rose-accent)',
              color: 'var(--color-ink-black)'
            }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Left Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link nav-link-hover ${isActive ? 'active' : ''}`}
                  style={{ 
                    color: isActive 
                      ? 'var(--color-rose-accent)' 
                      : 'var(--color-ink-black)'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Centered Brand Wordmark */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-base sm:text-lg lg:text-2xl font-light transition-opacity duration-300 hover:opacity-70 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ 
              color: 'var(--color-ink-black)',
              letterSpacing: '0.15em',
              outlineColor: 'rgba(240, 176, 176, 0.5)'
            }}
          >
            <span className="hidden sm:inline">ROSEN RELATIONS</span>
            <span className="sm:hidden">ROSEN</span>
          </Link>

          {/* Right Authentication Links - Desktop */}
          <div className="hidden lg:flex items-center gap-4 lg:gap-6">
            <Link
              href="/login"
              className="nav-link nav-link-hover focus:outline-none"
              style={{ color: 'var(--color-ink-black)' }}
            >
              Login
            </Link>
            <Link
              href="/join"
              className="button px-4 py-2 lg:px-6 lg:py-2.5 text-xs lg:text-sm transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ 
                backgroundColor: 'var(--color-ink-black)',
                color: 'var(--color-pure-white)',
                outlineColor: 'var(--color-ink-black)'
              }}
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Auth - Show when menu closed */}
          {!isMobileMenuOpen && (
            <div className="lg:hidden flex items-center gap-3">
              <Link
                href="/login"
                className="nav-link text-xs focus:outline-none"
                style={{ color: 'var(--color-ink-black)' }}
              >
                Login
              </Link>
              <Link
                href="/join"
                className="button px-3 py-1.5 text-xs transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ 
                  backgroundColor: 'var(--color-ink-black)',
                  color: 'var(--color-pure-white)',
                  outlineColor: 'var(--color-ink-black)'
                }}
              >
                Join
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden border-t"
            style={{ 
              borderTopColor: 'rgba(212, 192, 190, 0.2)',
              backgroundColor: 'rgba(235, 234, 223, 0.98)'
            }}
          >
            <div className="py-4 space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 nav-link ${isActive ? 'active' : ''}`}
                    style={{ 
                      color: isActive 
                        ? 'var(--color-rose-accent)' 
                        : 'var(--color-ink-black)'
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t px-4 space-y-3" style={{ borderTopColor: 'rgba(212, 192, 190, 0.2)' }}>
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block nav-link"
                  style={{ color: 'var(--color-ink-black)' }}
                >
                  Login
                </Link>
                <Link
                  href="/join"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="button block w-full text-center px-4 py-2.5 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ 
                    backgroundColor: 'var(--color-ink-black)',
                    color: 'var(--color-pure-white)',
                    outlineColor: 'var(--color-ink-black)',
                    fontSize: '0.875rem'
                  }}
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
