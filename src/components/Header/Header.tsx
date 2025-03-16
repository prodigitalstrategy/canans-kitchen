import { useState } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { ContactInfo } from "./ContactInfo";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Logo />
        <Navigation isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        <ContactInfo onMenuClick={() => setIsMobileMenuOpen(true)} />
      </div>
    </header>
  );
}
