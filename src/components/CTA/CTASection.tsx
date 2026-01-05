import { Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LiveStatus } from "./LiveStatus";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Canan's+Kitchen+%26+Bakery,+16937+Bushard+St,+Fountain+Valley,+CA+92708";
const PHONE_NUMBER = "9493946318";

interface CTASectionProps {
  variant?: "standard" | "compact" | "catering";
  title?: string;
  subtitle?: string;
  showStatus?: boolean;
  className?: string;
}

export function CTASection({
  variant = "standard",
  title = "Ready to Experience Turkish Hospitality?",
  subtitle = "Join us for an authentic breakfast experience or plan your next event",
  showStatus = true,
  className = "",
}: CTASectionProps) {
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={`py-12 ${className}`}
      >
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-10 text-white text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl mb-3">{title}</h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">{subtitle}</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-cream transition-colors shadow-lg hover:shadow-xl"
                >
                  <Phone size={18} />
                  Call (949) 394-6318
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "catering") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={`py-16 bg-secondary/10 ${className}`}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-dark rounded-full text-sm font-medium mb-4">
              Catering Services
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-charcoal mb-4">
              Planning a Special Event?
            </h3>
            <p className="text-charcoal-light mb-8">
              Let us bring the authentic Turkish breakfast experience to your gathering. 
              From intimate brunches to large corporate events, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone size={20} />
                Call for Catering
              </a>
              <Link
                to="/catering"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-medium rounded-full hover:bg-cream-dark transition-all border border-charcoal/10 shadow-sm hover:shadow-md"
              >
                View Catering Menu
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard variant
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`py-20 bg-cream-dark ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {showStatus && (
            <div className="flex justify-center mb-6">
              <LiveStatus variant="badge" />
            </div>
          )}
          
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            {title}
          </h2>
          <p className="text-lg text-charcoal-light mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {/* Call CTA */}
            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center gap-3 p-6 bg-primary text-white rounded-2xl shadow-warm hover:shadow-warm-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Phone size={24} />
              </div>
              <span className="font-display text-xl">Call Us</span>
              <span className="text-white/80 text-sm">(949) 394-6318</span>
            </motion.a>

            {/* Visit CTA */}
            <motion.a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center gap-3 p-6 bg-secondary text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <span className="font-display text-xl">Visit Us</span>
              <span className="text-white/80 text-sm">Get Directions</span>
            </motion.a>

            {/* Catering CTA */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/catering"
                className="flex flex-col items-center gap-3 p-6 bg-accent text-charcoal rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full"
              >
                <div className="w-14 h-14 bg-charcoal/10 rounded-full flex items-center justify-center">
                  <Calendar size={24} />
                </div>
                <span className="font-display text-xl">Catering</span>
                <span className="text-charcoal-light text-sm">Plan Your Event</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

