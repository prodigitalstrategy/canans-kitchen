import React from "react";
import { X } from "lucide-react";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  const menuItems = [
    { href: "#story", text: "Our Story" },
    { href: "#menu", text: "Menu" },
    { href: "#catering", text: "Catering" },
    { href: "#blog", text: "Blog" },
    { href: "#contact", text: "Contact" },
  ];

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-lg lg:text-xl font-display hover:text-primary transition-colors tracking-wide"
          >
            {item.text}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 md:hidden
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`
            fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 flex justify-between items-center border-b">
            <span className="text-xl font-display font-semibold">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="py-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className="block px-6 py-3 text-lg font-display hover:bg-gray-50 hover:text-primary transition-colors"
              >
                {item.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
