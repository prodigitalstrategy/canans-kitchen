export interface MenuItem {
  name: string;
  price: number;
  description: string;
  category: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  hasAllergens?: boolean;
  adjustments?: string[];
}

export interface MenuItemDetailType {
  images: string[];
  recipe?: string;
  funFacts: string[];
  ingredients: string[];
  preparationTime?: string;
  servingSize?: string;
  difficulty?: string;
  relatedItems: string[];
  nutrition?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
    fiber?: number;
    sugar?: number;
  };
}

export const menuItems: MenuItem[] = [
  {
    name: "Mixed Breakfast (2 Person)",
    price: 42,
    description:
      "A generous platter featuring soujuk omelette or menemen, cheese pastry, cheese platter, french fries, housemade simit, bread, salad, housemade strawberry jam, honey, olives, walnuts, almonds, crackers, seasonal fruits, and 2 large teas.",
    category: "Breakfast Platters",
    isVegetarian: true,
  },
  {
    name: "Breakfast Plate",
    price: 19,
    description:
      "Omelette, housemade simit, cheese, salad, housemade strawberry jam, honey, olives, and 1 large tea.",
    category: "Breakfast Platters",
    isVegetarian: true,
  },
  {
    name: "Chef's Soujuk-Kashar Panini",
    price: 17,
    description:
      "Grilled ciabatta bread with soujuk, mozzarella, and pepper paste. Contains walnuts and hazelnuts. Served with mixed greens and fries.",
    category: "Sandwiches",
    hasAllergens: true,
  },
  {
    name: "Meat & Eggs (Kavurma)",
    price: 19,
    description:
      "Poached eggs cracked into a pan of sauteed meat. Comes with bread.",
    category: "Eggs & Omelettes",
  },
  {
    name: "Soujuk Omelette",
    price: 16,
    description:
      "Poached eggs cracked into a pan of sliced soujuk. Comes with bread.",
    category: "Eggs & Omelettes",
  },
  {
    name: "Spinach Omelette",
    price: 12,
    description:
      "A fluffy omelet with fresh spinach, served with toasted sourdough bread.",
    category: "Eggs & Omelettes",
    isVegetarian: true,
    adjustments: ["+$2 salad", "+$5 fries"],
  },
  {
    name: "Mushroom Omelette",
    price: 12,
    description:
      "A hearty omelet with sautéed mushrooms served with toasted sourdough bread.",
    category: "Eggs & Omelettes",
    isVegetarian: true,
    adjustments: ["+$2 salad", "+$5 fries"],
  },
  {
    name: "Cheese Omelette",
    price: 12,
    description:
      "Made with creamy feta cheese and mozzarella, served with toasted sourdough bread.",
    category: "Eggs & Omelettes",
    isVegetarian: true,
    adjustments: ["+$2 salad", "+$5 fries"],
  },
  {
    name: "Avocado Toast",
    price: 13,
    description:
      "Sourdough toast topped with creamy avocado spread, cream cheese, and arugula on top.",
    category: "Breakfast Specials",
    isVegetarian: true,
    isVegan: true,
  },
  {
    name: "Egg & Cheese Croissant",
    price: 9,
    description: "Fresh croissant with eggs and cheese.",
    category: "Breakfast Specials",
    isVegetarian: true,
  },
  {
    name: "Menemen (Shakshuka)",
    price: 14,
    description:
      "Scrambled eggs cooked with fresh tomatoes and peppers in olive oil. Served with French bread.",
    category: "Eggs & Omelettes",
    isVegetarian: true,
  },
  {
    name: "Pancakes",
    price: 13,
    description:
      "A stack of fluffy pancakes served with fresh fruits and syrup.",
    category: "Breakfast Specials",
    isVegetarian: true,
    adjustments: ["Matcha pancakes available for +$2"],
  },
  {
    name: "Mixed Crepe",
    price: 14,
    description: "Stuffed with baby spinach and mozzarella.",
    category: "Crepes",
    isVegetarian: true,
    adjustments: ["+$2 avocado", "+$2 scrambled eggs"],
  },
  {
    name: "Banana Nutella Almond Crepe",
    price: 14,
    description: "Sweet crepe filled with banana, Nutella, and almonds.",
    category: "Crepes",
    isVegetarian: true,
  },
  {
    name: "Nutella Strawberry Banana Crepe",
    price: 14,
    description:
      "Sweet crepe filled with Nutella, fresh strawberries, and banana.",
    category: "Crepes",
    isVegetarian: true,
  },
];

