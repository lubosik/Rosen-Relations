import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Now | Rosen Relations',
  description: 'Join Rosen Relations and get access to our programs, classes, and coaching.',
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
