import { ReviewCard } from './ReviewCard';
import { reviews } from './reviewsData';
import { ExternalLink, Phone, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent-dark rounded-full text-sm font-medium mb-4">
            <Star size={14} className="fill-accent" />
            5-Star Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            What Our Guests Say
          </h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from our happy customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <a 
            href="https://www.yelp.com/biz/canans-kitchen-and-bakery-fountain-valley" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium"
          >
            See More Reviews on Yelp
            <ExternalLink size={18} />
          </a>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-2xl p-8 md:p-10 text-white text-center relative overflow-hidden max-w-4xl mx-auto"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl mb-3">
              Join Our Happy Guests
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Experience the warmth of Turkish hospitality that keeps our guests coming back.
            </p>
            
            <a
              href="tel:9493946318"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-medium rounded-full hover:bg-cream transition-colors shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              Call (949) 394-6318
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
