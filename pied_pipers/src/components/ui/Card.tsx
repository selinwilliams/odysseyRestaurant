// components/ui/Card.tsx
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg bg-black/30 backdrop-blur-sm p-8 shadow-sm ${className}`}>
      {children}
    </div>
  );
}