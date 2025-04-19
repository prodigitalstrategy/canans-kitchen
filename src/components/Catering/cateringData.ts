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
    imageUrl: '/gallery/simit.jpg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 3.50,
    allergens: ['sesame', 'wheat'],
    popular: true,
    preparationTime: '1-2 hours',
    servingSize: '1 per person'
  },
  {
    id: 'patatesli-borek',
    name: 'Potato Pastry',
    description: 'Flaky phyllo pastries filled with seasoned mashed potatoes. Light, savory, and crowd-pleasing.',
    category: 'pastries',
    imageUrl: '/gallery/Potato_Pastry.jpeg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 4.50,
    allergens: ['wheat'],
    preparationTime: '2-3 hours',
    servingSize: '2-3 pieces per person'
  },
  {
    id: 'ispanakli-borek',
    name: 'Spinach Pastry',
    description: 'Classic spinach börek with tender spinach, onions, and herbs wrapped in thin layers of buttery phyllo dough.',
    category: 'pastries',
    imageUrl: '/gallery/Spinach_Pastry.jpeg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 4.50,
    allergens: ['wheat', 'dairy'],
    preparationTime: '2-3 hours',
    servingSize: '2-3 pieces per person'
  },
  {
    id: 'kiymali-borek',
    name: 'Ground Beef Pastry',
    description: 'Phyllo pastries generously filled with spiced ground beef, onions, and peppers. A hearty choice for any gathering.',
    category: 'pastries',
    imageUrl: '/gallery/Ground_Beef_Pastry.jpeg',
    minOrder: 10,
    pricePerPerson: 5.00,
    allergens: ['wheat'],
    popular: true,
    preparationTime: '2-3 hours',
    servingSize: '2-3 pieces per person'
  },
  {
    id: 'yaprak-sarma',
    name: 'Stuffed Grape Leaves',
    description: 'Grape leaves stuffed with fragrant rice, fresh herbs, and spices. A vegetarian favorite packed with authentic Turkish flavor.',
    category: 'mains',
    imageUrl: '/images/catering/grape-leaves.jpg',
    isVegetarian: true,
    isVegan: true,
    minOrder: 10,
    pricePerPerson: 4.00,
    popular: true,
    preparationTime: '3-4 hours',
    servingSize: '5-6 pieces per person'
  },
  {
    id: 'lahana-sarma',
    name: 'Cabbage Rolls',
    description: 'Cabbage rolls filled with seasoned ground beef and rice. Slow-cooked in a light tomato sauce for melt-in-your-mouth goodness.',
    category: 'mains',
    imageUrl: '/images/catering/cabbage-rolls.jpg',
    minOrder: 10,
    pricePerPerson: 5.00,
    preparationTime: '3-4 hours',
    servingSize: '4-5 pieces per person'
  },
  {
    id: 'menemen',
    name: 'Menemen',
    description: 'Traditional Turkish scrambled eggs with fresh tomatoes, peppers, and spices. Served with bread on the side.',
    category: 'mains',
    imageUrl: '/gallery/menemen.jpg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 6.00,
    allergens: ['eggs', 'wheat'],
    popular: true,
    preparationTime: '30-45 minutes',
    servingSize: '1 serving per person'
  },
  {
    id: 'san-sebastian',
    name: 'San Sebastian Cheesecake',
    description: 'Rich, creamy, Basque-style cheesecake with a caramelized top—perfect for those with a sweet tooth.',
    category: 'desserts',
    imageUrl: '/gallery/san_sebastian_cheesecake.jpeg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 6.50,
    allergens: ['dairy', 'eggs'],
    popular: true,
    preparationTime: '4-5 hours',
    servingSize: '1 slice per person'
  },
  {
    id: 'eclairs',
    name: 'Eclairs',
    description: 'Delicate choux pastries filled with silky cream and topped with a thin chocolate glaze—elegant and irresistible.',
    category: 'desserts',
    imageUrl: '/images/menu/eclair.jpeg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 4.50,
    allergens: ['wheat', 'dairy', 'eggs'],
    preparationTime: '3-4 hours',
    servingSize: '2 pieces per person'
  },
  {
    id: 'baklava',
    name: 'Baklava',
    description: 'Classic Turkish dessert featuring layers of crispy phyllo, chopped nuts, and sweet syrup. A timeless treat.',
    category: 'desserts',
    imageUrl: '/gallery/baklava.jpg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 5.00,
    allergens: ['wheat', 'nuts'],
    popular: true,
    preparationTime: '2-3 hours',
    servingSize: '2-3 pieces per person'
  },
  {
    id: 'cold-baklava',
    name: 'Cold Baklava',
    description: 'A chilled twist on the traditional baklava: light, creamy, and refreshingly sweet.',
    category: 'desserts',
    imageUrl: '/images/menu/cold_baklava.jpeg',
    isVegetarian: true,
    minOrder: 10,
    pricePerPerson: 5.50,
    allergens: ['wheat', 'dairy', 'nuts'],
    preparationTime: '3-4 hours plus chilling',
    servingSize: '2-3 pieces per person'
  }
];
