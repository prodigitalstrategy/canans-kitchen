export interface MenuItem {
  name: string;
  price: number;
  description: string;
  category: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  hasAllergens?: boolean;
  lunchOnly?: boolean;
  /** A traditional Turkish dish, served here under its own name. */
  isTurkishClassic?: boolean;
  isChefPick?: boolean;
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
  // ─── Breakfast Plates ───────────────────────────────────────────────
  {
    name: "Mixed Breakfast (2 Person)",
    price: 46.95,
    description:
      "A platter featuring soujuk omelette or menemen, cheese rolls, cheese platter, housemade simit, bread, salad, housemade strawberry jam, honey, olives, ajuka (contains walnuts), crackers, seasonal fruits, and 2 large teas.",
    category: "Breakfast Plates",
    hasAllergens: true,
    isTurkishClassic: true,
  },
  {
    name: "Breakfast Plate",
    price: 19.95,
    description:
      "Omelette, housemade simit, cheese, salad, housemade strawberry jam, honey, olives, and 1 large tea.",
    category: "Breakfast Plates",
    isVegetarian: true,
    isTurkishClassic: true,
  },
  {
    name: "Breakfast Favorites",
    price: 21.95,
    description:
      "Two soft scrambled eggs, crispy beef bacon, breakfast sausage, mashed avocado, hashbrowns, served with bread and butter.",
    category: "Breakfast Plates",
  },

  // ─── Omelettes (served with bread) ──────────────────────────────────
  {
    name: "Soujuk & Eggs",
    price: 17.95,
    description: "Pan-cooked sliced Turkish soujuk topped with eggs.",
    category: "Omelettes",
    isTurkishClassic: true,
  },
  {
    name: "Meat & Eggs (Kavurma)",
    price: 20.95,
    description: "Tender sautéed kavurma topped with eggs.",
    category: "Omelettes",
    isTurkishClassic: true,
  },
  {
    name: "Mushroom Omelette",
    price: 12.95,
    description: "A hearty omelette with sautéed mushrooms.",
    category: "Omelettes",
    isVegetarian: true,
    adjustments: ["+$3 salad", "+$3 fries"],
  },
  {
    name: "Cheese Omelette",
    price: 12.95,
    description: "Made with creamy feta cheese and mozzarella.",
    category: "Omelettes",
    isVegetarian: true,
    adjustments: ["+$3 salad", "+$3 fries"],
  },
  {
    name: "Spinach Omelette",
    price: 12.95,
    description: "A fluffy omelette with fresh spinach.",
    category: "Omelettes",
    isVegetarian: true,
    adjustments: ["+$3 salad", "+$3 fries"],
  },
  {
    name: "Mediterranean Omelet",
    price: 14.95,
    description: "Spinach, mushroom, feta cheese and tomatoes.",
    category: "Omelettes",
    isVegetarian: true,
  },

  // ─── Menemen (Shakshuka) ────────────────────────────────────────────
  {
    name: "Menemen (Shakshuka)",
    price: 15.95,
    description:
      "Scrambled eggs cooked with fresh tomatoes and peppers in olive oil. Served with bread.",
    category: "Menemen (Shakshuka)",
    isVegetarian: true,
    isTurkishClassic: true,
    adjustments: ["Soujuk: +$5"],
  },

  // ─── Crepes & Pancakes ──────────────────────────────────────────────
  {
    name: "Mixed Crepe",
    price: 14.95,
    description:
      "Stuffed with baby spinach and mozzarella, finished with our house sauce.",
    category: "Crepes & Pancakes",
    isVegetarian: true,
    adjustments: ["+$2 avocado", "+$2 scrambled eggs"],
  },
  {
    name: "Nutella Strawberry Banana Crepe",
    price: 14.95,
    description:
      "Sweet crepe filled with Nutella, fresh strawberries, and banana.",
    category: "Crepes & Pancakes",
    isVegetarian: true,
  },
  {
    name: "Pancakes",
    price: 14.95,
    description:
      "A stack of fluffy pancakes served with fresh fruits and syrup.",
    category: "Crepes & Pancakes",
    isVegetarian: true,
  },

  // ─── Toasts & Panini ────────────────────────────────────────────────
  {
    name: "Chef's Soujuk-Kashar Panini",
    price: 18.95,
    description:
      "Grilled ciabatta bread with soujuk, mozzarella, and pepper paste. Served with mixed greens and fries.",
    category: "Toasts & Panini",
    isChefPick: true,
  },
  {
    name: "Avocado Toast",
    price: 15.95,
    description:
      "Sourdough toast topped with creamy avocado spread and arugula on top.",
    category: "Toasts & Panini",
    isVegetarian: true,
    isVegan: true,
    adjustments: ["Add eggs: +$2"],
  },

  // ─── Croissants ─────────────────────────────────────────────────────
  {
    name: "Egg & Cheese Croissant",
    price: 9.95,
    description: "Fluffy scrambled eggs, feta, and mozzarella cheese.",
    category: "Croissants",
    isVegetarian: true,
  },
  {
    name: "Egg Cheese & Soujuk Croissant",
    price: 12.95,
    description: "Scrambled eggs, feta, mozzarella, and Turkish soujuk.",
    category: "Croissants",
  },
  {
    name: "Egg Cheese & Bacon (Beef) Croissant",
    price: 12.95,
    description: "Scrambled eggs, feta, mozzarella, and crispy beef bacon.",
    category: "Croissants",
  },
  {
    name: "Egg Cheese & Sausage Croissant",
    price: 12.95,
    description: "Scrambled eggs, feta, mozzarella, and savory beef sausage.",
    category: "Croissants",
  },
  {
    name: "Smoked Salmon Croissant",
    price: 13.95,
    description: "Smoked salmon, avocado, arugula, and cream cheese.",
    category: "Croissants",
  },

  // ─── Sandwiches & Wraps ─────────────────────────────────────────────
  {
    name: "Simit Sandwich",
    price: 9.95,
    description:
      "Housemade simit with tomatoes, mozzarella, and Turkish white cheese.",
    category: "Sandwiches & Wraps",
    isVegetarian: true,
    isTurkishClassic: true,
  },
  {
    name: "Kavurma (Beef) Wrap",
    price: 15.95,
    description:
      "Warm wrap filled with kavurma, fresh greens, red cabbage, tomatoes, and house sauce.",
    category: "Sandwiches & Wraps",
    lunchOnly: true,
  },
  {
    name: "Chicken Wrap",
    price: 13.95,
    description:
      "Warm wrap filled with grilled chicken, fresh greens, red cabbage, tomatoes, and house sauce.",
    category: "Sandwiches & Wraps",
    lunchOnly: true,
  },
  {
    name: "Wrap Combo",
    price: 19.95,
    description: "Any wrap served with fries and a drink.",
    category: "Sandwiches & Wraps",
  },

  // ─── Salads & Soup ──────────────────────────────────────────────────
  {
    name: "Chicken Caesar Salad",
    price: 15.95,
    description:
      "Romaine lettuce topped with grilled chicken, parmesan, croutons, and Caesar dressing.",
    category: "Salads & Soup",
  },
  {
    name: "Arugula Strawberry Salad",
    price: 11.95,
    description:
      "Fresh arugula with strawberries, sliced almonds, feta cheese, olive oil, and pomegranate dressing.",
    category: "Salads & Soup",
    isVegetarian: true,
    hasAllergens: true,
  },
  {
    name: "Lentil Soup",
    price: 7.95,
    description:
      "Turkish-style lentil soup made with red lentils, herbs, and warm spices.",
    category: "Salads & Soup",
    isVegetarian: true,
    lunchOnly: true,
    isTurkishClassic: true,
  },
];

