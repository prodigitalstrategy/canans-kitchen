import { useState } from "react";
import { Coffee, Leaf, Wheat, ChefHat } from "lucide-react";
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

  return (
    <section id="menu" className="min-h-screen py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl text-primary mb-4">
            Breakfast Menu
          </h2>
          <p className="text-center mb-8 text-gray-600">
            Experience authentic Turkish breakfast delights
          </p>
          
          {/* Legend */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Leaf size={16} className="text-green-600" />
              <span className="text-sm text-gray-600">Vegan</span>
            </div>
            <div className="flex items-center gap-2">
              <Wheat size={16} className="text-green-600" />
              <span className="text-sm text-gray-600">Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat size={16} className="text-primary-dark" />
              <span className="text-sm text-gray-600">Chef's Recommendation</span>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
                ${selectedCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <h3 className="font-serif font-semibold text-xl text-primary">
              {selectedCategory}
            </h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            {menuItems
              .filter((item) => item.category === selectedCategory)
              .map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All our dishes are made fresh to order with locally sourced ingredients
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Coffee size={20} />
            Visit Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
