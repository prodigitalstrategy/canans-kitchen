import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="pt-20 md:pt-24">
      {children}
    </div>
  );
}
