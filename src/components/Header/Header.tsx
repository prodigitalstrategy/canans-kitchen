import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { ContactInfo } from "./ContactInfo";
import { useOrderModal } from "../Menu/OrderModalWrapper";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal, modal } = useOrderModal();

  return (
    <header className="fixed w-full bg-white border-b border-gray-200 shadow-md z-50" aria-label="Site Header">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo always links home */}
        <Link to="/" aria-label="Home">
          <Logo />
        </Link>
        <Navigation isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} openOrderModal={() => openModal("")} />
        {/* Hamburger menu button visible only on mobile */}
        <div className="flex md:hidden items-center gap-4">
          <ContactInfo onMenuClick={() => setIsMobileMenuOpen(true)} />
        </div>
        {/* Desktop contact info (if any) */}
        <div className="hidden md:flex items-center gap-6">
          <ContactInfo onMenuClick={() => setIsMobileMenuOpen(true)} />
        </div>
      </div>
      {modal}
    </header>
  );
}
