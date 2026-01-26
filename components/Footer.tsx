import Link from 'next/link';
import Container from './Container';

const footerLinks = [
  { href: '/programs', label: 'Programs' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer 
      role="contentinfo" 
      className="w-full border-t"
      style={{ 
        backgroundColor: 'var(--color-soft-ivory)',
        borderTopColor: 'rgba(212, 192, 190, 0.2)'
      }}
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
          {/* Left: Brand Name */}
          <div 
            className="text-lg font-light tracking-wide uppercase"
            style={{ 
              color: 'var(--color-ink-black)',
              letterSpacing: '0.1em'
            }}
          >
            ROSEN COACHING
          </div>

          {/* Right: Footer Links */}
          <nav className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link footer-link focus:outline-none"
                style={{ 
                  color: 'var(--color-ink-black)',
                  textDecorationColor: 'var(--color-ink-black)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
