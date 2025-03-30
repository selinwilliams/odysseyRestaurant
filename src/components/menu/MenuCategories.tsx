// components/menu/MenuCategories.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import type { Category } from '@/types/menu';

interface MenuCategoriesProps {
  categories: Category[];
  selectedCategory?: string;
}

export default function MenuCategories({ categories, selectedCategory }: MenuCategoriesProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleCategoryChange = (categoryId?: string) => {
    if (categoryId) {
      router.push(`${pathname}?category=${categoryId}`);
    } else {
      router.push(pathname);
    }
  };
  
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
      {/* <button
        onClick={() => handleCategoryChange(undefined)}
        className={`px-6 py-2 font-serif text-sm tracking-wider transition-colors ${
          !selectedCategory
            ? 'text-greek-white border-b-2 border-greek-gold'
            : 'text-greek-white/70 hover:text-greek-white'
        }`}
      >
        All Categories
      </button>
       */}
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryChange(category.id)}
          className={`px-6 py-2 font-serif text-sm tracking-wider transition-colors ${
            selectedCategory === category.id
              ? 'text-greek-white border-b-2 border-greek-gold'
              : 'text-greek-white/70 hover:text-greek-white'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}