import { Star } from "lucide-react";
import { motion } from "framer-motion";
import {
  drinks,
  drinkAddOns,
  drinkSizes,
  softDrinks,
  formatPrice,
  formatDrinkPrice,
  type Drink,
} from "./drinksData";

const CATEGORIES: Drink["category"][] = ["Regular Drinks", "Specials"];

function DrinkRow({ drink }: { drink: Drink }) {
  return (
    <li className="flex items-baseline gap-3 py-2">
      <span className="text-charcoal flex items-center gap-1.5">
        {drink.name}
        {drink.isTurkishClassic && (
          <Star
            size={12}
            className="text-primary fill-current flex-shrink-0"
            aria-label="Turkish classic"
          />
        )}
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-b border-dotted border-charcoal/20 min-w-[1.5rem]"
      />
      <span className="font-display text-primary whitespace-nowrap">
        {formatDrinkPrice(drink.price)}
      </span>
    </li>
  );
}

export function Drinks() {
  return (
    <section id="drinks" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Coffee &amp; Tea
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Drink Menu
          </h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto mb-2">
            Turkish coffee and tea brewed the traditional way, alongside the
            espresso bar
          </p>
          <p className="text-sm text-charcoal-lighter tracking-wide">
            {drinkSizes}
          </p>
        </motion.div>

        {/* Two columns, as printed */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-10">
          {CATEGORIES.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-display text-2xl text-charcoal text-center tracking-widest uppercase mb-4">
                {category}
              </h3>
              <ul className="divide-y divide-charcoal/5">
                {drinks
                  .filter((drink) => drink.category === category)
                  .map((drink) => (
                    <DrinkRow key={drink.name} drink={drink} />
                  ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Add-ons and soft drinks */}
        <div className="max-w-5xl mx-auto mt-14 text-center">
          <h3 className="font-display text-xl text-charcoal tracking-widest uppercase mb-3">
            Add-Ons
          </h3>
          <p className="text-charcoal-light">
            {drinkAddOns
              .map((addOn) => `${addOn.name} +${formatPrice(addOn.price)}`)
              .join("   ·   ")}
          </p>

          <h3 className="font-display text-xl text-charcoal tracking-widest uppercase mt-10 mb-3">
            Soft Drinks
          </h3>
          <p className="text-charcoal-light">
            {softDrinks
              .map((soda) => `${soda.name} ${formatPrice(soda.price)}`)
              .join("   ·   ")}
          </p>

          <div className="flex items-center justify-center gap-2 mt-10 text-sm text-charcoal-lighter">
            <Star size={13} className="text-primary fill-current" />
            <span>Turkish Classic</span>
          </div>

          <p className="font-display text-2xl text-primary tracking-[0.2em] mt-10">
            AFIYET OLSUN
          </p>
        </div>
      </div>
    </section>
  );
}
