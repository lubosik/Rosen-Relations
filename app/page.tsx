import { Metadata } from 'next';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StatementBlock from '@/components/StatementBlock';
import ValueCards from '@/components/ValueCards';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Take control of your media footprint. Transform high performance professionals into luxury-positioned brands that command attention, trust, and authority.',
  openGraph: {
    title: 'Rosen Relations | Luxury PR & Coaching',
    description: 'Take control of your media footprint. Transform high performance professionals into luxury-positioned brands.',
  },
};

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rosen Relations',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rosenrelations.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://rosenrelations.com'}/logo.png`,
    description: 'Transform high performance professionals into luxury-positioned brands that command attention, trust, and authority.',
    sameAs: [
      // Add social media URLs when available
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <AboutSection />
      <StatementBlock />
      <ValueCards />
      <CTABanner />
    </>
  );
}
