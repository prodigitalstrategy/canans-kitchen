import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  Wheat,
  ChefHat,
  Phone,
  MapPin,
  Star,
  Clock,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, menuSides, type MenuItem as MenuItemType } from "./menuData";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Canan's+Kitchen+%26+Bakery,+16937+Bushard+St,+Fountain+Valley,+CA+92708";
const PHONE_NUMBER = "9493946318";

// Categories follow the printed menu, in the same order.
const CATEGORIES = [
  {
    name: "Breakfast Plates",
    image: "/gallery/turkish-breakfast.jpg",
    tagline: "Generous platters perfect for sharing",
  },
  {
    name: "Omelettes",
    image: "/images/menu/mushroom-omelette.jpg",
    tagline: "Farm-fresh eggs, all served with bread",
  },
  {
    name: "Menemen (Shakshuka)",
    image: "/gallery/menemen.jpg",
    tagline: "Our signature pan of eggs, tomatoes, and peppers",
  },
  {
    name: "Crepes & Pancakes",
    image: "/images/menu/mixed-crepe.jpg",
    tagline: "Sweet and savory, made to order",
  },
  {
    name: "Toasts & Panini",
    image: "/images/menu/soujuk-panini.jpg",
    tagline: "Pressed and toasted on fresh-baked bread",
  },
  {
    name: "Croissants",
    image: "/images/menu/egg-cheese-croissant.jpg",
    tagline: "Buttery, flaky, and filled to order",
  },
  {
    name: "Sandwiches & Wraps",
    image: "/gallery/simit.jpg",
    tagline: "Handcrafted with housemade simit and warm wraps",
  },
  {
    name: "Salads & Soup",
    image: "/gallery/interior.jpg",
    tagline: "Fresh greens and a warming bowl",
  },
];

const slugify = (name: string) =>
  name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

/** Tiny inline badge with screen-reader text, sized to sit beside the dish name. */
function RowBadge({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <span title={label} className="inline-flex items-center translate-y-[1px]">
      {children}
      <span className="sr-only">{label}</span>
    </span>
  );
}

function MenuRow({ item }: { item: MenuItemType }) {
  const slug = slugify(item.name);
  return (
    <li>
      <Link to={`/menu/${slug}`} className="group block py-5">
        <span className="flex items-baseline gap-3">
          <span className="font-display text-xl sm:text-2xl text-charcoal group-hover:text-primary transition-colors">
            <span className="inline-flex items-center gap-2 flex-wrap">
              {item.name}
              <span className="inline-flex items-center gap-1.5">
                {item.isTurkishClassic && (
                  <RowBadge label="Turkish Classic">
                    <Star size={14} className="text-primary fill-current" />
                  </RowBadge>
                )}
                {item.isChefPick && (
                  <RowBadge label="Chef's Pick">
                    <ChefHat size={14} className="text-primary" />
                  </RowBadge>
                )}
                {item.isVegan && (
                  <RowBadge label="Vegan">
                    <Leaf size={14} className="text-secondary" />
                  </RowBadge>
                )}
                {item.isVegetarian && !item.isVegan && (
                  <RowBadge label="Vegetarian">
                    <Wheat size={14} className="text-secondary" />
                  </RowBadge>
                )}
                {item.lunchOnly && (
                  <RowBadge label="Lunch Only">
                    <Clock size={14} className="text-accent-dark" />
                  </RowBadge>
                )}
              </span>
            </span>
          </span>
          <span
            aria-hidden="true"
            className="flex-1 border-b border-dotted border-charcoal/25 min-w-[1.25rem]"
          />
          <span className="font-display text-xl sm:text-2xl text-primary whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </span>

        <span className="mt-1.5 flex items-start justify-between gap-6">
          <span className="text-sm text-charcoal-light leading-relaxed max-w-[56ch]">
            {item.description}
          </span>
          <ArrowRight
            size={16}
            aria-hidden="true"
            className="mt-1 flex-shrink-0 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          />
        </span>

        {(item.adjustments?.length || item.hasAllergens) && (
          <span className="mt-1 block text-xs italic">
            {item.adjustments?.length ? (
              <span className="text-accent-dark">
                Adjustments: {item.adjustments.join("  ·  ")}
              </span>
            ) : null}
            {item.adjustments?.length && item.hasAllergens ? (
              <span aria-hidden="true" className="text-charcoal/30">{"   "}</span>
            ) : null}
            {item.hasAllergens ? (
              <span className="text-amber-600 not-italic">⚠︎ Contains nuts</span>
            ) : null}
          </span>
        )}
      </Link>
    </li>
  );
}

