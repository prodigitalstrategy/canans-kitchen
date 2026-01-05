import { MapPin, Phone, Calendar, Clock, ExternalLink } from "lucide-react";
import { OPERATING_HOURS } from "../constants/operatingHours";
import { LiveStatus } from "./CTA/LiveStatus";
import { getTodayHours } from "../utils/operatingStatus";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Canan's+Kitchen+%26+Bakery,+16937+Bushard+St,+Fountain+Valley,+CA+92708";
const PHONE_NUMBER = "9493946318";

export function Contact() {
  const todayHours = getTodayHours();

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section 
      id="contact" 
      className="py-12 sm:py-16 md:py-20 bg-cream"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          id="contact-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-center text-charcoal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Visit Us Today
        </motion.h2>
        <motion.p
          className="text-center text-charcoal-light mb-8 sm:mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Experience the warmth of Turkish hospitality at Canan's Kitchen
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Location Card */}
          <motion.article
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col border-t-4 border-primary hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                <MapPin className="text-primary" size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                  Location
                </h3>
                <address className="text-charcoal-light not-italic mt-1 text-sm sm:text-base">
                  <p>16937 Bushard St</p>
                  <p>Fountain Valley, CA 92708</p>
                </address>
              </div>
            </div>
            
            <div className="mb-6">
              <LiveStatus variant="inline" />
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium shadow-md min-h-[48px]"
              aria-label="Get directions to Canan's Kitchen on Google Maps"
            >
              <MapPin size={18} aria-hidden="true" />
              Get Directions
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </motion.article>

          {/* Hours & Phone Card */}
          <motion.article
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col border-t-4 border-secondary hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-xl flex-shrink-0">
                <Phone className="text-secondary" size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                  Call Us
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-primary mt-1">
                  <a href={`tel:${PHONE_NUMBER}`} className="hover:underline">
                    (949) 394-6318
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-charcoal-light mb-4">
              <Clock size={16} aria-hidden="true" />
              <span>Today: <strong className="text-charcoal">{todayHours}</strong></span>
            </div>

            {/* Hours Table - Collapsible on mobile */}
            <details className="text-sm mb-4 group">
              <summary className="cursor-pointer text-primary font-medium list-none flex items-center gap-2 py-2 select-none">
                <span>View all hours</span>
                <svg 
                  className="w-4 h-4 transition-transform group-open:rotate-180" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-2 space-y-1.5 text-charcoal-light border-t border-gray-100 pt-3">
                {OPERATING_HOURS.map(({ day, hours }) => (
                  <div 
                    key={day} 
                    className="flex justify-between text-xs sm:text-sm"
                  >
                    <span className="font-medium">{day}</span>
                    <span className={hours === "Closed" ? "text-red-500" : ""}>{hours}</span>
                  </div>
                ))}
              </div>
            </details>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-secondary text-white rounded-xl hover:bg-secondary-dark transition-colors font-medium shadow-md min-h-[48px]"
              aria-label="Call Canan's Kitchen at (949) 394-6318"
            >
              <Phone size={18} aria-hidden="true" />
              Call Now
            </a>
          </motion.article>

          {/* Catering Card */}
          <motion.article
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col border-t-4 border-accent sm:col-span-2 lg:col-span-1 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent/20 rounded-xl flex-shrink-0">
                <Calendar className="text-accent-dark" size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                  Catering & Events
                </h3>
                <p className="text-charcoal-light mt-1 text-sm sm:text-base">
                  Perfect for any occasion
                </p>
              </div>
            </div>

            <p className="text-charcoal-light text-sm sm:text-base mb-6 leading-relaxed">
              From intimate gatherings to large celebrations, we bring the authentic taste of Türkiye to your event. Fresh pastries, traditional breakfast platters, and more.
            </p>

            <Link
              to="/catering"
              className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-charcoal rounded-xl hover:bg-accent-light transition-colors font-medium shadow-md min-h-[48px]"
              aria-label="View catering menu and services"
            >
              <Calendar size={18} aria-hidden="true" />
              View Catering Menu
            </Link>
          </motion.article>
        </motion.div>

        {/* Google Map Embed */}
        <motion.div
          className="mt-8 sm:mt-12 lg:mt-16 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 lg:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.6543!2d-117.9564!3d33.7213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQzJzE2LjciTiAxMTfCsDU3JzIzLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Canan's Kitchen location on Google Maps"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
