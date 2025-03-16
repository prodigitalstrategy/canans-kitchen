export interface CateringItem {
  id: string;
  name: string;
  description: string;
  category: 'pastries' | 'mains' | 'desserts';
  imageUrl: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  allergens?: string[];
  minOrder: number;
  pricePerPerson: number;
  popular?: boolean;
  preparationTime?: string;
  servingSize?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
}
