import { Coffee, Clock, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Coffee,
    title: "Authentic Turkish Breakfast",
    description:
      "Experience the rich flavors of traditional Turkish breakfast, from freshly baked simit to homemade jams and cheeses.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description:
      "Every dish is prepared fresh daily using carefully selected ingredients and time-honored recipes from Türkiye.",
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Award,
    title: "Family Recipes",
    description:
      "Savor dishes crafted from cherished family recipes, passed down through generations with love and care.",
    color: "bg-accent/20",
    iconColor: "text-accent-dark",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Each plate is prepared with care and attention to detail, bringing the warmth of Turkish hospitality to California.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
];

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section 
      id="features" 
      className="py-12 sm:py-16 md:py-20 bg-cream"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            id="features-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The Canan's Kitchen Difference
          </motion.h2>
        </div>

        {/* Features Grid - 2 columns on mobile, 4 on desktop */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-accent"
            >
              {/* Icon */}
              <div 
                className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon 
                  className={feature.iconColor} 
                  size={20} 
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold mb-1.5 sm:mb-2 text-charcoal leading-tight">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed line-clamp-3 sm:line-clamp-none">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
