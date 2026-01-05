import { Phone, Menu as MenuIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ContactInfoProps {
  onMenuClick?: () => void;
}

export function ContactInfo({ onMenuClick }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Desktop: Call Button */}
      <motion.a
        href="tel:9493946318"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md group"
      >
        <Phone size={18} className="group-hover:animate-bounce" />
        <span className="font-medium tracking-wide">
          (949) 394-6318
        </span>
      </motion.a>
      
      {/* Mobile: Hamburger Menu */}
      <button
        onClick={onMenuClick}
        className="md:hidden p-2.5 bg-primary text-white hover:bg-primary-dark rounded-xl transition-colors shadow-sm"
        aria-label="Toggle menu"
      >
        <MenuIcon size={24} />
      </button>
    </div>
  );
}
