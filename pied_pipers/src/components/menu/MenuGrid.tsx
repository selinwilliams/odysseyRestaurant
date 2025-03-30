// components/menu/MenuGrid.tsx
import { getMenuItems } from '@/lib/menuService';
import MenuCard from '@/components/menu/MenuCard';

interface MenuGridProps {
  categoryId?: string;
}

export default async function MenuGrid({ categoryId }: MenuGridProps) {
  const menuItemsData = await getMenuItems(categoryId);
  const menuItems = menuItemsData.docs;
  
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {menuItems.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}