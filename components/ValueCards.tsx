import Container from './Container';

const valueCards = [
  {
    heading: 'Identify your starting point',
    body: "What is step one when creating a business? The answer is simple, find your why. That will be the foundation in which you stand on!",
  },
  {
    heading: 'Bring your ideas to life',
    body: "Remember those amazing ideas locked up inside your mind? It's time to make them real! You already made the choice, now let's put it into action!",
  },
  {
    heading: 'Do others see your vision?',
    body: "Learn to present yourself and your concepts with confidence. Command attention that transcends time.",
  },
  {
    heading: 'Expand your business',
    body: "Break through walls and turn your business into legacy. Is your business a house hold name people are proud to partner with?",
  },
];

export default function ValueCards() {
  return (
    <section 
      className="w-full py-20 sm:py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-soft-ivory)' }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {valueCards.map((card, index) => (
            <div
              key={index}
              className="value-card h-full p-8 sm:p-10 rounded-lg transition-all duration-300 flex flex-col"
              style={{
                background: 'linear-gradient(135deg, rgba(235, 234, 223, 0.9) 0%, rgba(231, 222, 207, 0.85) 100%)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(212, 192, 190, 0.4)',
                boxShadow: '0 4px 16px rgba(11, 11, 11, 0.08), 0 1px 4px rgba(11, 11, 11, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              }}
            >
              <h3 
                className="font-light mb-5"
                style={{ 
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                  letterSpacing: '0.03em',
                  lineHeight: '1.4'
                }}
              >
                {card.heading}
              </h3>
              <p 
                className="font-light flex-grow"
                style={{ 
                  color: 'var(--color-ink-black)',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                  lineHeight: '1.7',
                  letterSpacing: '0.01em'
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
