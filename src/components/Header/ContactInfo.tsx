import React from "react";
import { Phone, Menu as MenuIcon } from "lucide-react";

interface ContactInfoProps {
  onMenuClick?: () => void;
}

export function ContactInfo({ onMenuClick }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-4">

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
