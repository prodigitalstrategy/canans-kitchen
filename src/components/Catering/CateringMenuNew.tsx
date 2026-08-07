import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, ArrowRight, Leaf, Wheat, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, cateringItems } from "./cateringData";
import type { CateringItem as CateringItemType } from "./types";

const PHONE_NUMBER = "9493946318";

/** Tiny inline badge with screen-reader text, sized to sit beside the item name. */
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

function CateringRow({ item }: { item: CateringItemType }) {
  return (
    <li>
      <Link
        to={`/catering/${item.id}`}
        className="group flex items-start gap-5 sm:gap-7 py-6"
      >
        {/* Arched thumbnail, echoing the printed menu's arcs */}
        <span className="relative flex-shrink-0 overflow-hidden rounded-t-full rounded-b-xl shadow-card w-20 h-28 sm:w-24 sm:h-32">
          <img
            src={item.imageUrl}
            alt={item.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </span>

        <span className="flex-1 min-w-0">
          <span className="flex items-baseline gap-3">
            <span className="font-display text-xl sm:text-2xl text-charcoal group-hover:text-primary transition-colors">
              <span className="inline-flex items-center gap-2 flex-wrap">
                {item.name}
                <span className="inline-flex items-center gap-1.5">
                  {item.popular && (
                    <RowBadge label="Popular choice">
                      <Star size={14} className="text-accent-dark fill-current" />
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
                </span>
              </span>
            </span>
            <span
              aria-hidden="true"
              className="flex-1 border-b border-dotted border-charcoal/25 min-w-[1.25rem]"
            />
            <span className="whitespace-nowrap text-right">
              <span className="font-display text-xl sm:text-2xl text-primary">
                ${item.pricePerPerson.toFixed(2)}
              </span>
              <span className="block text-[11px] text-charcoal-lighter -mt-0.5">
                per person
              </span>
            </span>
          </span>

          <span className="mt-1.5 flex items-start justify-between gap-6">
            <span className="text-sm text-charcoal-light leading-relaxed max-w-[52ch]">
              {item.description}
            </span>
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="mt-1 flex-shrink-0 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            />
          </span>

          <span className="mt-1.5 block text-xs italic text-charcoal-lighter">
            Min. {item.minOrder} people
            {item.servingSize ? `  ·  ${item.servingSize}` : ""}
            {item.preparationTime ? `  ·  ${item.preparationTime} notice` : ""}
            {item.allergens?.length ? (
              <span className="text-amber-600 not-italic">
                {"   "}⚠︎ {item.allergens.join(", ")}
              </span>
            ) : null}
          </span>
        </span>
      </Link>
    </li>
  );
}

interface CateringMenuNewProps {
  /** True on the standalone /catering page, where this heading is the page's h1. */
  standalone?: boolean;
}

export function CateringMenuNew({ standalone = false }: CateringMenuNewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);

  const activeCategory =
    categories.find((category) => category.id === selectedCategory) ?? categories[0];

  const activeItems = cateringItems.filter(
    (item) => item.category === selectedCategory
  );

  const Heading = standalone ? "h1" : "h2";

  return (
    <div className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent-dark rounded-full text-sm font-medium mb-4">
            <Calendar size={14} />
            Catering Services
          </span>
          <Heading className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Bring Turkish Breakfast to Your Event
          </Heading>
          {/* Ornament, borrowed from the printed menu */}
          <span className="flex items-center justify-center gap-1.5 mb-4" aria-hidden="true">
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            From intimate gatherings to large celebrations, we bring the authentic taste of Türkiye to you
          </p>
        </motion.div>

        {/* Category tabs — editorial serif with a sliding underline */}
        <div
          role="tablist"
          aria-label="Catering categories"
          className="flex flex-wrap justify-center gap-x-1 gap-y-1 mb-4"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-4 py-2 font-display text-lg sm:text-xl tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded
                  ${isActive ? "text-primary" : "text-charcoal-light hover:text-charcoal"}`}
              >
                {category.name}
                {isActive && (
                  <motion.span
                    layoutId="catering-tab-underline"
                    aria-hidden="true"
                    className="absolute left-4 right-4 bottom-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Category description + legend */}
        <div className="text-center mb-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeCategory.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-charcoal-light italic text-sm"
            >
              {activeCategory.description}
            </motion.p>
          </AnimatePresence>
          <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs text-charcoal-lighter">
            <span className="inline-flex items-center gap-1.5">
              <Star size={13} className="text-accent-dark fill-current" /> Popular
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Leaf size={13} className="text-secondary" /> Vegan
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Wheat size={13} className="text-secondary" /> Vegetarian
            </span>
          </div>
        </div>

        {/* Illustrated dotted-leader list */}
        <div className="max-w-3xl mx-auto">
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
                <CateringRow key={item.id} item={item} />
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-accent rounded-2xl p-8 md:p-10 text-center relative overflow-hidden max-w-4xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-charcoal/5 rounded-full translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-3">
                Ready to Plan Your Event?
              </h3>
              <p className="text-charcoal-light mb-6 max-w-xl mx-auto">
                Let's discuss your catering needs. We'll create a custom menu perfect for your occasion.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-medium rounded-full hover:bg-charcoal-light transition-colors shadow-lg hover:shadow-xl"
                >
                  <Phone size={20} />
                  Call (949) 394-6318
                </a>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-medium rounded-full hover:bg-cream-dark transition-colors border border-charcoal/10"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
