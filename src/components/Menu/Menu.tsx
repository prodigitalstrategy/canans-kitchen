import { useState } from "react";
import { Leaf, Wheat, ChefHat, Phone, MapPin, Star, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, menuSides } from "./menuData";
import { MenuItem } from "./MenuItem";

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

export function Menu() {
  const categories = CATEGORIES.filter((category) =>
    menuItems.some((item) => item.category === category.name)
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);

  const activeCategory =
    categories.find((category) => category.name === selectedCategory) ?? categories[0];

  return (
    <section id="menu" className="min-h-screen py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Fresh Daily
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Breakfast Menu
          </h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            Experience authentic Turkish breakfast delights, prepared with traditional recipes and the freshest ingredients
          </p>
        </motion.div>
        
        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-4xl mx-auto h-64 mb-12 overflow-hidden rounded-2xl shadow-card"
        >
          <img
            src={activeCategory.image}
            alt={`${activeCategory.name} at Canan's Kitchen, Fountain Valley`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent flex items-end">
            <div className="p-6 text-white w-full">
              <h3 className="font-display text-3xl mb-2">{activeCategory.name}</h3>
              <p className="text-white/80 text-sm">{activeCategory.tagline}</p>
            </div>
          </div>
        </motion.div>
        
        {/* Legend */}
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-8">
          <div className="flex items-center gap-2">
            <Star size={18} className="text-primary fill-current" />
            <span className="text-sm text-charcoal-light">Turkish Classic</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf size={18} className="text-secondary" />
            <span className="text-sm text-charcoal-light">Vegan</span>
          </div>
          <div className="flex items-center gap-2">
            <Wheat size={18} className="text-secondary" />
            <span className="text-sm text-charcoal-light">Vegetarian</span>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat size={18} className="text-primary" />
            <span className="text-sm text-charcoal-light">Chef's Pick</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-accent-dark" />
            <span className="text-sm text-charcoal-light">Lunch Only</span>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`
                px-5 py-2.5 rounded-full text-base font-medium transition-all duration-300
                ${selectedCategory === category.name
                  ? "bg-primary text-white shadow-warm"
                  : "bg-white text-charcoal hover:bg-cream-dark border border-charcoal/10"}
              `}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {menuItems
                .filter((item) => item.category === selectedCategory)
                .map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <MenuItem {...item} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Sides, printed at the foot of the Sandwiches & Wraps section */}
          {selectedCategory === "Sandwiches & Wraps" && (
            <p className="text-center text-charcoal-light mt-8">
              {menuSides
                .map((side) => `${side.name} $${side.price}`)
                .join("  ·  ")}
            </p>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
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