/** Sides available with any wrap or plate, printed at the foot of the menu. */
export const menuSides = [
  { name: "Fries", price: 3 },
  { name: "Salad", price: 3 },
];

export const menuItemDetails: Record<string, MenuItemDetailType> = {
  "breakfast-plate": {
    images: ["/images/menu/breakfast-plate.jpg"],
    funFacts: [
      "The Turkish word for breakfast, 'kahvaltı', literally means 'before coffee'.",
      "In Turkey, breakfast is considered the most important meal of the day.",
      "Turkish tea is traditionally served in small tulip-shaped glasses."
    ],
    ingredients: [
      "Omelette",
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
      "Soujuk omelette or menemen",
      "Cheese rolls",
      "Cheese platter",
      "Housemade simit (Turkish bagel)",
      "Fresh bread",
      "Mixed salad",
      "Housemade strawberry jam",
      "Honey",
      "Olives",
      "Ajuka (contains walnuts)",
      "Crackers",
      "Seasonal fruits",
      "2 large Turkish teas"
    ],
    preparationTime: "30 mins",
    servingSize: "2 people",
    difficulty: "Complex",
    relatedItems: ["breakfast-plate", "menemen-shakshuka"]
  },

  "breakfast-favorites": {
    images: ["/images/menu/breakfast-favorites.jpg"],
    funFacts: [
      "This is the American-style plate on the menu — a counterpart to the traditional Turkish spread.",
      "All the meat served at Canan's Kitchen is beef; there is no pork on the menu.",
      "Hashbrowns get their crisp edges from squeezing every last drop of water out of the shredded potato."
    ],
    ingredients: [
      "Two soft scrambled eggs",
      "Crispy beef bacon",
      "Breakfast sausage",
      "Mashed avocado",
      "Hashbrowns",
      "Bread and butter"
    ],
    preparationTime: "20 mins",
    servingSize: "1 person",
    difficulty: "Medium",
    relatedItems: ["breakfast-plate", "avocado-toast"]
  },

  "menemen-shakshuka": {
    images: ["/images/menu/menemen.jpg"],
    recipe: "Try this simplified version at home:\n\n1. Dice onions, tomatoes, and peppers\n2. Sauté onions and peppers in olive oil until soft\n3. Add tomatoes and cook until they break down\n4. Season with salt, pepper, and paprika\n5. Stir in beaten eggs and fold gently until just set\n6. Keep the heat low so the eggs stay soft and creamy\n7. Serve with bread",
    funFacts: [
      "Menemen is named after a district in İzmir, Turkey.",
      "While similar to shakshuka, menemen typically has the eggs scrambled into the mixture rather than poached on top.",
      "It's a popular breakfast dish throughout Turkey and is often served in a traditional copper pan."
    ],
    ingredients: [
      "Fresh eggs",
      "Tomatoes",
      "Green peppers",
      "Olive oil",
      "Spices",
      "Bread"
    ],
    preparationTime: "20 mins",
    servingSize: "1-2 people",
    difficulty: "Medium",
    relatedItems: ["soujuk-eggs", "mixed-breakfast-2-person"]
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
    relatedItems: ["mixed-crepe", "nutella-strawberry-banana-crepe"]
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
      "House sauce",
      "Butter"
    ],
    preparationTime: "15 mins",
    servingSize: "1 person",
    difficulty: "Medium",
    relatedItems: ["nutella-strawberry-banana-crepe", "pancakes"]
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
    relatedItems: ["mixed-crepe", "pancakes"]
  },

  "meat-eggs-kavurma": {
    images: ["/images/menu/kavurma.jpg"],
    funFacts: [
      "Kavurma is a traditional Turkish dish of sautéed or braised meat, usually lamb or beef.",
      "The dish dates back to nomadic Turkish tribes who preserved meat in its own fat.",
      "In Turkey, it's often prepared as a special dish during religious festivals."
    ],
    ingredients: [
      "Tender sautéed kavurma",
      "Fresh eggs",
      "Butter",
      "Spices",
      "Fresh bread"
    ],
    preparationTime: "20 mins",
    servingSize: "1 person",
    difficulty: "Medium",
    relatedItems: ["soujuk-eggs", "mixed-breakfast-2-person"],
    nutrition: {
      calories: 520,
      protein: 30,
      carbs: 15,
      fat: 35
    }
  },

  "soujuk-eggs": {
    images: ["/images/menu/soujuk-omelette.jpg"],
    funFacts: [
      "Soujuk is a dry, spicy sausage common in Turkish, Balkan, and Middle Eastern cuisine.",
      "Traditional soujuk is made from ground beef with various spices including cumin, sumac, garlic, salt, and red pepper.",
      "It's typically cured for several weeks before being consumed."
    ],
    ingredients: [
      "Sliced Turkish soujuk",
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
    recipe: "Try this at home:\n\n1. Wash and chop fresh spinach\n2. Beat eggs with a pinch of salt and pepper\n3. Heat butter in a pan over medium heat\n4. Add spinach and sauté until wilted\n5. Pour in beaten eggs\n6. Cook until set on bottom, then fold and finish cooking\n7. Serve with bread",
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
      "Bread"
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
    recipe: "Simple mushroom omelette recipe:\n\n1. Clean and slice mushrooms\n2. Sauté mushrooms in butter until golden\n3. Beat eggs with salt and pepper\n4. Pour eggs over mushrooms in pan\n5. Cook until bottom is set, then fold\n6. Serve with bread",
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
      "Bread"
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
    recipe: "Classic cheese omelette recipe:\n\n1. Beat eggs with salt and pepper\n2. Heat butter in a non-stick pan\n3. Pour in eggs and cook until almost set\n4. Sprinkle with feta and mozzarella cheese\n5. Fold omelette and allow cheese to melt\n6. Serve with bread",
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
      "Bread"
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

  "mediterranean-omelet": {
    images: ["/images/menu/mediterranean-omelet.jpg"],
    funFacts: [
      "The Mediterranean diet was recognised by UNESCO as an Intangible Cultural Heritage in 2010.",
      "Feta and tomato is one of the oldest flavour pairings in the eastern Mediterranean.",
      "Turkey grows more than 12 million tonnes of tomatoes a year, among the most of any country."
    ],
    ingredients: [
      "Fresh eggs",
      "Baby spinach",
      "Mushrooms",
      "Feta cheese",
      "Tomatoes",
      "Bread"
    ],
    preparationTime: "15 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["spinach-omelette", "mushroom-omelette"]
  },

  "avocado-toast": {
    images: ["/images/menu/avocado-toast.jpg"],
    recipe: "Make it at home:\n\n1. Toast sourdough bread until crisp\n2. Mash ripe avocado with lemon juice, salt, and pepper\n3. Spread the avocado over the warm toast\n4. Top with arugula and a drizzle of olive oil",
    funFacts: [
      "Avocados are technically a fruit, specifically a single-seed berry.",
      "There are over 500 varieties of avocados in the world.",
      "Avocado trees can live for over 400 years and produce up to 500 avocados annually."
    ],
    ingredients: [
      "Sourdough bread",
      "Ripe avocado",
      "Arugula",
      "Lemon juice",
      "Olive oil",
      "Salt and pepper"
    ],
    preparationTime: "8 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["egg-cheese-croissant", "chefs-soujuk-kashar-panini"],
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
      "Fluffy scrambled eggs",
      "Feta cheese",
      "Mozzarella cheese"
    ],
    preparationTime: "8 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["egg-cheese-soujuk-croissant", "smoked-salmon-croissant"],
    nutrition: {
      calories: 420,
      protein: 14,
      carbs: 30,
      fat: 28
    }
  },

  "egg-cheese-soujuk-croissant": {
    images: ["/images/menu/egg-cheese-soujuk-croissant.jpg"],
    funFacts: [
      "Soujuk is cured for several weeks before it ever reaches the pan.",
      "The spice blend usually includes cumin, sumac, garlic, and red pepper.",
      "Soujuk releases its own paprika-red fat as it cooks, which is what flavours the eggs."
    ],
    ingredients: [
      "Fresh croissant",
      "Scrambled eggs",
      "Feta cheese",
      "Mozzarella cheese",
      "Turkish soujuk"
    ],
    preparationTime: "10 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["egg-cheese-croissant", "egg-cheese-bacon-beef-croissant"]
  },

  "egg-cheese-bacon-beef-croissant": {
    images: ["/images/menu/egg-cheese-bacon-croissant.jpg"],
    funFacts: [
      "All the bacon here is beef — there is no pork anywhere on the menu.",
      "Beef bacon is cut from the belly or navel, the same way pork bacon is.",
      "It crisps at a slightly lower temperature than pork bacon, so it needs a closer eye on the griddle."
    ],
    ingredients: [
      "Fresh croissant",
      "Scrambled eggs",
      "Feta cheese",
      "Mozzarella cheese",
      "Crispy beef bacon"
    ],
    preparationTime: "10 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["egg-cheese-sausage-croissant", "egg-cheese-croissant"]
  },

  "egg-cheese-sausage-croissant": {
    images: [],
    funFacts: [
      "The breakfast sausage here is beef, seasoned in-house.",
      "Feta and mozzarella together give you both the salt and the stretch.",
      "A croissant reheats best in a dry oven — a microwave steams the layers flat."
    ],
    ingredients: [
      "Fresh croissant",
      "Scrambled eggs",
      "Feta cheese",
      "Mozzarella cheese",
      "Savory beef sausage"
    ],
    preparationTime: "10 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["egg-cheese-bacon-beef-croissant", "egg-cheese-croissant"]
  },

  "smoked-salmon-croissant": {
    images: ["/images/menu/smoked-salmon-croissant.jpg"],
    funFacts: [
      "Cold-smoked salmon is cured in salt before it ever meets smoke.",
      "Avocado and salmon is a pairing that only entered brunch menus in the last few decades.",
      "Arugula's peppery bite is there to cut through the fat of the salmon and cream cheese."
    ],
    ingredients: [
      "Fresh croissant",
      "Smoked salmon",
      "Avocado",
      "Arugula",
      "Cream cheese"
    ],
    preparationTime: "8 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["avocado-toast", "egg-cheese-croissant"]
  },

  "chefs-soujuk-kashar-panini": {
    images: ["/images/menu/soujuk-panini.jpg"],
    funFacts: [
      "Panini is actually the plural form of 'panino' in Italian, which simply means 'small bread roll'.",
      "Kashkaval (Kashar) cheese is a type of yellow cheese made from sheep's milk that's popular in Turkey and the Balkans.",
      "The modern panini press was invented in Italy in the 1970s."
    ],
    ingredients: [
      "Ciabatta bread",
      "Soujuk (Turkish sausage)",
      "Mozzarella cheese",
      "Pepper paste",
      "Mixed greens",
      "Fries"
    ],
    preparationTime: "12 mins",
    servingSize: "1 person",
    difficulty: "Medium",
    relatedItems: ["soujuk-eggs", "meat-eggs-kavurma"],
    nutrition: {
      calories: 650,
      protein: 28,
      carbs: 45,
      fat: 42
    }
  },

  "simit-sandwich": {
    images: ["/gallery/simit.jpg"],
    funFacts: [
      "Simit is dipped in grape molasses before it's rolled in sesame seeds — that's where the colour comes from.",
      "Istanbul street carts have sold simit since at least the 16th century.",
      "The simit here is made in house every morning."
    ],
    ingredients: [
      "Housemade simit",
      "Tomatoes",
      "Mozzarella cheese",
      "Turkish white cheese"
    ],
    preparationTime: "8 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["breakfast-plate", "avocado-toast"]
  },

  "kavurma-beef-wrap": {
    images: [],
    funFacts: [
      "Kavurma began as a way to preserve meat by cooking it slowly in its own fat.",
      "Red cabbage keeps its crunch in a warm wrap far better than green.",
      "Available at lunch only — the kavurma is braised fresh for the midday service."
    ],
    ingredients: [
      "Warm wrap",
      "Kavurma",
      "Fresh greens",
      "Red cabbage",
      "Tomatoes",
      "House sauce"
    ],
    preparationTime: "12 mins",
    servingSize: "1 person",
    difficulty: "Medium",
    relatedItems: ["chicken-wrap", "wrap-combo"]
  },

  "chicken-wrap": {
    images: [],
    funFacts: [
      "The chicken is grilled to order rather than held on a warmer.",
      "House sauce is the same one that finishes the mixed crepe.",
      "Available at lunch only."
    ],
    ingredients: [
      "Warm wrap",
      "Grilled chicken",
      "Fresh greens",
      "Red cabbage",
      "Tomatoes",
      "House sauce"
    ],
    preparationTime: "12 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["kavurma-beef-wrap", "wrap-combo"]
  },

  "wrap-combo": {
    images: [],
    funFacts: [
      "Works with either wrap on the menu — kavurma or chicken.",
      "Ordering the combo costs less than adding fries and a drink separately.",
      "Fries and salad are also available on their own for $3 each."
    ],
    ingredients: [
      "Any wrap from the menu",
      "Fries",
      "Drink of your choice"
    ],
    preparationTime: "12 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["kavurma-beef-wrap", "chicken-wrap"]
  },

  "chicken-caesar-salad": {
    images: [],
    funFacts: [
      "The Caesar salad was invented in Tijuana, Mexico, not Italy.",
      "It's named after Caesar Cardini, the restaurateur who improvised it in 1924.",
      "The original was eaten with the fingers, leaf by leaf."
    ],
    ingredients: [
      "Romaine lettuce",
      "Grilled chicken",
      "Parmesan cheese",
      "Croutons",
      "Caesar dressing"
    ],
    preparationTime: "10 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["arugula-strawberry-salad", "chicken-wrap"]
  },

  "arugula-strawberry-salad": {
    images: [],
    funFacts: [
      "Pomegranate molasses is a staple of Turkish dressings — sweet, sour, and thick as syrup.",
      "Arugula was eaten in ancient Rome and grows wild across the Mediterranean.",
      "Strawberries and feta play the same sweet-and-salty trick as melon and prosciutto."
    ],
    ingredients: [
      "Fresh arugula",
      "Strawberries",
      "Sliced almonds",
      "Feta cheese",
      "Olive oil",
      "Pomegranate dressing"
    ],
    preparationTime: "10 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["chicken-caesar-salad", "avocado-toast"]
  },

  "lentil-soup": {
    images: [],
    funFacts: [
      "Mercimek çorbası is served at practically every meal in Turkey, breakfast included.",
      "Red lentils break down completely as they cook, which is what makes the soup velvety without cream.",
      "It's traditionally finished with a squeeze of lemon at the table."
    ],
    ingredients: [
      "Red lentils",
      "Herbs",
      "Warm spices"
    ],
    preparationTime: "10 mins",
    servingSize: "1 person",
    difficulty: "Easy",
    relatedItems: ["arugula-strawberry-salad", "simit-sandwich"]
  }
};
