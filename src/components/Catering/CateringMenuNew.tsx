import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Clock, Users, ChefHat } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'pastries' | 'mains' | 'desserts';
  isVegetarian?: boolean;
  isVegan?: boolean;
  price: number;
  preparationTime?: string;
  servingSize?: string;
  spiceLevel?: 1 | 2 | 3;
  popular?: boolean;
  minOrder: number;
}

const menuItems: MenuItem[] = [
  {
    id: 'simit',
    name: 'Simit',
    description: 'Fresh-baked Turkish sesame bread rings, crisp on the outside and soft inside. Perfect for brunch or a traditional breakfast spread.',
    category: 'pastries',
    isVegetarian: true,
    price: 3.50,
    preparationTime: '20 mins',
    servingSize: '1 piece per person',
    popular: true,
    minOrder: 10
  },
  {
    id: 'patatesli-borek',
    name: 'Patatesli Börek',
    description: 'Flaky phyllo pastries filled with seasoned mashed potatoes. Light, savory, and crowd-pleasing.',
    category: 'pastries',
    isVegetarian: true,
    price: 4.50,
    preparationTime: '30 mins',
    servingSize: '2 pieces per person',
    minOrder: 10
  },
  {
    id: 'ispanakli-borek',
    name: 'Ispanaklı Börek',
    description: 'Classic spinach börek with tender spinach, onions, and herbs wrapped in thin layers of buttery phyllo dough.',
    category: 'pastries',
    isVegetarian: true,
    price: 4.50,
    preparationTime: '30 mins',
    servingSize: '2 pieces per person',
    popular: true,
    minOrder: 10
  },
  {
    id: 'kiymali-borek',
    name: 'Kıymalı Börek',
    description: 'Phyllo pastries generously filled with spiced ground beef, onions, and peppers. A hearty choice for any gathering.',
    category: 'pastries',
    price: 5.00,
    preparationTime: '35 mins',
    servingSize: '2 pieces per person',
    minOrder: 10
  },
  {
    id: 'yaprak-sarma',
    name: 'Yaprak Sarma',
    description: 'Grape leaves stuffed with fragrant rice, fresh herbs, and spices. A vegetarian favorite packed with authentic Turkish flavor.',
    category: 'mains',
    isVegetarian: true,
    isVegan: true,
    price: 4.00,
    preparationTime: '45 mins',
    servingSize: '4-5 pieces per person',
    popular: true,
    minOrder: 10
  },
  {
    id: 'lahana-sarma',
    name: 'Lahana Sarma',
    description: 'Cabbage rolls filled with seasoned ground beef and rice. Slow-cooked in a light tomato sauce for melt-in-your-mouth goodness.',
    category: 'mains',
    price: 5.00,
    preparationTime: '1 hour',
    servingSize: '3-4 pieces per person',
    minOrder: 10
  },
  {
    id: 'menemen',
    name: 'Menemen',
    description: 'Traditional Turkish scrambled eggs with fresh tomatoes, peppers, and spices. Served with bread on the side.',
    category: 'mains',
    isVegetarian: true,
    price: 6.00,
    preparationTime: '25 mins',
    servingSize: 'One portion per person',
    popular: true,
    minOrder: 10
  },
  {
    id: 'san-sebastian',
    name: 'San Sebastian Cheesecake',
    description: 'Rich, creamy, Basque-style cheesecake with a caramelized top—perfect for those with a sweet tooth.',
    category: 'desserts',
    isVegetarian: true,
    price: 6.50,
    preparationTime: '15 mins',
    servingSize: 'One slice per person',
    popular: true,
    minOrder: 10
  },
  {
    id: 'eclairs',
    name: 'Eclairs',
    description: 'Delicate choux pastries filled with silky cream and topped with a thin chocolate glaze—elegant and irresistible.',
    category: 'desserts',
    isVegetarian: true,
    price: 4.50,
    preparationTime: '15 mins',
    servingSize: '2 pieces per person',
    minOrder: 10
  },
  {
    id: 'baklava',
    name: 'Baklava',
    description: 'Classic Turkish dessert featuring layers of crispy phyllo, chopped nuts, and sweet syrup. A timeless treat.',
    category: 'desserts',
    isVegetarian: true,
    price: 5.00,
    preparationTime: '20 mins',
    servingSize: '2-3 pieces per person',
    popular: true,
    minOrder: 10
  },
  {
    id: 'cold-baklava',
    name: 'Cold Baklava',
    description: 'A chilled twist on the traditional baklava: light, creamy, and refreshingly sweet.',
    category: 'desserts',
    isVegetarian: true,
    price: 5.50,
    preparationTime: '20 mins',
    servingSize: '2 pieces per person',
    minOrder: 10
  }
];

export function CateringMenuNew() {
  const [selectedCategory, setSelectedCategory] = useState<'pastries' | 'mains' | 'desserts'>('pastries');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-cream py-16">
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
            {menuItems
              .filter(item => item.category === selectedCategory)
              .map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`
                    bg-white rounded-xl p-6 transition-all duration-300
                    ${hoveredItem === item.id ? 'shadow-xl -translate-y-1' : 'shadow-md'}
                    ${item.popular ? 'border-2 border-primary/10' : ''}
                  `}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-xl text-primary">
                      {item.name}
                      {item.popular && (
                        <span className="ml-2 inline-block">
                          <ChefHat size={20} className="text-primary-dark inline" />
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center gap-2">
                      {item.isVegan && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Vegan
                        </span>
                      )}
                      {item.isVegetarian && !item.isVegan && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Vegetarian
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{item.preparationTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{item.servingSize}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-primary-dark">
                        ${item.price.toFixed(2)} per person
                      </span>
                      <span className="text-gray-500 text-sm">
                        Min. {item.minOrder} people
                      </span>
                    </div>
                  </div>
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
