import React from "react";

export function QuickLinks() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <ul className="space-y-2">
        <li>
          <a
            href="#story"
            className="text-white/70 hover:text-white transition-colors"
          >
            Our Story
          </a>
        </li>
        <li>
          <a
            href="#menu"
            className="text-white/70 hover:text-white transition-colors"
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            className="text-white/70 hover:text-white transition-colors"
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className="text-white/70 hover:text-white transition-colors"
          >
            Blog
          </a>
        </li>
      </ul>
      <ul className="space-y-2">
        <li>
          <a
            href="#catering"
            className="text-white/70 hover:text-white transition-colors"
          >
            Catering
          </a>
        </li>
        <li>
          <a
            href="#reviews"
            className="text-white/70 hover:text-white transition-colors"
          >
            Reviews
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-white/70 hover:text-white transition-colors"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/privacy"
            className="text-white/70 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
        </li>
      </ul>
    </div>
  );
}
