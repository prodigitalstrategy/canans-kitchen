import React from "react";
import { Phone, Menu as MenuIcon } from "lucide-react";

interface ContactInfoProps {
  onMenuClick?: () => void;
}

export function ContactInfo({ onMenuClick }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-4">
      <a
        href="tel:9493946318"
        className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
      >
        <Phone size={20} className="text-primary-dark" />
        <span className="text-lg lg:text-xl font-display tracking-wide">
          (949) 394-6318
        </span>
      </a>
      <button
        onClick={onMenuClick}
        className="md:hidden p-2.5 bg-primary text-white hover:bg-primary-dark rounded-lg transition-colors shadow-sm"
        aria-label="Toggle menu"
      >
        <MenuIcon size={24} />
      </button>
    </div>
  );
}
