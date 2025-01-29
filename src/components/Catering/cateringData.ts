import { CateringItem, CategoryInfo } from './types';

export const categories: CategoryInfo[] = [
  {
    id: 'pastries',
    name: 'Turkish Pastries',
    description: 'Traditional pastries perfect for any gathering',
    icon: '🥨'
  },
  {
    id: 'mains',
    name: 'Main Dishes',
    description: 'Hearty and satisfying Turkish classics',
    icon: '🍲'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings to your perfect event',
    icon: '🍰'
  }
];

export const cateringItems: CateringItem[] = [
  {
    id: 'simit',
    name: 'Simit',
    description: 'Fresh-baked Turkish sesame bread rings, crisp on the outside and soft inside. Perfect for brunch or a traditional breakfast spread.',
    category: 'pastries',
    imageUrl: '/images/catering/simit.jpg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 3.50,
    allergens: ['sesame', 'wheat']
  },
  {
    id: 'patatesli-borek',
    name: 'Patatesli Börek',
    description: 'Flaky phyllo pastries filled with seasoned mashed potatoes. Light, savory, and crowd-pleasing.',
    category: 'pastries',
    imageUrl: '/images/catering/potato-borek.jpg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 4.50,
    allergens: ['wheat']
  },
  {
    id: 'ispanakli-borek',
    name: 'Ispanaklı Börek',
    description: 'Classic spinach börek with tender spinach, onions, and herbs wrapped in thin layers of buttery phyllo dough.',
    category: 'pastries',
    imageUrl: '/images/catering/spinach-borek.jpg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 4.50,
    allergens: ['wheat', 'dairy']
  },
  {
    id: 'kiymali-borek',
    name: 'Kıymalı Börek',
    description: 'Phyllo pastries generously filled with spiced ground beef, onions, and peppers. A hearty choice for any gathering.',
    category: 'pastries',
    imageUrl: '/images/catering/meat-borek.jpg',
    minOrder: 10,
    pricePerPerson: 5.00,
    allergens: ['wheat']
  },
  {
    id: 'yaprak-sarma',
    name: 'Yaprak Sarma',
    description: 'Grape leaves stuffed with fragrant rice, fresh herbs, and spices. A vegetarian favorite packed with authentic Turkish flavor.',
    category: 'mains',
    imageUrl: '/images/catering/grape-leaves.jpg',
    isVegetarian: true,
    isVegan: true,
    minOrder: 10,
    pricePerPerson: 4.00
  },
  {
    id: 'lahana-sarma',
    name: 'Lahana Sarma',
    description: 'Cabbage rolls filled with seasoned ground beef and rice. Slow-cooked in a light tomato sauce for melt-in-your-mouth goodness.',
    category: 'mains',
    imageUrl: '/images/catering/cabbage-rolls.jpg',
    minOrder: 10,
    pricePerPerson: 5.00
  },
  {
    id: 'menemen',
    name: 'Menemen',
    description: 'Traditional Turkish scrambled eggs with fresh tomatoes, peppers, and spices. Served with bread on the side.',
    category: 'mains',
    imageUrl: '/images/catering/menemen.jpg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 6.00,
    allergens: ['eggs', 'wheat']
  },
  {
    id: 'san-sebastian',
    name: 'San Sebastian Cheesecake',
    description: 'Rich, creamy, Basque-style cheesecake with a caramelized top—perfect for those with a sweet tooth.',
    category: 'desserts',
    imageUrl: '/images/catering/cheesecake.jpg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 6.50,
    allergens: ['dairy', 'eggs']
  },
  {
    id: 'eclairs',
    name: 'Eclairs',
    description: 'Delicate choux pastries filled with silky cream and topped with a thin chocolate glaze—elegant and irresistible.',
    category: 'desserts',
    imageUrl: '/images/catering/eclairs.jpg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 4.50,
    allergens: ['wheat', 'dairy', 'eggs']
  },
  {
    id: 'baklava',
    name: 'Baklava',
    description: 'Classic Turkish dessert featuring layers of crispy phyllo, chopped nuts, and sweet syrup. A timeless treat.',
    category: 'desserts',
    imageUrl: '/images/catering/baklava.jpg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 5.00,
    allergens: ['wheat', 'nuts']
  },
  {
    id: 'cold-baklava',
    name: 'Cold Baklava',
    description: 'A chilled twist on the traditional baklava: light, creamy, and refreshingly sweet.',
    category: 'desserts',
    imageUrl: '/images/catering/cold-baklava.jpg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 5.50,
    allergens: ['wheat', 'dairy', 'nuts']
  }
];
