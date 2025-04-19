import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { ContactInfo } from "./ContactInfo";

interface HeaderProps {
  openOrderModal: (itemName: string) => void;
}

export function Header({ openOrderModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white border-b border-gray-200 shadow-lg z-50" aria-label="Site Header">
      <div className="w-full max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo always links home */}
        <Logo />
        <Navigation isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} openOrderModal={openOrderModal} />
        {/* Hamburger menu button visible only on mobile */}
        <div className="flex md:hidden items-center gap-4">
          <ContactInfo onMenuClick={() => setIsMobileMenuOpen(true)} />
        </div>
        {/* Desktop contact info (if any) */}
        <div className="hidden md:flex items-center gap-6">
          <ContactInfo onMenuClick={() => setIsMobileMenuOpen(true)} />
        </div>
      </div>
    </header>
  );
}
