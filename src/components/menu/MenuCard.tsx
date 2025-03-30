// components/menu/MenuCard.tsx
import Image from 'next/image';
import Card from '@/components/ui/Card';
import type { MenuItem } from '@/types/menu';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  // Get the full URL for the image
  const imageUrl = item.image?.url
  ? `http://localhost:3001${item.image.url}`
  : '/images/default-dish.jpg'; // Fallback image path

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-56 w-full">
        <Image
          src={imageUrl}
          alt={item.image?.alt || item.name}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          quality={75}
        />
        <div className="absolute top-0 left-0 right-0 flex justify-between p-3">
          {item.isVegetarian && (
            <span className="bg-green-800/80 backdrop-blur-sm text-greek-white px-3 py-1 text-xs font-serif tracking-wider rounded-full">
              Vegetarian
            </span>
          )}
          {item.isSpicy && (
            <span className="bg-red-800/80 backdrop-blur-sm text-greek-white px-3 py-1 text-xs font-serif tracking-wider rounded-full ml-auto">
              Spicy
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-serif text-xl text-greek-white">{item.name}</h3>
          <span className="font-serif text-lg text-greek-gold">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="font-sans text-greek-white/80 text-base mb-4 leading-relaxed flex-grow">
          {item.description}
        </p>
        
        {item.ingredients.length > 0 && (
          <div className="font-serif text-sm text-greek-white/60 mt-auto">
            <span className="font-medium text-greek-white/70">Ingredients: </span>
            {item.ingredients.map(ing => ing.ingredient).join(', ')}
          </div>
        )}
        
        {!item.isAvailable && (
          <div className="mt-3 bg-red-900/20 text-red-400 px-3 py-2 text-sm font-serif text-center rounded-md">
            Currently unavailable
          </div>
        )}
      </div>
    </Card>
  );
}