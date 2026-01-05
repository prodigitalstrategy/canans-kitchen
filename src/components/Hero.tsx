import { Phone, MapPin, Calendar, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LiveStatus } from "./CTA/LiveStatus";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Canan's+Kitchen+%26+Bakery,+16937+Bushard+St,+Fountain+Valley,+CA+92708";
const PHONE_NUMBER = "9493946318";

export function Hero() {
  const scrollToContent = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-[100svh] flex"
      aria-label="Welcome to Canan's Kitchen"
    >
      {/* Full-width background image with lazy loading consideration */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero-image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label="Canan's Kitchen restaurant ambiance"
      >
        {/* Dark gradient overlay for text readability on light background */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/70" />
      </div>

      {/* Content - Mobile optimized with proper padding */}
      <div className="container mx-auto px-4 sm:px-6 z-10 flex items-center pt-24 sm:pt-28 pb-16">
        <div className="max-w-4xl w-full">
          {/* Live Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 sm:mb-6"
          >
            <LiveStatus variant="badge" />
          </motion.div>

          {/* Main Heading - Responsive sizing */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-normal text-white text-shadow-lg tracking-wide leading-tight"
          >
            Canan's Kitchen
          </motion.h1>
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2 font-display italic text-cream/90"
          >
            & Bakery
          </motion.span>

          {/* Tagline - Mobile optimized */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 mb-6 sm:mb-8 text-white/90 max-w-2xl text-shadow font-sans leading-relaxed"
          >
            A Taste of Türkiye in California — Experience authentic Turkish
            breakfast and homemade pastries in a warm, family atmosphere.
          </motion.p>

          {/* Primary CTAs - Stack on mobile, row on tablet+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6"
          >
            {/* Call Now - Primary CTA with minimum touch target */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 text-base sm:text-lg font-medium bg-primary text-white rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary min-h-[48px]"
              aria-label="Call Canan's Kitchen at (949) 394-6318"
            >
              <Phone size={20} className="flex-shrink-0" aria-hidden="true" />
              <span>Call (949) 394-6318</span>
            </a>

            {/* Get Directions */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 text-base sm:text-lg font-medium bg-white/10 backdrop-blur text-white rounded-full hover:bg-white/20 transition-all border border-white/30 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white min-h-[48px]"
              aria-label="Get directions to Canan's Kitchen"
            >
              <MapPin size={20} className="flex-shrink-0" aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          </motion.div>

          {/* Secondary CTA - Catering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="/catering"
              className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors group py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent rounded-lg"
              aria-label="Explore catering services for your event"
            >
              <Calendar size={18} aria-hidden="true" />
              <span className="font-medium text-sm sm:text-base">Planning an event? Explore our catering services</span>
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </Link>
          </motion.div>

          {/* Location Info - Hidden on very small screens */}
          <motion.address
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 sm:mt-12 flex items-center gap-2 text-white/70 not-italic text-sm sm:text-base"
          >
            <MapPin size={16} aria-hidden="true" />
            <span>16937 Bushard St, Fountain Valley, CA</span>
          </motion.address>
        </div>
      </div>

      {/* Scroll indicator - Hidden on very small screens */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors z-10 p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-full hidden sm:block"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={32} aria-hidden="true" />
        </motion.div>
      </motion.button>
    </section>
  );
}