export const menuItemDetails: Record<string, MenuItemDetailType> = {
  "mixed-breakfast-2-person": {
    images: ["/images/menu/mixed-breakfast.jpg"],
    funFacts: [
      "Turkish breakfast is called 'kahvaltı' which literally means 'before coffee'.",
      "Traditional Turkish breakfast is a communal affair, with multiple small dishes shared among family and friends.",
      "A proper Turkish breakfast can last for hours and is especially popular on weekends."
    ],
    ingredients: [
      "Soujuk (Turkish sausage)",
      "Eggs",
      "Cheese pastry",
      "Assorted cheeses",
      "French fries",
      "Housemade simit (Turkish bagel)",
      "Fresh bread",
      "Mixed salad",
      "Housemade strawberry jam",
      "Honey",
      "Olives",
      "Walnuts",
      "Almonds",
      "Crackers",
      "Seasonal fruits",
      "Turkish tea"
    ],
    preparationTime: "30 mins",
    servingSize: "2 people",
    difficulty: "Complex",
    relatedItems: ["breakfast-plate", "menemen-shakshuka"]
  },
  
  "menemen-shakshuka": {
    images: ["/images/menu/menemen.jpg"],
    recipe: "Try this simplified version at home:\n\n1. Dice onions, tomatoes, and peppers\n2. Sauté onions and peppers in olive oil until soft\n3. Add tomatoes and cook until they break down\n4. Season with salt, pepper, and paprika\n5. Create wells in the mixture and crack eggs into them\n6. Cover and cook until eggs are set but yolks are still runny\n7. Serve with French bread",
    funFacts: [
      "Menemen is named after a district in İzmir, Turkey.",
      "While similar to shakshuka, menemen typically has the eggs scrambled into the mixture rather than poached on top.",
      "It's a popular breakfast dish throughout Turkey and is often served in a traditional copper pan."
    ],
    ingredients: [
      "Fresh eggs",
      "Tomatoes",
      "Green peppers",
      "Onions",
      "Olive oil",
      "Spices",
      "French bread"
    ],
    preparationTime: "20 mins",
    servingSize: "1-2 people",
    difficulty: "Medium",
    relatedItems: ["soujuk-omelette", "mixed-breakfast-2-person"]
  },
  
  "pancakes": {
    images: ["/images/menu/pancakes.jpg"],
    recipe: "Classic pancakes at home:\n\n1. Mix flour, sugar, baking powder, and salt\n2. In another bowl, whisk together milk, eggs, and melted butter\n3. Combine wet and dry ingredients until just mixed (lumps are okay)\n4. Heat a griddle and pour batter to form pancakes\n5. Cook until bubbles form, then flip and cook other side\n6. Serve with fresh fruits and syrup",
    funFacts: [
      "The world's largest pancake was made in the UK in 1994, measuring 15 meters in diameter.",
      "National Pancake Day is celebrated on February 21st.",
      "Ancient Greeks and Romans ate pancakes sweetened with honey."
    ],
    ingredients: [
      "Flour",
      "Eggs",
      "Milk",
      "Sugar",
      "Baking powder",
      "Butter",
      "Fresh fruits",
      "Syrup"
    ],
    preparationTime: "15 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["mixed-crepe", "banana-nutella-almond-crepe"]
  },
  
  "mixed-crepe": {
    images: ["/images/menu/mixed-crepe.jpg"],
    funFacts: [
      "Crepes originated in Brittany, a region in the northwest of France.",
      "The word 'crepe' comes from the Latin word 'crispus' meaning curled.",
      "February 2nd is known as 'Crepe Day' in France."
    ],
    ingredients: [
      "Crepe batter",
      "Baby spinach",
      "Mozzarella cheese",
      "Butter"
    ],
    preparationTime: "15 mins",
    servingSize: "1 person",
    difficulty: "Medium",
    relatedItems: ["banana-nutella-almond-crepe", "nutella-strawberry-banana-crepe"]
  },
  
  "banana-nutella-almond-crepe": {
    images: ["/images/menu/banana-nutella-crepe.jpg"],
    funFacts: [
      "Nutella was created in the 1940s by Pietro Ferrero, an Italian pastry maker.",
      "The combination of chocolate and hazelnuts was a result of cocoa shortages after World War II.",
      "February 5th is World Nutella Day."
    ],
    ingredients: [
      "Crepe batter",
      "Nutella",
      "Fresh bananas",
      "Almonds",
      "Powdered sugar"
    ],
    preparationTime: "15 mins",
    servingSize: "1 person",
    difficulty: "Medium",
    relatedItems: ["nutella-strawberry-banana-crepe", "mixed-crepe"],
    nutrition: {
      calories: 580,
      protein: 8,
      carbs: 72,
      fat: 32,
      fiber: 5,
      sugar: 48
    }
  },
  
  "nutella-strawberry-banana-crepe": {
    images: ["/images/menu/nutella-strawberry-crepe.jpg"],
    funFacts: [
      "Strawberries are the only fruit with seeds on the outside.",
      "On average, there are 200 seeds on a strawberry.",
      "Bananas are berries, but strawberries aren't actually berries botanically speaking."
    ],
    ingredients: [
      "Crepe batter",
      "Nutella",
      "Fresh strawberries",
      "Fresh bananas",
      "Powdered sugar"
    ],
    preparationTime: "15 mins",
    servingSize: "1 person",
    difficulty: "Medium",
    relatedItems: ["banana-nutella-almond-crepe", "mixed-crepe"]
  }
};
