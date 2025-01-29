import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Wheat, AlertTriangle } from 'lucide-react';
import { categories, cateringItems } from './cateringData';
import { CateringItem as CateringItemType } from './types';

export function CateringMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('pastries');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Catering Menu
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Elevate your event with authentic Turkish cuisine. 
            Each dish is crafted with care and tradition.
          </p>
          <p className="text-primary-dark/80 font-medium mt-4">
            Minimum order: 10 people per item
          </p>
        </div>

        {/* Category Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300
                ${selectedCategory === category.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  ? 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-md'
                }
              `}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </nav>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {cateringItems
              .filter(item => item.category === selectedCategory)
              .map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <CateringItem
                    item={item}
                    isHovered={hoveredItem === item.id}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl md:text-3xl text-primary mb-4">
            Ready to Order?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us to discuss your event and create the perfect menu.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

interface CateringItemProps {
  item: CateringItemType;
  isHovered: boolean;
}

function CateringItem({ item, isHovered }: CateringItemProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300
        ${isHovered ? 'shadow-xl transform -translate-y-1' : ''}
      `}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className={`
            w-full h-full object-cover transition-transform duration-500
            ${isHovered ? 'scale-110' : ''}
          `}
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {item.isVegan && (
            <span className="bg-green-500/90 text-white p-2 rounded-full" title="Vegan">
              <Leaf size={16} />
            </span>
          )}
          {item.isVegetarian && !item.isVegan && (
            <span className="bg-green-500/90 text-white p-2 rounded-full" title="Vegetarian">
              <Wheat size={16} />
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl text-primary mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        
        {/* Price and Order Info */}
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-primary-dark">
            ${item.pricePerPerson.toFixed(2)} per person
          </span>
          <span className="text-gray-500">
            Min. {item.minOrder} people
          </span>
        </div>

        {/* Allergens */}
        {item.allergens && item.allergens.length > 0 && (
          <div className="mt-4 flex items-center gap-2 text-amber-600 text-xs">
            <AlertTriangle size={14} />
            <span>Contains: {item.allergens.join(', ')}</span>
          </div>
        )}
      </div>
    </div>
  );
}
