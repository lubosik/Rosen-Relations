import { Metadata } from 'next';
import PressDetail from '@/components/PressDetail';

export const metadata: Metadata = {
  title: 'Success Story: Shirley L. | Rosen Relations',
  description: 'Success story featuring Shirley L.',
};

export default function PressDetailPage() {
  return (
    <PressDetail
      title="Success Story: Shirley L."
      category="success story"
      date="6/19/19"
      image="/home-image-2.webp"
      imageAlt="Success story featuring Shirley L."
    />
  );
}
