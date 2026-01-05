import { useState } from "react";
import { Leaf, Wheat, ChefHat, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "./menuData";
import { MenuItem } from "./MenuItem";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Canan's+Kitchen+%26+Bakery,+16937+Bushard+St,+Fountain+Valley,+CA+92708";
const PHONE_NUMBER = "9493946318";

export function Menu() {
  // Get unique categories from menuItems and sort them in a logical order
  const categories = [
    "Breakfast Platters",
    "Breakfast Specials",
    "Eggs & Omelettes",
    "Sandwiches",
    "Crepes"
  ].filter(category => menuItems.some(item => item.category === category));
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  
  // Get the appropriate image for each menu category
  const getCategoryImage = (category: string) => {
    switch(category) {
      case "Breakfast Platters":
        return "/gallery/turkish-breakfast.jpg";
      case "Breakfast Specials":
        return "/gallery/breakfast-spread.jpg";
      case "Eggs & Omelettes":
        return "/gallery/menemen.jpg";
      case "Sandwiches":
        return "/gallery/simit.jpg";
      case "Crepes":
        return "/gallery/pastries.jpg";
      default:
        return "/gallery/turkish-breakfast.jpg";
    }
  };

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
            src={getCategoryImage(selectedCategory)} 
            alt={selectedCategory}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent flex items-end">
            <div className="p-6 text-white w-full">
              <h3 className="font-display text-3xl mb-2">{selectedCategory}</h3>
              <p className="text-white/80 text-sm">
                {selectedCategory === "Breakfast Platters" && "Generous platters perfect for sharing"}
                {selectedCategory === "Breakfast Specials" && "Chef's special morning delights"}
                {selectedCategory === "Eggs & Omelettes" && "Farm-fresh eggs prepared to perfection"}
                {selectedCategory === "Sandwiches" && "Handcrafted with freshly baked bread"}
                {selectedCategory === "Crepes" && "Sweet treats to brighten your morning"}
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Legend */}
        <div className="flex justify-center gap-6 mb-8">
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
        </div>

        {/* Menu Categories */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-5 py-2.5 rounded-full text-base font-medium transition-all duration-300
                ${selectedCategory === category
                  ? "bg-primary text-white shadow-warm"
                  : "bg-white text-charcoal hover:bg-cream-dark border border-charcoal/10"}
              `}
            >
              {category}
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
