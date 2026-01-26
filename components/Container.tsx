import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  fullBleed?: boolean;
}

/**
 * Container component that provides centered max-width content
 * while allowing full-bleed sections when needed (e.g., hero sections)
 */
export default function Container({ 
  children, 
  className = '', 
  fullBleed = false 
}: ContainerProps) {
  if (fullBleed) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`} style={{ maxWidth: '100%' }}>
      {children}
    </div>
  );
}
