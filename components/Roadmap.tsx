'use client';

/**
 * Editorial roadmap — guided journey with four milestones.
 * Hover (desktop) or tap (mobile) reveals full content. Keyboard accessible.
 * Respects prefers-reduced-motion. Mobile-first with clear expand affordance.
 */

import { useState, useEffect, useRef } from 'react';

export interface RoadmapMilestone {
  number: string;
  title: string;
  hint: string;
  body: string;
}

const roadmapData: RoadmapMilestone[] = [
  { number: '01', title: 'Identify your starting point', hint: 'Find your why.', body: "What is step one when creating a business? The answer is simple, find your why. That will be the foundation in which you stand on!" },
  { number: '02', title: 'Bring your ideas to life', hint: 'Make them real.', body: "Remember those amazing ideas locked up inside your mind? It's time to make them real! You already made the choice, now let's put it into action!" },
  { number: '03', title: 'Do others see your vision?', hint: 'Present with confidence.', body: "Learn to present yourself and your concepts with confidence. Command attention that transcends time." },
  { number: '04', title: 'Expand your business', hint: 'Turn it into legacy.', body: "Break through walls and turn your business into legacy. Is your business a house hold name people are proud to partner with?" },
];

export default function Roadmap() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target as Node)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMilestoneClick = (index: number) => {
    const nextIndex = activeIndex === index ? null : index;
    setActiveIndex(nextIndex);
    // Scroll expanded panel into view on mobile (reduces jumpy reflow)
    if (nextIndex !== null && typeof window !== 'undefined' && window.innerWidth < 1024) {
      requestAnimationFrame(() => {
        const el = document.getElementById(`roadmap-detail-${nextIndex}`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 sm:py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Milestones row */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div
            className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 lg:block"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(212, 192, 190, 0.4) 10%, rgba(212, 192, 190, 0.4) 90%, transparent 100%)',
            }}
            aria-hidden
          />

          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-6">
            {roadmapData.map((milestone, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={milestone.number}
                  className="relative flex flex-col items-stretch"
                >
                  <button
                    type="button"
                    onClick={() => handleMilestoneClick(index)}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className="relative w-full min-h-[44px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-rose-accent)] rounded-lg p-6 sm:p-8 pr-12 lg:pr-8 transition-all duration-300 flex flex-col items-stretch"
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(235, 234, 223, 0.95) 0%, rgba(231, 222, 207, 0.9) 100%)'
                        : 'linear-gradient(135deg, rgba(235, 234, 223, 0.85) 0%, rgba(231, 222, 207, 0.8) 100%)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                      border: '1px solid rgba(212, 192, 190, 0.4)',
                      boxShadow: isActive
                        ? '0 8px 32px rgba(11, 11, 11, 0.12), 0 2px 8px rgba(11, 11, 11, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                        : '0 4px 16px rgba(11, 11, 11, 0.06), 0 1px 4px rgba(11, 11, 11, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                      opacity: activeIndex !== null && !isActive ? 0.6 : 1,
                      filter: activeIndex !== null && !isActive ? 'blur(0.5px)' : 'none',
                    }}
                    aria-expanded={isActive}
                    aria-controls={`roadmap-detail-${index}`}
                    id={`roadmap-trigger-${index}`}
                    aria-label={`${milestone.title}. ${isActive ? 'Tap to collapse' : 'Tap to expand'}.`}
                  >
                    <span
                      className="block font-light tracking-[0.2em] text-xs mb-3"
                      style={{
                        color: 'var(--color-ink-black)',
                        letterSpacing: '0.25em',
                        opacity: 0.8,
                      }}
                    >
                      {milestone.number}
                    </span>
                    <h3
                      className="font-light mb-2"
                      style={{
                        color: 'var(--color-ink-black)',
                        fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                        letterSpacing: '0.03em',
                        lineHeight: '1.4',
                      }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className="font-light text-sm"
                      style={{
                        color: 'var(--color-ink-black)',
                        letterSpacing: '0.01em',
                        opacity: 0.75,
                      }}
                    >
                      {milestone.hint}
                    </p>
                    {/* Expand/collapse affordance - visible on mobile */}
                    <span
                      className={`lg:hidden absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                      style={{ color: 'var(--color-ink-black)', opacity: 0.6 }}
                      aria-hidden
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Expanded content panel - scrollable on mobile if content is long */}
          <div
            className="mt-4 sm:mt-6 min-h-[80px] transition-all duration-300"
            style={{
              transitionProperty: prefersReducedMotion ? 'none' : 'opacity, transform',
            }}
          >
            {roadmapData.map((milestone, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={`detail-${milestone.number}`}
                  id={`roadmap-detail-${index}`}
                  role="region"
                  aria-labelledby={`roadmap-trigger-${index}`}
                  className="mx-auto w-full max-w-2xl rounded-lg p-5 sm:p-8 max-h-[min(70vh,400px)] overflow-y-auto overscroll-contain scroll-mt-24"
                  style={{
                    display: isActive ? 'block' : 'none',
                    background: 'linear-gradient(135deg, rgba(235, 234, 223, 0.9) 0%, rgba(231, 222, 207, 0.85) 100%)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(212, 192, 190, 0.4)',
                    boxShadow: '0 4px 20px rgba(11, 11, 11, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                    animation: isActive && !prefersReducedMotion ? 'roadmapReveal 0.35s ease-out' : 'none',
                  }}
                >
                  <p
                    className="font-light"
                    style={{
                      color: 'var(--color-ink-black)',
                      fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                      lineHeight: '1.7',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {milestone.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
