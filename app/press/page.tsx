import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';
import TestimonialsSection from '@/components/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Press',
  description: 'Stay inspired. Scroll for helpful tips, stories, and news from Rosen Relations. Read about our success stories and press coverage.',
  openGraph: {
    title: 'Press | Rosen Relations',
    description: 'Stay inspired. Scroll for helpful tips, stories, and news from Rosen Relations.',
  },
};

const pressPosts = [
  {
    id: 'tina-rose-featured',
    category: 'press',
    date: '2/19/20',
    title: 'In the Press: Tina & Rose Featured',
    image: '/hero-section.jpg',
    href: '/press/tina-rose-featured',
  },
  {
    id: 'shirley-l',
    category: 'success story',
    date: '6/19/19',
    title: 'Success Story: Shirley L.',
    image: '/home-image-2.webp',
    href: '/press/shirley-l',
  },
];

export default function PressPage() {
  return (
    <>
      {/* Header Section */}
      <section 
        className="w-full py-12 sm:py-16 lg:py-20"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 px-4">
            <h1 
              className="font-light"
              style={{ 
                color: 'var(--color-rose-accent)',
                fontSize: 'clamp(1.75rem, 6vw, 4rem)',
                letterSpacing: '0.05em',
                lineHeight: '1.25'
              }}
            >
              Stay inspired.
            </h1>
            <p 
              className="font-light"
              style={{ 
                color: 'var(--color-ink-black)',
                fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)',
                lineHeight: '1.6',
                letterSpacing: '0.01em',
                opacity: 0.7
              }}
            >
              Scroll for helpful tips, stories, and news.
            </p>
          </div>
        </Container>
      </section>

      {/* Press Listing */}
      <section 
        className="w-full py-8 sm:py-12 lg:py-16"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16 lg:space-y-20 min-w-0">
            {pressPosts.map((post) => (
              <article
                key={post.id}
                className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center"
              >
                {/* Left: Image */}
                <div className="relative w-full min-w-0 aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    quality={85}
                  />
                </div>

                {/* Right: Text Content */}
                <div className="flex flex-col gap-4 sm:gap-5 min-w-0">
                  {/* Category and Date */}
                  <div 
                    className="text-xs sm:text-sm font-light uppercase tracking-wide"
                    style={{ 
                      color: 'var(--color-rose-accent)',
                      letterSpacing: '0.1em'
                    }}
                  >
                    {post.category} | {post.date}
                  </div>

                  {/* Title */}
                  <h2 
                    className="font-light"
                    style={{ 
                      color: 'var(--color-rose-accent)',
                      fontSize: 'clamp(1.25rem, 4vw, 2rem)',
                      letterSpacing: '0.03em',
                      lineHeight: '1.4'
                    }}
                  >
                    {post.title}
                  </h2>

                  {/* Read More Link */}
                  <div className="pt-1 sm:pt-2">
                    <Link
                      href={post.href}
                      className="press-read-more font-light inline-flex items-center min-h-[44px] focus:outline-none"
                      style={{ 
                        color: 'var(--color-ink-black)',
                        textDecorationColor: 'var(--color-ink-black)',
                        fontSize: 'clamp(0.875rem, 2vw, 0.9375rem)'
                      }}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsSection />
    </>
  );
}
