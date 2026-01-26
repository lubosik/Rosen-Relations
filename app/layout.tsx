import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rosenrelations.com'),
  title: {
    default: 'Rosen Relations | Luxury PR & Coaching',
    template: '%s | Rosen Relations',
  },
  description: 'Transform high performance professionals into luxury-positioned brands that command attention, trust, and authority. Join Rosen Relations for comprehensive guided resources, online classes, training courses, and 1-on-1 coaching.',
  keywords: ['luxury PR', 'brand positioning', 'executive coaching', 'media training', 'business coaching', 'professional development'],
  authors: [{ name: 'Rosen Relations' }],
  creator: 'Rosen Relations',
  publisher: 'Rosen Relations',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Rosen Relations',
    title: 'Rosen Relations | Luxury PR & Coaching',
    description: 'Transform high performance professionals into luxury-positioned brands that command attention, trust, and authority.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rosen Relations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rosen Relations | Luxury PR & Coaching',
    description: 'Transform high performance professionals into luxury-positioned brands.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${workSans.variable} ${playfairDisplay.variable} antialiased`}
        style={{ backgroundColor: 'var(--color-soft-ivory)' }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only"
          style={{
            position: 'absolute',
            left: '-9999px',
          }}
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />

          {/* Main content area - allows full-bleed sections */}
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
