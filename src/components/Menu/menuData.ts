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
  "breakfast-plate": {
    images: ["/images/menu/breakfast-plate.jpg"],
    funFacts: [
      "The Turkish word for breakfast, 'kahvaltı', literally means 'before coffee'.",
      "In Türkiye, breakfast is considered the most important meal of the day.",
      "Turkish tea is traditionally served in small tulip-shaped glasses."
    ],
    ingredients: [
      "Eggs",
      "Housemade simit (Turkish bagel)",
      "Assorted cheeses",
      "Fresh salad",
      "Housemade strawberry jam",
      "Honey",
      "Olives",
      "Turkish tea"
    ],
    preparationTime: "15 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["mixed-breakfast-2-person", "menemen-shakshuka"],
    nutrition: {
      calories: 450,
      protein: 15,
      carbs: 40,
      fat: 25
    }
  },
  
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
      "Menemen is named after a district in İzmir, Türkiye.",
      "While similar to shakshuka, menemen typically has the eggs scrambled into the mixture rather than poached on top.",
      "It's a popular breakfast dish throughout Türkiye and is often served in a traditional copper pan."
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
  },

  "meat-eggs-kavurma": {
    images: ["/images/menu/kavurma.jpg"],
    funFacts: [
      "Kavurma is a traditional Turkish dish of sautéed or braised meat, usually lamb or beef.",
      "The dish dates back to nomadic Turkish tribes who preserved meat in its own fat.",
      "In Türkiye, it's often prepared as a special dish during religious festivals."
    ],
    ingredients: [
      "Sautéed meat (lamb or beef)",
      "Fresh eggs",
      "Butter",
      "Spices",
      "Fresh bread"
    ],
    preparationTime: "20 mins",
    servingSize: "1 person",
    difficulty: "Medium",
    relatedItems: ["soujuk-omelette", "mixed-breakfast-2-person"],
    nutrition: {
      calories: 520,
      protein: 30,
      carbs: 15,
      fat: 35
    }
  },

  "soujuk-omelette": {
    images: ["/images/menu/soujuk-omelette.jpg"],
    funFacts: [
      "Soujuk is a dry, spicy sausage common in Turkish, Balkan, and Middle Eastern cuisine.",
      "Traditional soujuk is made from ground beef with various spices including cumin, sumac, garlic, salt, and red pepper.",
      "It's typically cured for several weeks before being consumed."
    ],
    ingredients: [
      "Soujuk (Turkish sausage)",
      "Fresh eggs",
      "Butter",
      "Fresh bread"
    ],
    preparationTime: "15 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["meat-eggs-kavurma", "menemen-shakshuka"],
    nutrition: {
      calories: 480,
      protein: 25,
      carbs: 12,
      fat: 30
    }
  },

  "spinach-omelette": {
    images: ["/images/menu/spinach-omelette.jpg"],
    recipe: "Try this at home:\n\n1. Wash and chop fresh spinach\n2. Beat eggs with a pinch of salt and pepper\n3. Heat butter in a pan over medium heat\n4. Add spinach and sauté until wilted\n5. Pour in beaten eggs\n6. Cook until set on bottom, then fold and finish cooking\n7. Serve with toasted sourdough bread",
    funFacts: [
      "Spinach contains more nutrients when cooked than when raw.",
      "Spinach is extremely high in iron and calcium.",
      "Popeye the Sailor Man helped increase spinach consumption by 33% in the United States during the 1930s."
    ],
    ingredients: [
      "Fresh eggs",
      "Baby spinach",
      "Butter",
      "Salt and pepper",
      "Toasted sourdough bread"
    ],
    preparationTime: "10 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["mushroom-omelette", "cheese-omelette"],
    nutrition: {
      calories: 320,
      protein: 18,
      carbs: 15,
      fat: 22,
      fiber: 3
    }
  },

  "mushroom-omelette": {
    images: ["/images/menu/mushroom-omelette.jpg"],
    recipe: "Simple mushroom omelette recipe:\n\n1. Clean and slice mushrooms\n2. Sauté mushrooms in butter until golden\n3. Beat eggs with salt and pepper\n4. Pour eggs over mushrooms in pan\n5. Cook until bottom is set, then fold\n6. Serve with toasted sourdough bread",
    funFacts: [
      "Mushrooms are neither plants nor animals but belong to the fungi kingdom.",
      "Mushrooms have been used medicinally for thousands of years in various cultures.",
      "They're one of the few natural sources of vitamin D."
    ],
    ingredients: [
      "Fresh eggs",
      "Mushrooms",
      "Butter",
      "Salt and pepper",
      "Toasted sourdough bread"
    ],
    preparationTime: "15 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["spinach-omelette", "cheese-omelette"],
    nutrition: {
      calories: 340,
      protein: 19,
      carbs: 16,
      fat: 23,
      fiber: 2
    }
  },

  "cheese-omelette": {
    images: ["/images/menu/cheese-omelette.jpg"],
    recipe: "Classic cheese omelette recipe:\n\n1. Beat eggs with salt and pepper\n2. Heat butter in a non-stick pan\n3. Pour in eggs and cook until almost set\n4. Sprinkle with feta and mozzarella cheese\n5. Fold omelette and allow cheese to melt\n6. Serve with toasted sourdough bread",
    funFacts: [
      "Feta cheese is Greece's national cheese and has been protected by EU legislation since 2002.",
      "The word 'omelette' comes from the French word 'amelette'.",
      "The first omelettes date back to 16th century France."
    ],
    ingredients: [
      "Fresh eggs",
      "Feta cheese",
      "Mozzarella cheese",
      "Butter",
      "Salt and pepper",
      "Toasted sourdough bread"
    ],
    preparationTime: "10 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["spinach-omelette", "mushroom-omelette"],
    nutrition: {
      calories: 380,
      protein: 22,
      carbs: 15,
      fat: 27
    }
  },

  "avocado-toast": {
    images: ["/images/menu/avocado-toast.jpg"],
    recipe: "Make it at home:\n\n1. Toast sourdough bread until crisp\n2. Mash ripe avocado with lemon juice, salt, and pepper\n3. Spread cream cheese on toast\n4. Top with avocado spread\n5. Garnish with arugula and a drizzle of olive oil",
    funFacts: [
      "Avocados are technically a fruit, specifically a single-seed berry.",
      "There are over 500 varieties of avocados in the world.",
      "Avocado trees can live for over 400 years and produce up to 500 avocados annually."
    ],
    ingredients: [
      "Sourdough bread",
      "Ripe avocado",
      "Cream cheese",
      "Arugula",
      "Lemon juice",
      "Olive oil",
      "Salt and pepper"
    ],
    preparationTime: "8 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["egg-cheese-croissant", "pancakes"],
    nutrition: {
      calories: 310,
      protein: 7,
      carbs: 25,
      fat: 22,
      fiber: 7
    }
  },

  "egg-cheese-croissant": {
    images: ["/images/menu/egg-cheese-croissant.jpg"],
    funFacts: [
      "Croissants originated in Austria, not France, and were called 'kipferl'.",
      "Traditional croissants contain over 80 layers of butter and dough.",
      "It takes about 72 hours to make croissants from scratch if done properly."
    ],
    ingredients: [
      "Fresh croissant",
      "Eggs",
      "Cheese",
      "Butter"
    ],
    preparationTime: "8 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["avocado-toast", "breakfast-plate"],
    nutrition: {
      calories: 420,
      protein: 14,
      carbs: 30,
      fat: 28
    }
  },

  "chefs-soujuk-kashar-panini": {
    images: ["/images/menu/soujuk-panini.jpg"],
    funFacts: [
      "Panini is actually the plural form of 'panino' in Italian, which simply means 'small bread roll'.",
      "Kashkaval (Kashar) cheese is a type of yellow cheese made from sheep's milk that's popular in Türkiye and the Balkans.",
      "The modern panini press was invented in Italy in the 1970s."
    ],
    ingredients: [
      "Ciabatta bread",
      "Soujuk (Turkish sausage)",
      "Kashar cheese",
      "Pepper paste",
      "Walnuts",
      "Hazelnuts",
      "Mixed greens",
      "French fries"
    ],
    preparationTime: "12 mins",
    servingSize: "1 person",
    difficulty: "Medium",
    relatedItems: ["soujuk-omelette", "meat-eggs-kavurma"],
    nutrition: {
      calories: 650,
      protein: 28,
      carbs: 45,
      fat: 42
    }
  }
};
