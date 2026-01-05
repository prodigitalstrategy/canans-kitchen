import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/canansktchen/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Follow us on Instagram"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.yelp.com/biz/canans-kitchen-and-bakery-fountain-valley"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-colors flex items-center gap-1"
          aria-label="Review us on Yelp"
        >
          <span className="font-medium">Yelp</span>
          <ExternalLink size={18} />
        </a>
      </div>
      <div className="space-y-2">
        <a
          href="mailto:info@cananskitchen.com"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
        >
          <Mail size={20} className="group-hover:text-white" />
          <span>info@cananskitchen.com</span>
        </a>
        <a
          href="tel:9493946318"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
        >
          <Phone size={20} className="group-hover:text-white" />
          <span>(949) 394-6318</span>
        </a>
        <a
          href="https://maps.google.com/?q=16937+Bushard+St,+Fountain+Valley,+CA+92708"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
        >
          <MapPin size={20} className="group-hover:text-white" />
          <span>16937 Bushard St, Fountain Valley, CA 92708</span>
        </a>
      </div>
    </div>
  );
}
