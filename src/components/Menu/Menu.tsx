import React from "react";
import { Coffee, Leaf, Wheat } from "lucide-react";
import { MenuItem } from "./MenuItem";
import { menuItems } from "./menuData";

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-2 text-center text-primary">
          Breakfast Menu
        </h2>
        <p className="text-center mb-8 text-gray-600">
          Experience authentic Turkish breakfast delights
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Leaf size={16} className="text-green-600" />
            <span className="text-sm text-gray-600">Vegan</span>
          </div>
          <div className="flex items-center gap-2">
            <Wheat size={16} className="text-green-600" />
            <span className="text-sm text-gray-600">Vegetarian</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Breakfast Platters */}
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
            <h3 className="font-serif font-semibold text-lg text-primary">
              Breakfast Platters
            </h3>
          </div>
          {menuItems
            .filter((item) => item.name.includes("Breakfast"))
            .map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}

          {/* Eggs & Omelettes */}
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
            <h3 className="font-serif font-semibold text-lg text-primary">
              Eggs & Omelettes
            </h3>
          </div>
          {menuItems
            .filter(
              (item) =>
                item.name.includes("Omelette") ||
                item.name.includes("Eggs") ||
                item.name.includes("Menemen")
            )
            .map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}

          {/* Specialties */}
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
            <h3 className="font-serif font-semibold text-lg text-primary">
              Specialties
            </h3>
          </div>
          {menuItems
            .filter(
              (item) =>
                item.name.includes("Toast") ||
                item.name.includes("Panini") ||
                item.name.includes("Croissant")
            )
            .map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}

          {/* Sweet Treats */}
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
            <h3 className="font-serif font-semibold text-lg text-primary">
              Sweet Treats
            </h3>
          </div>
          {menuItems
            .filter(
              (item) =>
                item.name.includes("Pancakes") || item.name.includes("Crepe")
            )
            .map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All our dishes are made fresh to order with locally sourced
            ingredients
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
