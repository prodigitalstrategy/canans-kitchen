interface MenuItem {
  name: string;
  price: number;
  description: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  hasAllergens?: boolean;
  adjustments?: string[];
}

export const menuItems: MenuItem[] = [
  {
    name: "Mixed Breakfast (2 Person)",
    price: 42,
    description:
      "A generous platter featuring soujuk omelette or menemen, cheese pastry, cheese platter, french fries, housemade simit, bread, salad, housemade strawberry jam, honey, olives, walnuts, almonds, crackers, seasonal fruits, and 2 large teas.",
    isVegetarian: true,
  },
  {
    name: "Breakfast Plate",
    price: 19,
    description:
      "Omelette, housemade simit, cheese, salad, housemade strawberry jam, honey, olives, and 1 large tea.",
    isVegetarian: true,
  },
  {
    name: "Chef's Soujuk-Kashar Panini",
    price: 17,
    description:
      "Grilled ciabatta bread with soujuk, mozzarella, and pepper paste. Contains walnuts and hazelnuts. Served with mixed greens and fries.",
    hasAllergens: true,
  },
  {
    name: "Meat & Eggs (Kavurma)",
    price: 19,
    description:
      "Poached eggs cracked into a pan of sauteed meat. Comes with bread.",
  },
  {
    name: "Soujuk Omelette",
    price: 16,
    description:
      "Poached eggs cracked into a pan of sliced soujuk. Comes with bread.",
  },
  {
    name: "Spinach Omelette",
    price: 12,
    description:
      "A fluffy omelet with fresh spinach, served with toasted sourdough bread.",
    isVegetarian: true,
    adjustments: ["+$2 salad", "+$5 fries"],
  },
  {
    name: "Mushroom Omelette",
    price: 12,
    description:
      "A hearty omelet with sautéed mushrooms served with toasted sourdough bread.",
    isVegetarian: true,
    adjustments: ["+$2 salad", "+$5 fries"],
  },
  {
    name: "Cheese Omelette",
    price: 12,
    description:
      "Made with creamy feta cheese and mozzarella, served with toasted sourdough bread.",
    isVegetarian: true,
    adjustments: ["+$2 salad", "+$5 fries"],
  },
  {
    name: "Avocado Toast",
    price: 13,
    description:
      "Sourdough toast topped with creamy avocado spread, cream cheese, and arugula on top.",
    isVegetarian: true,
    isVegan: true,
  },
  {
    name: "Egg & Cheese Croissant",
    price: 9,
    description: "Fresh croissant with eggs and cheese.",
    isVegetarian: true,
  },
  {
    name: "Menemen (Shakshuka)",
    price: 14,
    description:
      "Scrambled eggs cooked with fresh tomatoes and peppers in olive oil. Served with French bread.",
    isVegetarian: true,
  },
  {
    name: "Pancakes",
    price: 13,
    description:
      "A stack of fluffy pancakes served with fresh fruits and syrup.",
    isVegetarian: true,
    adjustments: ["Matcha pancakes available for +$2"],
  },
  {
    name: "Mixed Crepe",
    price: 14,
    description: "Stuffed with baby spinach and mozzarella.",
    isVegetarian: true,
    adjustments: ["+$2 avocado", "+$2 scrambled eggs"],
  },
  {
    name: "Banana Nutella Almond Crepe",
    price: 14,
    description: "Sweet crepe filled with banana, Nutella, and almonds.",
    isVegetarian: true,
  },
  {
    name: "Nutella Strawberry Banana Crepe",
    price: 14,
    description:
      "Sweet crepe filled with Nutella, fresh strawberries, and banana.",
    isVegetarian: true,
  },
];
