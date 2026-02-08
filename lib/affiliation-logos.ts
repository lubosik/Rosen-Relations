/**
 * Affiliation Logo Registry
 * Logos displayed in marquee — no chip containers, uniform size.
 */

export interface AffiliationLogo {
  name: string;
  src: string;
  alt: string;
}

export const affiliationLogos: AffiliationLogo[] = [
  { name: 'Vogue Runway', src: '/assets/affiliations/vogue-runway-logo.png', alt: 'Vogue Runway' },
  { name: 'Tubi', src: '/assets/affiliations/tubi-logo.webp', alt: 'Tubi' },
  { name: 'LA Fashion Week', src: '/assets/affiliations/la-fashion-week-logo.png', alt: 'LA Fashion Week' },
  { name: 'DC News Now', src: '/assets/affiliations/dc-news-now.webp', alt: 'DC News Now' },
  { name: 'ROMEO HUNTE', src: '/assets/affiliations/romeo-hunte.jpeg', alt: 'ROMEO HUNTE' },
  { name: 'Sergio Hudson', src: '/assets/affiliations/sergio-hudson-logo.webp', alt: 'Sergio Hudson' },
  { name: 'Channel 4 LA', src: '/assets/affiliations/channel-4-la-logo.jpeg', alt: 'Channel 4 LA' },
  { name: 'BETherLive', src: '/assets/affiliations/betherlive-logo.png', alt: 'BETherLive' },
  { name: 'Wisdom and Wealth Conference', src: '/assets/affiliations/wisdom-wealth-conference-logo.png', alt: 'Wisdom and Wealth Conference' },
  { name: 'Peacock', src: '/assets/affiliations/peacock-logo.png', alt: 'Peacock' },
  { name: 'FOX 5 WTTG DC', src: '/assets/affiliations/fox5-wttg-dc-logo.jpeg', alt: 'FOX 5 WTTG DC' },
  { name: 'OCTET Productions', src: '/assets/affiliations/octet-productions-logo.webp', alt: 'OCTET Productions' },
  { name: 'GME', src: '/assets/affiliations/gme-logo.jpeg', alt: 'GME' },
  { name: 'Wusa News', src: '/assets/affiliations/wusa-news-logo.jpg', alt: 'Wusa News' },
];
