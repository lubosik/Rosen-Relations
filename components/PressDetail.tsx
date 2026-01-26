import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';

interface PressDetailProps {
  title: string;
  category: string;
  date: string;
  image: string;
  imageAlt?: string;
}

export default function PressDetail({ title, category, date, image, imageAlt }: PressDetailProps) {
  // Format date for structured data
  const formatDateForSchema = (dateStr: string) => {
    // Convert "2/19/20" to ISO format
    const [month, day, year] = dateStr.split('/');
    const fullYear = year.length === 2 ? `20${year}` : year;
    return `${fullYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  const publishedDate = formatDateForSchema(date);

  // Structured data for article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    image: image.startsWith('/') ? `https://rosenrelations.com${image}` : image,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      '@type': 'Organization',
      name: 'Rosen Relations',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rosen Relations',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rosenrelations.com/logo.png',
      },
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Back Navigation */}
      <section 
        className="w-full py-8 sm:py-10"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <nav aria-label="Breadcrumb">
            <Link
              href="/press"
              className="press-read-more font-light inline-flex items-center gap-2 focus:outline-none"
              style={{ 
                color: 'var(--color-ink-black)',
                textDecorationColor: 'var(--color-ink-black)',
                fontSize: '0.9375rem'
              }}
            >
              <span aria-hidden="true">←</span>
              <span>Back to Press</span>
            </Link>
          </nav>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="relative w-full" style={{ minHeight: '40vh', maxHeight: '60vh' }}>
        <div className="relative w-full h-full aspect-[16/9]">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={90}
          />
        </div>
      </section>

      {/* Article Content */}
      <article 
        className="w-full py-12 sm:py-16 lg:py-20"
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <Container>
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 px-4">
            {/* Category and Date */}
            <div 
              className="text-xs sm:text-sm font-light uppercase tracking-wide"
              style={{ 
                color: 'var(--color-rose-accent)',
                letterSpacing: '0.1em'
              }}
            >
              {category} | {date}
            </div>

            {/* Title */}
            <h1 
              className="font-light"
              style={{ 
                color: 'var(--color-rose-accent)',
                fontSize: 'clamp(1.75rem, 6vw, 3rem)',
                letterSpacing: '0.03em',
                lineHeight: '1.3'
              }}
            >
              {title}
            </h1>

            {/* Article Body - Placeholder Content */}
            <div 
              className="space-y-6 sm:space-y-8"
              style={{ 
                color: 'var(--color-ink-black)'
              }}
            >
              <div className="space-y-4 sm:space-y-6">
                <p 
                  className="font-light"
                  style={{ 
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    lineHeight: '1.8',
                    letterSpacing: '0.01em'
                  }}
                >
                  This is placeholder content for the article. The full article content will be added here, providing detailed information about the press coverage or success story. The typography and spacing are designed to create a luxury editorial reading experience.
                </p>
                <p 
                  className="font-light"
                  style={{ 
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    lineHeight: '1.8',
                    letterSpacing: '0.01em'
                  }}
                >
                  The article will include comprehensive details, quotes, and insights that showcase the impact and significance of this coverage or success story. The content will be carefully crafted to maintain the premium editorial tone of the Rosen Relations brand.
                </p>
                <p 
                  className="font-light"
                  style={{ 
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    lineHeight: '1.8',
                    letterSpacing: '0.01em'
                  }}
                >
                  Additional paragraphs and content sections will be added here as the final content becomes available. The layout is designed to accommodate various content types while maintaining visual consistency and readability.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
