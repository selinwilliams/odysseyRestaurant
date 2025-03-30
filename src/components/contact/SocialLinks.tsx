// components/ui/Icon.tsx
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

type IconName = 'instagram' | 'facebook' | 'twitter';

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  switch (name) {
    case 'instagram':
      return <FaInstagram className={className} aria-hidden="true" />;
    case 'facebook':
      return <FaFacebook className={className} aria-hidden="true" />;
    case 'twitter':
      return <FaTwitter className={className} aria-hidden="true" />;
    default:
      return null;
  }
}