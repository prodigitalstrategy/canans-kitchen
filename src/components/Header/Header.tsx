import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { ContactInfo } from "./ContactInfo";
import { LiveStatus } from "../CTA/LiveStatus";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`
        fixed w-full bg-white/95 backdrop-blur-md z-50 transition-shadow duration-300
        ${isScrolled ? "shadow-md" : "shadow-sm"}
      `}
      role="banner"
    >
      <div className="container mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <Logo />
          {/* Live Status - Desktop only */}
          <div className="hidden lg:block">
            <LiveStatus variant="inline" />
          </div>
        </div>
        <Navigation isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        <ContactInfo onMenuClick={() => setIsMobileMenuOpen(true)} />
      </div>
    </header>
  );
}
