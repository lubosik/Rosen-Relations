import { Metadata } from 'next';
import PressDetail from '@/components/PressDetail';

export const metadata: Metadata = {
  title: 'In the Press: Tina & Rose Featured | Rosen Relations',
  description: 'Press coverage featuring Tina & Rose.',
};

export default function PressDetailPage() {
  return (
    <PressDetail
      title="In the Press: Tina & Rose Featured"
      category="press"
      date="2/19/20"
      image="/hero-section.jpg"
      imageAlt="Tina & Rose featured in press"
    />
  );
}
