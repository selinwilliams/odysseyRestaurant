// components/ui/Icon.tsx
import { ReactNode } from 'react';

interface IconProps {
  children: ReactNode;
}

export default function Icon({ children }: IconProps) {
  return (
    <div className="flex-shrink-0 text-greek-gold">
      {children}
    </div>
  );
}