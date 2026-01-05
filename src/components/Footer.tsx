import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Canan's Kitchen</h3>
            <p className="text-primary-light">
              Bringing authentic Turkish breakfast and hospitality to Fountain Valley, CA.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-light hover:text-white">About Us</a></li>
              <li><a href="#menu" className="text-primary-light hover:text-white">Menu</a></li>
              <li><a href="#contact" className="text-primary-light hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-light hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-primary-light hover:text-white">
                <Instagram />
              </a>
              <a href="mailto:info@cananskitchen.com" className="text-primary-light hover:text-white">
                <Mail />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8 text-center text-primary-light">
          <p>&copy; {new Date().getFullYear()} Canan's Kitchen & Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );