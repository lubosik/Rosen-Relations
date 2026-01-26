# Production Deployment Notes

## Required Before Production

### 1. Environment Variables
Create a `.env.local` file with:
```
NEXT_PUBLIC_SITE_URL=https://rosenrelations.com
```

### 2. OpenGraph Image
- Create `/public/og-image.jpg` (1200x630px)
- Should represent the brand and be optimized
- Currently referenced in metadata but file doesn't exist yet

### 3. Favicon & Icons
- Update `/app/favicon.ico` with brand favicon
- Consider adding apple-touch-icon and other icon sizes

### 4. Analytics & Tracking
- Add analytics provider (Google Analytics, Plausible, etc.)
- Add to root layout if needed

### 5. Contact Form Integration
- Wire `/app/actions/contact.ts` to email service (Resend, SendGrid, etc.)
- Implement rate limiting using Redis/KV store
- Test form submission end-to-end

### 6. Authentication (Future)
- Integrate auth provider when ready
- Update `/app/join` and `/app/login` pages
- Add protected routes for client portal

### 7. SEO Verification
- Submit sitemap to Google Search Console
- Verify domain ownership
- Add verification codes to root layout metadata if needed

### 8. Performance
- Run Lighthouse audit
- Optimize any images that score poorly
- Check Core Web Vitals

### 9. Security
- Review security headers in `next.config.ts`
- Ensure HTTPS is enforced in production
- Review form validation and sanitization

### 10. Accessibility
- Run accessibility audit (axe, WAVE)
- Test keyboard navigation
- Verify screen reader compatibility
- Check color contrast ratios

## Current Production-Ready Features

✅ Comprehensive metadata and OpenGraph tags
✅ Sitemap.xml generation
✅ Robots.txt configuration
✅ Security headers
✅ Image optimization settings
✅ Structured data (JSON-LD)
✅ Skip to main content link
✅ Reduced motion support
✅ Form validation and honeypot
✅ Rate limiting structure ready
✅ Responsive design
✅ Semantic HTML
✅ Focus states for keyboard navigation
