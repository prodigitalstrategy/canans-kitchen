import { ChevronRight, X, Phone, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LiveStatus } from "../CTA/LiveStatus";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Canan's+Kitchen+%26+Bakery,+16937+Bushard+St,+Fountain+Valley,+CA+92708";

export function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const menuItems = [
    { to: "#story", text: "Our Story", type: "section" },
    { to: "#menu", text: "Menu", type: "section" },
    { to: "/catering", text: "Catering", type: "page" },
    { to: "#reviews", text: "Reviews", type: "section" },
    { to: "#contact", text: "Contact", type: "section" },
  ];

  const handleClick = () => {
    setIsOpen(false);
  };

  const handleSectionClick = (e: React.MouseEvent, to: string) => {
    handleClick();

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

  type NavLinkType = "section" | "page";

  const NavLink = ({
    to,
    type,
    children,
  }: {
    to: string;
    type: NavLinkType;
    children: React.ReactNode;
  }) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return type === "page" ? (
      <Link
        to={to}
        className={`
          group flex items-center gap-2 py-2 px-3 rounded-lg transition-all font-medium
          ${isMobile ? 'hover:bg-primary/5 text-lg' : 'hover:text-primary text-charcoal'}
          ${location.pathname === to ? 'text-primary' : ''}
        `}
        onClick={handleClick}
      >
        <span>{children}</span>
        {isMobile && (
          <ChevronRight 
            className="ml-auto text-charcoal-light/40 group-hover:text-primary transition-colors" 
            size={18} 
          />
        )}
      </Link>
    ) : (
      <a
        href={to}
        className={`
          group flex items-center gap-2 py-2 px-3 rounded-lg transition-all font-medium
          ${isMobile ? 'hover:bg-primary/5 text-lg' : 'hover:text-primary text-charcoal'}
          ${location.hash === to ? 'text-primary' : ''}
        `}
        onClick={(e) => handleSectionClick(e, to)}
      >
        <span>{children}</span>
        {isMobile && (
          <ChevronRight 
            className="ml-auto text-charcoal-light/40 group-hover:text-primary transition-colors" 
            size={18} 
          />
        )}
      </a>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {menuItems.map((item) => (
          <NavLink 
            key={item.to} 
            to={item.to} 
            type={item.type as NavLinkType}
          >
            {item.text}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-5 flex justify-between items-center border-b border-charcoal/10">
                <div>
                  <span className="font-display text-xl text-primary">Menu</span>
                  <div className="mt-1">
                    <LiveStatus variant="inline" />
                  </div>
                </div>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-charcoal/5 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-charcoal" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 py-4 px-2 overflow-y-auto">
                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <NavLink 
                      key={item.to} 
                      to={item.to} 
                      type={item.type as NavLinkType}
                    >
                      {item.text}
                    </NavLink>
                  ))}
                </div>
              </nav>

              {/* Footer CTAs */}
              <div className="p-5 border-t border-charcoal/10 space-y-3">
                <a
                  href="tel:+19493946318"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
                >
                  <Phone size={20} />
                  <span>Call (949) 394-6318</span>
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-secondary text-white rounded-xl hover:bg-secondary-dark transition-colors font-medium"
                >
                  <MapPin size={20} />
                  <span>Get Directions</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
