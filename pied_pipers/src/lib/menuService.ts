// lib/menuService.ts
import { Category, MenuItem } from '@/types/menu';

const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3001/api';

export async function getCategories(): Promise<{ docs: Category[] }> {
  try {
    const response = await fetch(`${PAYLOAD_API_URL}/categories?sort=order`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return { docs: [] };
  }
}

export async function getMenuItems(categoryId?: string): Promise<{ docs: MenuItem[] }> {
  try {
    const query = categoryId 
      ? `?where[category][equals]=${categoryId}`
      : '';

    const response = await fetch(`${PAYLOAD_API_URL}/menu-items${query}`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error('Failed to fetch menu items');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return { docs: [] };
  }
}