import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function Story() {
  return (
    <section id="story" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            From Dream to Reality
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-charcoal-light text-lg leading-relaxed">
              Canan's Kitchen is more than just a café—it's a heartfelt
              journey that began with my childhood memories, my mother's
              inspiration, and my own lovingly crafted recipes. Here, I share
              the warmth of a true Turkish breakfast, along with handmade
              pastries and simit that feel like home.
            </p>
            <p className="text-charcoal-light text-lg leading-relaxed">
              Every dish tells a story; every plate carries a piece of my heart.
              The kind words from my customers have been my greatest source of
              motivation. Whenever someone says, "You can taste the love in
              your food," I know I'm right where I'm meant to be.
            </p>

            <div className="pt-4">
              <h3 className="font-display text-2xl text-charcoal mb-4">
                A Journey That Started at Home
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                What began as cooking for friends and family slowly grew into a
                joyful profession. In those early days, I worked out of my own
                kitchen, carefully preparing each meal from scratch before
                packing it up and sending it off. It wasn't just about
                cooking—it was about sharing stories through food.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-display text-2xl text-charcoal mb-4">
                Canan's Door to the Kitchen
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                I've been drawn to the kitchen since I was ten years old. In my
                eyes, cooking has never been just a task; it's a passion. I
                would watch my mother cook with awe and admiration, soaking up
                her gentle touches, thoughtful details, and the love she poured
                into every meal.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <a
                href="tel:9493946318"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors shadow-warm hover:shadow-warm-lg"
              >
                <Phone size={18} />
                Come Visit Us
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/canan-cooking.jpg"
                alt="Canan in her kitchen"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full bg-primary/10 rounded-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
