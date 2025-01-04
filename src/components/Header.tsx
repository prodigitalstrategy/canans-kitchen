import React from 'react';
import { Menu, Phone, Clock } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-2xl font-serif font-bold text-primary">Canan's</a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#menu" className="hover:text-primary">Menu</a>
          <a href="#blog" className="hover:text-primary">Blog</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:9493946318" className="hidden md:flex items-center gap-2 text-primary">
            <Phone size={18} />
            (949) 394-6318
          </a>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );