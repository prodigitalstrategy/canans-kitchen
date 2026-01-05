import { SocialLinks } from "./SocialLinks";
import { QuickLinks } from "./QuickLinks";
import { Clock, Phone, MapPin, Heart } from "lucide-react";
import { OPERATING_HOURS } from "../../constants/operatingHours";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PHONE_NUMBER = "9493946318";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Canan's+Kitchen+%26+Bakery,+16937+Bushard+St,+Fountain+Valley,+CA+92708";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-charcoal text-white pt-12 sm:pt-16 pb-20 sm:pb-8"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <motion.div
            className="col-span-2 lg:col-span-1 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white hover:text-primary transition-colors">
                Canan's Kitchen
              </h2>
              <span className="text-white/60 text-sm">& Bakery</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Bringing authentic Turkish breakfast and hospitality to Fountain
              Valley, CA. Experience the warmth of Turkish culture through our
              delicious food.
            </p>
            <SocialLinks />
          </motion.div>

          {/* Hours Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-display font-semibold text-white flex items-center gap-2">
              <Clock size={18} className="text-primary" aria-hidden="true" />
              Hours
            </h3>
            <div className="space-y-1.5 text-xs sm:text-sm">
              {OPERATING_HOURS.map(({ day, hours }) => (
                <div 
                  key={day} 
                  className="flex justify-between gap-2"
                >
                  <span className="text-white/80 truncate">{day}</span>
                  <span className={`text-right ${hours === "Closed" ? "text-red-400" : "text-white/60"}`}>
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-base sm:text-lg font-display font-semibold text-white">
              Quick Links
            </h3>
            <QuickLinks />
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-base sm:text-lg font-display font-semibold text-white">
              Get in Touch
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-sm group"
              >
                <Phone size={16} className="text-primary flex-shrink-0" aria-hidden="true" />
                <span className="group-hover:underline">(949) 394-6318</span>
              </a>
              <a 
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/80 hover:text-primary transition-colors text-sm group"
              >
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic group-hover:underline">
                  16937 Bushard St<br />
                  Fountain Valley, CA 92708
                </address>
              </a>
            </div>

            {/* CTA Button */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-md text-sm font-medium min-h-[44px]"
              aria-label="Call Canan's Kitchen"
            >
              <Phone size={18} aria-hidden="true" />
              Call Us
            </a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/60 text-xs sm:text-sm">
            <p>
              © {currentYear} Canan's Kitchen & Bakery. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5">
              Made with <Heart size={14} className="text-primary fill-primary" aria-hidden="true" /> in Fountain Valley, CA
            </p>
          </div>
          
          {/* Legal Links */}
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-white/50">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
