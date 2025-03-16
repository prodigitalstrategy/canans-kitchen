import { useState } from "react";
import { Coffee, Leaf, Wheat, ChefHat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "./menuData";
import { MenuItem } from "./MenuItem";

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
    <section id="menu" className="min-h-screen py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl text-primary mb-4">
            Breakfast Menu
          </h2>
          <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
            Experience authentic Turkish breakfast delights, prepared with traditional recipes and the freshest ingredients
          </p>
          
          {/* Featured Image */}
          <div className="relative w-full max-w-4xl mx-auto h-64 mb-12 overflow-hidden rounded-xl shadow-lg">
            <img 
              src={getCategoryImage(selectedCategory)} 
              alt={selectedCategory}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white w-full">
                <h3 className="font-serif text-3xl mb-2">{selectedCategory}</h3>
                <p className="text-white/80 text-sm">
                  {selectedCategory === "Breakfast Platters" && "Generous platters for sharing"}
                  {selectedCategory === "Breakfast Specials" && "Chef's special morning delights"}
                  {selectedCategory === "Eggs & Omelettes" && "Farm-fresh eggs prepared to perfection"}
                  {selectedCategory === "Sandwiches" && "Handcrafted with freshly baked bread"}
                  {selectedCategory === "Crepes" && "Sweet treats to brighten your morning"}
                </p>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Leaf size={18} className="text-green-600" />
              <span className="text-sm text-gray-600">Vegan</span>
            </div>
            <div className="flex items-center gap-2">
              <Wheat size={18} className="text-green-600" />
              <span className="text-sm text-gray-600">Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat size={18} className="text-primary-dark" />
              <span className="text-sm text-gray-600">Chef's Recommendation</span>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
                ${selectedCategory === category
                  ? "bg-primary text-white shadow-lg ring-2 ring-primary/20 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow"}
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
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MenuItem key={index} {...item} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            All our dishes are made fresh to order with locally sourced ingredients from trusted farmers and suppliers
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
          >
            <Coffee size={20} />
            Visit Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
