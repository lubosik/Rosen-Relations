'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Container from './Container';
import { rosenAssets } from '@/lib/rosen-assets';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/company', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/press', label: 'Press' },
  { href: '/foundation', label: 'Foundation' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close menu on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header 
      role="banner" 
      className="sticky top-0 z-50 w-full backdrop-blur-sm"
      style={{ 
        backgroundColor: 'rgba(235, 234, 223, 0.95)',
        borderBottom: '1px solid rgba(212, 192, 190, 0.2)',
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}
    >
      <Container>
        <nav className="flex items-center justify-between gap-4 py-4 sm:py-6">
          {/* Logo - top left */}
          <div className="flex-shrink-0 w-36 sm:w-40 lg:w-48 relative h-12 sm:h-14 lg:h-16">
            <Link href="/" className="block relative w-full h-full" aria-label="Rosen Relations home">
              <Image
                src={rosenAssets.logo}
                alt="Rosen Relations"
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 144px, (max-width: 1024px) 160px, 192px"
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Button - min 44px tap target */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-3 -m-1 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm"
            style={{ 
              outlineColor: 'var(--color-rose-accent)',
              color: 'var(--color-ink-black)'
            }}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6 flex-shrink-0"
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

          {/* Center Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 flex-1 min-w-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === '/' && pathname === '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link nav-link-hover whitespace-nowrap flex-shrink-0 ${isActive ? 'active' : ''}`}
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

          {/* Right: Book a Call - Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact#book"
              className="button px-4 py-2 lg:px-6 lg:py-2.5 text-xs lg:text-sm transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ 
                backgroundColor: 'var(--color-ink-black)',
                color: 'var(--color-pure-white)',
                outlineColor: 'var(--color-ink-black)'
              }}
            >
              Book a Call
            </Link>
          </div>

          {/* Right: Book a Call - Mobile (when menu closed) - min 44px tap target */}
          {!isMobileMenuOpen && (
            <div className="lg:hidden flex items-center">
              <Link
                href="/contact#book"
                className="button inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-4 py-3 text-xs transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ 
                  backgroundColor: 'var(--color-ink-black)',
                  color: 'var(--color-pure-white)',
                  outlineColor: 'var(--color-ink-black)',
                  fontSize: '0.7rem',
                  lineHeight: '1',
                  borderRadius: '2px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                Book a Call
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Dropdown - scrollable if content exceeds viewport */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden border-t max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain"
            style={{ 
              borderTopColor: 'rgba(212, 192, 190, 0.2)',
              backgroundColor: 'rgba(235, 234, 223, 0.98)',
              paddingLeft: 'env(safe-area-inset-left)',
              paddingRight: 'env(safe-area-inset-right)',
            }}
          >
            <nav className="py-4 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href === '/' && pathname === '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center min-h-[44px] px-4 py-3 nav-link ${isActive ? 'active' : ''}`}
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
              <div className="pt-4 mt-2 border-t px-4" style={{ borderTopColor: 'rgba(212, 192, 190, 0.2)' }}>
                <Link
                  href="/contact#book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="button flex items-center justify-center min-h-[44px] w-full text-center px-4 py-3 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ 
                    backgroundColor: 'var(--color-ink-black)',
                    color: 'var(--color-pure-white)',
                    outlineColor: 'var(--color-ink-black)',
                    fontSize: '0.875rem'
                  }}
                >
                  Book a Call
                </Link>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
