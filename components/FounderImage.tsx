'use client';

/**
 * Premium founder image with subtle scroll-triggered reveal.
 * Respects prefers-reduced-motion (no animation when requested).
 * Uses translate3d for GPU acceleration; reduced movement on mobile to avoid jank.
 */

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { rosenAssets } from '@/lib/rosen-assets';

export default function FounderImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mm = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mm.matches);
    const handler = () => setPrefersReducedMotion(mm.matches);
    mm.addEventListener('change', handler);

    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const mobileHandler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', mobileHandler);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      mm.removeEventListener('change', handler);
      mq.removeEventListener('change', mobileHandler);
      observer.disconnect();
    };
  }, []);

  const shouldAnimate = isVisible && !prefersReducedMotion;
  const translateY = isMobile ? '0.5rem' : '1rem';

  return (
    <div
      ref={ref}
      className="relative w-full max-w-md mx-auto aspect-[4/5] overflow-hidden rounded-lg min-w-0"
      style={{
        borderRadius: '8px',
        boxShadow: '0 20px 60px rgba(11, 11, 11, 0.12), 0 4px 16px rgba(11, 11, 11, 0.08)',
        border: '1px solid rgba(212, 192, 190, 0.25)',
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: shouldAnimate ? 1 : prefersReducedMotion ? 1 : 0.9,
        transform: shouldAnimate ? 'translate3d(0, 0, 0)' : prefersReducedMotion ? 'none' : `translate3d(0, ${translateY}, 0)`,
      }}
    >
      <Image
        src={rosenAssets.founderPicture}
        alt="Chantal Nani Rosen, founder of Rosen Relations"
        fill
        className="object-cover object-center"
        sizes="(max-width: 640px) 320px, (max-width: 1024px) 50vw, 448px"
        quality={92}
      />
    </div>
  );
}
