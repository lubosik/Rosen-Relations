# Mobile QA Checklist

Use this checklist when verifying responsive design across the Rosen Relations site.

## Target Breakpoints

| Breakpoint | Width × Height | Device Examples |
|------------|----------------|-----------------|
| Mobile S  | 360 × 640      | Small Android   |
| Mobile M  | 375 × 667      | iPhone SE, 8    |
| Mobile L  | 390 × 844      | iPhone 14 Pro   |
| Mobile XL | 412 × 915      | Large Android   |
| Mobile XXL| 428 × 926      | iPhone 14 Pro Max |
| Tablet    | 768 × 1024     | iPad            |

## Verification Checklist

### Global
- [ ] No horizontal scrolling at any breakpoint
- [ ] No clipped containers or overflow
- [ ] No unreadable text (size, contrast)
- [ ] No overlapping elements
- [ ] Sticky header works correctly
- [ ] Images/videos do not overflow containers
- [ ] CTAs are easily tappable (min 44×44px target)
- [ ] Comfortable section spacing
- [ ] Typography scales without breaking line lengths

### Header + Navigation
- [ ] Nav collapses into clean menu on mobile
- [ ] Book a Call, Login, Join Now accessible
- [ ] Menu does not overflow or trap scroll
- [ ] Tap targets adequate
- [ ] Safe-area padding for iOS notch
- [ ] Sticky behavior correct

### Homepage
- [ ] Hero: correct image crop, no text collision
- [ ] Hero: glass overlays scale correctly
- [ ] Hero: headings wrap elegantly
- [ ] Brand statement: panel width, padding, typography
- [ ] Brand statement: CTA row stacks correctly
- [ ] Roadmap: milestones stack, tap reveals content
- [ ] Roadmap: expanded panel fits viewport
- [ ] Logo marquee: legible, appropriate framing
- [ ] Logo marquee: reduced-motion static grid looks premium

### Content Pages
- [ ] About/Company: line length, font size, leading
- [ ] About/Company: images scale, no layout shift
- [ ] Founder: stacks correctly, no overflow
- [ ] Services: list stacks, video responsive
- [ ] Press: cards stack, testimonials readable
- [ ] Foundation: hero scales, placeholders stack
- [ ] Contact: form usable, inputs correct width
- [ ] Contact: Calendly embed fits, no overflow

### Cross-Browser
- [ ] iOS Safari: fixed backgrounds, 100vh / 100dvh
- [ ] iOS Safari: safe-area insets (header top, footer bottom)
- [ ] Chrome Android: font rendering
- [ ] Video autoplay rules respected

## Debug Toggle

To enable the mobile QA overlay (breakpoint label + overflow indicator):

```bash
NEXT_PUBLIC_MOBILE_QA_DEBUG=true npm run dev
```

The overlay is env-guarded and does not appear in production builds.
