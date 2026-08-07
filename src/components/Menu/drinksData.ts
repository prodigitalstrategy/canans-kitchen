export interface Drink {
  name: string;
  /** A single price, or [small, large] when the drink comes in both sizes. */
  price: number | [number, number];
  category: "Regular Drinks" | "Specials";
  /** A traditional Turkish drink, served here under its own name. */
  isTurkishClassic?: boolean;
}

/** Sizes apply to any drink listed with two prices. */
export const drinkSizes = "Small 8 oz  ·  Large 12 oz";

export const drinks: Drink[] = [
  // ─── Regular Drinks ─────────────────────────────────────────────────
  { name: "Regular Hot Coffee", price: [4.25, 5.25], category: "Regular Drinks" },
  { name: "Espresso", price: 3.5, category: "Regular Drinks" },
  { name: "Double Espresso", price: 4.25, category: "Regular Drinks" },
  { name: "Latte", price: [6.25, 7.25], category: "Regular Drinks" },
  { name: "Cappuccino", price: [5.25, 6.25], category: "Regular Drinks" },
  { name: "Americano", price: [5.95, 6.95], category: "Regular Drinks" },
  { name: "Flat White", price: [5.25, 6.25], category: "Regular Drinks" },
  { name: "Matcha Latte", price: [6.75, 7.75], category: "Regular Drinks" },
  { name: "Chai Latte", price: [5.95, 6.95], category: "Regular Drinks" },
  { name: "Iced Coffee", price: [4.25, 5.25], category: "Regular Drinks" },
  { name: "Iced Tea", price: [3.5, 4.5], category: "Regular Drinks" },

  // ─── Specials ───────────────────────────────────────────────────────
  { name: "Turkish Coffee", price: 7.5, category: "Specials", isTurkishClassic: true },
  { name: "Milky Turkish Coffee", price: 8, category: "Specials", isTurkishClassic: true },
  { name: "Turkish Tea", price: 4.25, category: "Specials", isTurkishClassic: true },
  { name: "Hot Tea", price: 6.25, category: "Specials" },
  { name: "Tea Pot (Turkish Tea)", price: 20, category: "Specials", isTurkishClassic: true },
  { name: "Iced Caramel Latte", price: [7.25, 8.25], category: "Specials" },
  { name: "Nutella Latte", price: [7, 8], category: "Specials" },
  { name: "Rose Latte", price: [7, 8], category: "Specials" },
  { name: "Mocha", price: [7.25, 8.25], category: "Specials" },
  { name: "Iced Matcha Latte", price: [7.25, 8.25], category: "Specials" },
  { name: "Iced Rose Tea Lemonade", price: [4.95, 5.95], category: "Specials" },
  { name: "Iced Black Peach Tea", price: [4.95, 5.95], category: "Specials" },
  { name: "Hibiscus Tea", price: [6.25, 7.25], category: "Specials" },
];

export const drinkAddOns = [
  { name: "Oat Milk", price: 0.95 },
  { name: "Almond Milk", price: 0.95 },
  { name: "Flavor Syrup", price: 0.75 },
];

export const softDrinks = [
  { name: "Coke", price: 4 },
  { name: "Sprite", price: 4 },
  { name: "Diet Coke", price: 4 },
];

/** Whole dollars stay whole, as they're printed on the menu: $8, not $8.00. */
export function formatPrice(value: number): string {
  return Number.isInteger(value) ? `$${value}` : `$${value.toFixed(2)}`;
}

export function formatDrinkPrice(price: Drink["price"]): string {
  return Array.isArray(price)
    ? `${formatPrice(price[0])} / ${formatPrice(price[1])}`
    : formatPrice(price);
}
