'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from './Container';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

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
        <nav className="relative flex items-center justify-between py-6">
          {/* Left Navigation Links */}
          <div className="flex items-center gap-6 lg:gap-8">
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
            className="absolute left-1/2 -translate-x-1/2 text-xl lg:text-2xl font-light transition-opacity duration-300 hover:opacity-70 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ 
              color: 'var(--color-ink-black)',
              letterSpacing: '0.15em',
              outlineColor: 'rgba(240, 176, 176, 0.5)'
            }}
          >
            ROSEN RELATIONS
          </Link>

          {/* Right Authentication Links */}
          <div className="flex items-center gap-4 lg:gap-6">
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
        </nav>
      </Container>
    </header>
  );
}
