// app/(main)/menu/page.tsx
import { Metadata } from 'next';
import MenuHeader from '@/components/menu/MenuHeader';
import MenuCategories from '@/components/menu/MenuCategories';
import MenuGrid from '@/components/menu/MenuGrid';
import { getCategories } from '@/lib/menuService';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Menu - Odyssey By Sely',
  description: 'Explore our carefully curated menu featuring Mediterranean cuisine with French influences.',
};

// Define the correct type for Next.js App Router page props
type Props = {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function MenuPage({
  searchParams,
}: Props) {
  // Fetch categories for server-side rendering
  const categoriesData = await getCategories();
  const categories = categoriesData.docs;
  
  // Get selected category from URL params
  const selectedCategory = searchParams.category as string | undefined;
  
  return (
    <div className="container mx-auto px-4 py-16">
      <MenuHeader />
      
      <MenuCategories 
        categories={categories} 
        selectedCategory={selectedCategory}
      />
      
      <Suspense fallback={<div className="text-center mt-12 text-greek-white/70">Loading menu items...</div>}>
        <MenuGrid categoryId={selectedCategory} />
      </Suspense>
    </div>
  );
}