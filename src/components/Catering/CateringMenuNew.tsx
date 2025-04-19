import { useState } from 'react';
import { useOrderModal } from '../Menu/OrderModalWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { cateringItems } from './cateringData';
import { CateringItem } from './CateringItem';

export function CateringMenuNew() {
  const [selectedCategory, setSelectedCategory] = useState<'pastries' | 'mains' | 'desserts'>('pastries');

  const { openModal, modal } = useOrderModal();

  return (
    <div className="min-h-screen bg-cream py-16">
      {modal}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl text-primary mb-4">
            Canan's Kitchen – Catering Menu
          </h1>
        </div>

        {/* Menu Categories */}
        <div className="flex justify-center gap-6 mb-12">
          {['pastries', 'mains', 'desserts'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as any)}
              className={`
                px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50'}
              `}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                >
                  <CateringItem item={item} onOrder={openModal} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Ready to place your order or have questions?
          </p>
          <a
            href="tel:+19493946318"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Call (949) 394-6318
          </a>
        </div>
      </div>
    </div>
  );
}
