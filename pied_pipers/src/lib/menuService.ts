// lib/menuService.ts
import { Category, MenuItem } from '@/types/menu';

// Helper function to determine the correct base URL
const getBaseUrl = () => {
  // Check if running server-side (Node.js environment)
  if (typeof window === 'undefined') {
    // Use the internal Docker URL provided by the environment variable
    // Ensure you add INTERNAL_PAYLOAD_API_URL to your frontend service in docker-compose.yml
    // Example: INTERNAL_PAYLOAD_API_URL=http://odyssey-cms:3001/api
    return process.env.INTERNAL_PAYLOAD_API_URL || 'http://localhost:3001/api'; // Fallback for local dev without Docker
  }
  // Running client-side (browser), use the public URL
  return process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3001/api'; // Fallback for local dev
};

export async function getCategories(): Promise<{ docs: Category[] }> {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/categories?sort=order`;
  console.log(`[menuService] Fetching categories from: ${url}`); // Added logging

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      console.error(`[menuService] Error fetching categories: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) { // Added type annotation
    console.error('[menuService] Network error fetching categories:', error.message, error.cause);
    // Optionally re-throw or handle differently
    return { docs: [] }; // Return empty array on error
  }
}

export async function getMenuItems(categoryId?: string): Promise<{ docs: MenuItem[] }> {
  const baseUrl = getBaseUrl();
  const query = categoryId
    ? `?where[category][equals]=${categoryId}`
    : '';
  const url = `${baseUrl}/menu-items${query}`;
  console.log(`[menuService] Fetching menu items from: ${url}`); // Added logging

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      console.error(`[menuService] Error fetching menu items: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch menu items: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) { // Added type annotation
    console.error('[menuService] Network error fetching menu items:', error.message, error.cause);
    // Optionally re-throw or handle differently
    return { docs: [] }; // Return empty array on error
  }
}