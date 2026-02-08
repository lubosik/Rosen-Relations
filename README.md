# Rosen Relations

Luxury PR & Coaching website for Rosen Relations - a custom-built Next.js application with a premium design system.

## Features

- **Luxury Design System** - Tokenized color palette, premium typography, and refined spacing
- **Full Marketing Site** - Home, About, Services, Foundation, Press, and Contact pages
- **Production-Ready** - SEO optimized, security headers, sitemap, and robots.txt
- **Responsive Design** - Mobile-first approach with elegant breakpoints
- **Accessibility** - WCAG compliant with keyboard navigation and reduced motion support
- **Performance** - Optimized images, code splitting, and fast page loads

## Tech Stack

- **Next.js 16** - App Router with TypeScript
- **Tailwind CSS v4** - Utility-first styling with design tokens
- **Next/Image** - Optimized image delivery
- **Next/Font** - Google Fonts optimization (Work Sans & Playfair Display)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
rosen-relations/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── foundation/        # Foundation page (Road to Her Smile)
│   ├── press/             # Press listing and detail pages
│   ├── services/          # Services page with pricing
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Header.tsx         # Site navigation
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Home hero section
│   └── ...                # Other section components
├── public/                # Static assets
│   ├── hero-section.jpg   # Hero image
│   └── home-image-2.webp # About section image
└── CLIENT_PORTAL_ARCHITECTURE.md  # Portal implementation guide
```

## Design System

### Color Palette

- **Blush Pink**: `#F4C2C2`
- **Rose Accent**: `#F0B0B0`
- **Dusty Rose**: `#D4C0BE`
- **Warm Sand**: `#E7DECF`
- **Soft Ivory**: `#EBEADF`
- **Ink Black**: `#0B0B0B`
- **Pure White**: `#FFFFFF`

### Typography

- **Primary Sans**: Work Sans (light, wide-tracked for nav and headings)
- **Serif**: Playfair Display (for quotes and statements)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Add environment variable: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
4. Deploy

The site is configured for optimal Vercel deployment with:
- Automatic image optimization
- Edge caching
- Serverless functions ready

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://rosenrelations.com
```

## Client Portal

See `CLIENT_PORTAL_ARCHITECTURE.md` for portal implementation recommendations. The portal is not yet implemented - the architecture document outlines two viable approaches.

## Production Checklist

See `PRODUCTION_NOTES.md` for a complete deployment checklist including:
- OG image creation
- Analytics setup
- Contact form integration
- SEO verification

## License

Private - Rosen Relations
