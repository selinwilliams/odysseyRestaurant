// types/menu.ts
export interface Category {
  id: string;
  name: string;
  order?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  image: {
    url: string;
    alt: string;
    filename: string;
  };
  isVegetarian: boolean;
  isSpicy: boolean;
  isAvailable: boolean;
  ingredients: Array<{
    id: string;
    ingredient: string;
  }>;
}