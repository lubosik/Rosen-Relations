'use client';

/**
 * Developer-only mobile QA overlay.
 * Shows current breakpoint and horizontal overflow indicator.
 * Only renders when NEXT_PUBLIC_MOBILE_QA_DEBUG=true.
 * Does not ship in production (env is undefined at build).
 */

import { useEffect, useState } from 'react';

const BREAKPOINTS = [
  { name: 'xs', min: 0, max: 359 },
  { name: 'sm', min: 360, max: 639 },
  { name: 'md', min: 640, max: 767 },
  { name: 'lg', min: 768, max: 1023 },
  { name: 'xl', min: 1024, max: 1279 },
  { name: '2xl', min: 1280, max: 9999 },
];

function getBreakpoint(width: number): string {
  const bp = BREAKPOINTS.find((b) => width >= b.min && width <= b.max);
  return bp?.name ?? 'xs';
}

function getLabel(width: number): string {
  if (width < 360) return '&lt;360';
  if (width < 375) return '360';
  if (width < 390) return '375';
  if (width < 412) return '390';
  if (width < 428) return '412';
  if (width < 768) return '428';
  if (width < 1024) return '768';
  return `${width}px`;
}

export default function MobileQADebugOverlay() {
  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [overflowX, setOverflowX] = useState(false);

  const isEnabled = process.env.NEXT_PUBLIC_MOBILE_QA_DEBUG === 'true';

  useEffect(() => {
    if (!isEnabled) return;
    setMounted(true);
    const update = () => {
      setWidth(window.innerWidth);
      setOverflowX(document.documentElement.scrollWidth > window.innerWidth);
    };
    update();
    window.addEventListener('resize', update);
    const ro = new ResizeObserver(update);
    ro.observe(document.documentElement);
    return () => {
      window.removeEventListener('resize', update);
      ro.disconnect();
    };
  }, [isEnabled]);

  if (!isEnabled || !mounted) return null;

  return (
    <div
      className="fixed bottom-4 left-4 z-[9999] pointer-events-none select-none"
      aria-hidden
    >
      <div
        className="px-3 py-2 rounded text-xs font-mono shadow-lg"
        style={{
          backgroundColor: 'rgba(11, 11, 11, 0.85)',
          color: '#fff',
        }}
      >
        <div>Breakpoint: {getBreakpoint(width)}</div>
        <div>Width: {getLabel(width)}</div>
        <div style={{ color: overflowX ? '#f87171' : '#86efac' }}>
          Overflow: {overflowX ? 'YES' : 'No'}
        </div>
      </div>
    </div>
  );
}