export function Menu() {
  const categories = CATEGORIES.filter((category) =>
    menuItems.some((item) => item.category === category.name)
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);

  const activeCategory =
    categories.find((category) => category.name === selectedCategory) ?? categories[0];

  const activeItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Fresh Daily
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Breakfast Menu
          </h2>
          {/* Ornament, borrowed from the printed menu */}
          <span className="flex items-center justify-center gap-1.5 mb-4" aria-hidden="true">
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            Experience authentic Turkish breakfast delights, prepared with traditional recipes and the freshest ingredients
          </p>
        </motion.div>

        {/* Category tabs — editorial serif with a sliding underline */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="flex flex-wrap justify-center gap-x-1 gap-y-1 max-w-4xl mx-auto mb-14"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category.name;
            return (
              <button
                key={category.name}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category.name)}
                className={`relative px-4 py-2 font-display text-lg sm:text-xl tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded
                  ${isActive ? "text-primary" : "text-charcoal-light hover:text-charcoal"}`}
              >
                {category.name}
                {isActive && (
                  <motion.span
                    layoutId="menu-tab-underline"
                    aria-hidden="true"
                    className="absolute left-4 right-4 bottom-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Editorial spread: arched photo rail + dotted-leader list */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[360px,1fr] gap-12 lg:gap-16 items-start">
          {/* Photo rail */}
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.figure
                key={activeCategory.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <div className="relative mx-auto max-w-[320px] lg:max-w-none overflow-hidden rounded-t-[10rem] rounded-b-3xl shadow-card">
                  <img
                    src={activeCategory.image}
                    alt={`${activeCategory.name} at Canan's Kitchen, Fountain Valley`}
                    loading="lazy"
                    className="h-72 lg:h-[26rem] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-6">
                  <span className="font-display text-2xl text-charcoal block">
                    {activeCategory.name}
                  </span>
                  <span className="text-charcoal-light italic text-sm mt-1 block">
                    {activeCategory.tagline}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs text-charcoal-lighter">
              <span className="inline-flex items-center gap-1.5">
                <Star size={13} className="text-primary fill-current" /> Turkish Classic
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ChefHat size={13} className="text-primary" /> Chef's Pick
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Leaf size={13} className="text-secondary" /> Vegan
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Wheat size={13} className="text-secondary" /> Vegetarian
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} className="text-accent-dark" /> Lunch Only
              </span>
            </div>
          </div>

          {/* Item list */}
          <div>
            <AnimatePresence mode="wait">
              <motion.ul
                key={selectedCategory}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="divide-y divide-charcoal/5"
              >
                {activeItems.map((item) => (
                  <MenuRow key={item.name} item={item} />
                ))}
              </motion.ul>
            </AnimatePresence>

            {/* Sides, printed at the foot of the Sandwiches & Wraps section */}
            {selectedCategory === "Sandwiches & Wraps" && (
              <p className="text-center text-charcoal-light italic mt-8">
                — {menuSides.map((side) => `${side.name} $${side.price}`).join("  ·  ")} —
              </p>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-10 text-white text-center relative overflow-hidden max-w-4xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl mb-3">Ready to Taste the Difference?</h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                All dishes made fresh to order. Call ahead or visit us for the full experience.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-cream transition-colors shadow-lg hover:shadow-xl"
                >
                  <Phone size={18} />
                  Call (949) 394-6318
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
