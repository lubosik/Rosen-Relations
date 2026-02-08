'use client';

/**
 * Calendly inline embed for Book a Call.
 * Loads external script safely to avoid Next.js hydration issues.
 * URL: https://calendly.com/nani-rrelations/30min
 */

import Script from 'next/script';
import { useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/nani-rrelations/30min';

export default function CalendlyEmbed() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <div className="w-full min-w-0 max-w-full overflow-hidden">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget w-full max-w-full min-w-0 rounded-lg overflow-hidden"
        data-url={CALENDLY_URL}
        style={{
          minWidth: 'min(320px, 100%)',
          width: '100%',
          height: 'min(700px, 85vh)',
          border: '1px solid rgba(212, 192, 190, 0.35)',
          boxShadow: '0 4px 20px rgba(11, 11, 11, 0.06)',
        }}
      />
    </div>
  );
}
