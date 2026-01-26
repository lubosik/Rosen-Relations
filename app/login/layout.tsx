import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Rosen Relations',
  description: 'Sign in to your Rosen Relations account.',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
