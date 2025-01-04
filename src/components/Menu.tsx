import React from 'react';
import { Coffee, Leaf } from 'lucide-react';

const menuItems = [
  {
    name: "Turkish Breakfast Plate",
    description: "A traditional spread with eggs, cheese, olives, tomatoes, cucumbers, and fresh bread",
    price: "$18.99",
    dietary: ["Vegetarian option available"],
  },
  {
    name: "Menemen",
    description: "Scrambled eggs with tomatoes, peppers, and spices",
    price: "$14.99",
    dietary: ["Vegetarian"],
  },
  {
    name: "Sujuk Omelette",
    description: "Turkish-style omelette with spiced beef sausage",
    price: "$16.99",
  },
  {
    name: "Avocado Toast",
    description: "Sourdough bread with mashed avocado, poached eggs, and za'atar",
    price: "$15.99",
    dietary: ["Vegetarian"],
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-2 text-center text-primary">Our Menu</h2>
        <p className="text-center mb-12 text-gray-600">Experience authentic Turkish breakfast delights</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-secondary/20">
              <h3 className="text-xl font-bold mb-2 text-primary-dark">{item.name}</h3>
              <p className="text-gray-600 mb-3">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">{item.price}</span>
                {item.dietary && (
                  <div className="flex items-center gap-2">
                    {item.dietary.includes("Vegetarian") && (
                      <Leaf size={16} className="text-secondary" />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            This is just a taste of what we offer. Visit us to explore our full menu!
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Coffee size={20} />
            Join Us for Breakfast
          </a>
        </div>
      </div>
    </section>
  );