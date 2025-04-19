import { useState } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { ContactInfo } from "./ContactInfo";
import { useOrderModal } from "../Menu/OrderModalWrapper";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal, modal } = useOrderModal();

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50" aria-label="Site Header">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo always links home */}
        <a href="/" aria-label="Home">
          <Logo />
        </a>
        <Navigation isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} openOrderModal={() => openModal("")} />
        <div className="hidden md:flex items-center gap-6">
          <ContactInfo onMenuClick={() => setIsMobileMenuOpen(true)} />
        </div>
        {/* On mobile, only ContactInfo (menu button) is visible */}
      </div>
      {modal}
    </header>
  );
}
