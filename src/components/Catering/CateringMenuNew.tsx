import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { cateringItems } from './cateringData';
import { CateringItem } from './CateringItem';

const PHONE_NUMBER = "9493946318";

export function CateringMenuNew() {
  const [selectedCategory, setSelectedCategory] = useState<'pastries' | 'mains' | 'desserts'>('pastries');

  return (
    <div className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent-dark rounded-full text-sm font-medium mb-4">
            <Calendar size={14} />
            Catering Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Bring Turkish Breakfast to Your Event
          </h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            From intimate gatherings to large celebrations, we bring the authentic taste of Türkiye to you
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="flex justify-center gap-3 mb-12">
          {['pastries', 'mains', 'desserts'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as any)}
              className={`
                px-6 py-3 rounded-full text-base font-medium transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-primary text-white shadow-warm'
                  : 'bg-white text-charcoal hover:bg-cream-dark border border-charcoal/10'}
              `}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {cateringItems
              .filter(item => item.category === selectedCategory)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <CateringItem item={item} />
                </motion.div>
              ))}
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
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-medium rounded-full hover:bg-cream-dark transition-colors border border-charcoal/10"
                >
                  Learn More
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
