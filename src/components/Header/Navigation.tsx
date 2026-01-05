import { ChevronRight, X, Phone, MapPin, Clock } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LiveStatus } from "../CTA/LiveStatus";
import { getTodayHours } from "../../utils/operatingStatus";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Canan's+Kitchen+%26+Bakery,+16937+Bushard+St,+Fountain+Valley,+CA+92708";

export function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const todayHours = getTodayHours();

  const menuItems = [
    { to: "#story", text: "Our Story", type: "section", icon: "📖" },
    { to: "#menu", text: "Menu", type: "section", icon: "🍽️" },
    { to: "/catering", text: "Catering", type: "page", icon: "🎉" },
    { to: "#reviews", text: "Reviews", type: "section", icon: "⭐" },
    { to: "#contact", text: "Contact", type: "section", icon: "📍" },
  ];

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSectionClick = (e: React.MouseEvent, to: string) => {
    handleClose();

    if (isHomePage && to.startsWith("#")) {
      const element = document.querySelector(to);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (!isHomePage && to.startsWith("#")) {
      e.preventDefault();
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(to);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  // Desktop NavLink
  const DesktopNavLink = ({ to, type, children }: { to: string; type: string; children: React.ReactNode }) => {
    const isActive = type === "page" ? location.pathname === to : location.hash === to;
    
    const className = `
      py-2 px-3 rounded-lg transition-all font-medium text-charcoal
      hover:text-primary hover:bg-primary/5
      ${isActive ? 'text-primary' : ''}
    `;

    return type === "page" ? (
      <Link to={to} className={className}>{children}</Link>
    ) : (
      <a href={to} className={className} onClick={(e) => handleSectionClick(e, to)}>{children}</a>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {menuItems.map((item) => (
          <DesktopNavLink key={item.to} to={item.to} type={item.type}>
            {item.text}
          </DesktopNavLink>
        ))}
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50 md:hidden"
              onClick={handleClose}
              aria-hidden="true"
            />
            
            {/* Menu Panel - Simple full-height div */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-screen w-[85vw] max-w-[320px] bg-white shadow-2xl z-[60] md:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-4 border-b border-charcoal/10 bg-white z-10">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="" className="h-10 w-auto" />
                  <div>
                    <p className="font-display text-lg text-primary">Canan's Kitchen</p>
                    <p className="text-xs text-charcoal-light">& Bakery</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-full hover:bg-charcoal/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-charcoal" />
                </button>
              </div>

              {/* Status Bar */}
              <div className="px-4 py-3 bg-cream/50 border-b border-charcoal/5">
                <LiveStatus variant="inline" />
              </div>

              {/* Navigation Links */}
              <nav className="py-4 px-3 bg-white">
                <div className="space-y-1">
                  {menuItems.map((item) => {
                    const isActive = item.type === "page" 
                      ? location.pathname === item.to 
                      : location.hash === item.to;
                    
                    const content = (
                      <>
                        <span className="text-2xl">{item.icon}</span>
                        <span className="flex-1 text-lg font-medium text-charcoal">{item.text}</span>
                        <ChevronRight size={20} className="text-charcoal-light/50" />
                      </>
                    );

                    const className = `
                      flex items-center gap-4 py-4 px-4 rounded-xl transition-all
                      ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-cream'}
                    `;

                    return item.type === "page" ? (
                      <Link 
                        key={item.to} 
                        to={item.to} 
                        className={className} 
                        onClick={handleClose}
                      >
                        {content}
                      </Link>
                    ) : (
                      <a 
                        key={item.to} 
                        href={item.to} 
                        className={className} 
                        onClick={(e) => handleSectionClick(e, item.to)}
                      >
                        {content}
                      </a>
                    );
                  })}
                </div>
              </nav>

              {/* Footer with CTAs */}
              <div className="p-4 border-t border-charcoal/10 bg-cream/30">
                {/* Today's Hours */}
                <div className="flex items-center gap-2 text-sm text-charcoal-light mb-4">
                  <Clock size={16} />
                  <span>Today: {todayHours}</span>
                </div>
                
                {/* Call Button */}
                <a
                  href="tel:+19493946318"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-semibold text-lg shadow-lg shadow-primary/20 mb-3"
                >
                  <Phone size={22} />
                  <span>Call Now</span>
                </a>
                
                {/* Directions Button */}
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 bg-white border-2 border-charcoal/20 text-charcoal rounded-xl hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  <MapPin size={20} />
                  <span>Get Directions</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
