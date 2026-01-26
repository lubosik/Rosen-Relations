import Image from 'next/image';

export default function StatementBlock() {
  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-32" style={{ minHeight: '70vh' }}>
      {/* Blurred Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-section.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={75}
          style={{ 
            transform: 'scale(1.1)',
            filter: 'blur(20px) brightness(0.9) saturate(1.1)'
          }}
        />
      </div>

      {/* Premium Glassmorphism Panel */}
      <div className="relative flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
        <div 
          className="statement-panel w-full max-w-4xl mx-auto px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(235, 234, 223, 0.85) 0%, rgba(231, 222, 207, 0.8) 100%)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            border: '1.5px solid rgba(212, 192, 190, 0.5)',
            boxShadow: '0 8px 32px rgba(11, 11, 11, 0.12), 0 2px 8px rgba(11, 11, 11, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(212, 192, 190, 0.2)',
          }}
        >
          {/* Statement Text */}
          <div 
            className="statement text-center space-y-4 sm:space-y-6"
            style={{ 
              color: 'var(--color-ink-black)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              lineHeight: '1.5',
              letterSpacing: '0.02em',
              textShadow: '0 1px 2px rgba(235, 234, 223, 0.5)'
            }}
          >
            <p className="font-light">Your brand intentional.</p>
            <p className="font-light">Your presence understood.</p>
            <p className="font-light">Your story redefined.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
