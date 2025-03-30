// components/ui/SectionHeading.tsx
import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  centered?: boolean;
}

export default function SectionHeading({ children, centered = false }: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl font-serif font-bold text-greek-white ${centered ? 'text-center' : ''}`}>
      <span className="inline-block border-b-2 border-greek-gold pb-2">{children}</span>
    </h2>
  );
}