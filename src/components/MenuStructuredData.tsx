import { menuItems } from "./Menu/menuData";
import { drinks, formatDrinkPrice } from "./Menu/drinksData";

/**
 * schema.org Menu markup generated from the same data that renders the
 * page, so search engines always see the current items and prices.
 * Rendered on the homepage; complements the Restaurant markup in
 * index.html (linked there via hasMenu URL).
 */
export function MenuStructuredData() {
  const foodSections = [...new Set(menuItems.map((item) => item.category))];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": "https://cananskitchen.com/#menu",
    name: "Canan's Kitchen Menu",
    inLanguage: "en-US",
    hasMenuSection: [
      ...foodSections.map((section) => ({
        "@type": "MenuSection",
        name: section,
        hasMenuItem: menuItems
          .filter((item) => item.category === section)
          .map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            description: item.description,
            offers: {
              "@type": "Offer",
              price: item.price.toFixed(2),
              priceCurrency: "USD",
            },
            ...(item.isVegetarian || item.isVegan
              ? {
                  suitableForDiet: item.isVegan
                    ? "https://schema.org/VeganDiet"
                    : "https://schema.org/VegetarianDiet",
                }
              : {}),
          })),
      })),
      {
        "@type": "MenuSection",
        name: "Drinks",
        hasMenuItem: drinks.map((drink) => ({
          "@type": "MenuItem",
          name: drink.name,
          offers: {
            "@type": "Offer",
            // "small / large" items list the small price; the range shows on-page
            price: (Array.isArray(drink.price) ? drink.price[0] : drink.price).toFixed(2),
            priceCurrency: "USD",
            description: formatDrinkPrice(drink.price),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
