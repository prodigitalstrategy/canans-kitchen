import React from "react";
import { ChevronRight, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  openOrderModal: (itemName: string) => void;
}

export function Navigation({ isOpen, setIsOpen, openOrderModal }: NavigationProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const menuItems = [
    { to: "#story", text: "Our Story", type: "section" },
    { to: "#menu", text: "Menu", type: "section" },
    { to: "/catering", text: "Catering", type: "page" },
    { to: "#blog", text: "Blog", type: "section" },
    { to: "#contact", text: "Contact", type: "section" },
  ];

  // Order Online button (as nav item)
  const orderButton = (
    <button
      key="order-online"
      onClick={() => openOrderModal("")}
      className="ml-2 px-5 py-2 rounded-lg bg-primary text-white font-bold shadow hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
      aria-label="Order Online (Pickup & Delivery)"
      tabIndex={0}
      type="button"
    >
      Order Online
    </button>
  );

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
    children
  }: {
    to: string;
    type: NavLinkType;
    children: React.ReactNode;
  }) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return type === "page" ? (
      <motion.div
        className="inline-block"
        whileHover={{ x: isMobile ? 8 : 0 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          to={to}
          className={`
            group flex items-center gap-3 py-3 px-4 rounded-lg transition-all
            ${isMobile ? 'hover:bg-primary/5' : 'hover:text-primary'}
            ${location.pathname === to ? 'text-primary' : 'text-gray-800'}
          `}
          onClick={handleClick}
        >
          
          <span className="text-lg font-medium">{children}</span>
          {isMobile && (
            <ChevronRight 
              className="ml-auto text-gray-400 group-hover:text-primary transition-colors" 
              size={18} 
            />
          )}
        </Link>
      </motion.div>
    ) : (
      <motion.a
        href={to}
        className={`
          group flex items-center gap-3 py-3 px-4 rounded-lg transition-all
          ${isMobile ? 'hover:bg-primary/5' : 'hover:text-primary'}
          ${location.hash === to ? 'text-primary' : 'text-gray-800'}
        `}
        onClick={(e) => handleSectionClick(e, to)}
        whileHover={{ x: isMobile ? 8 : 0 }}
        whileTap={{ scale: 0.98 }}
      >
        
        <span className="text-lg font-medium">{children}</span>
        {isMobile && (
          <ChevronRight 
            className="ml-auto text-gray-400 group-hover:text-primary transition-colors" 
            size={18} 
          />
        )}
      </motion.a>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Main Navigation">
        {menuItems.map((item) => (
          <NavLink 
            key={item.to} 
            to={item.to} 
            type={item.type as NavLinkType}
          >
            {item.text}
          </NavLink>
        ))}
        {orderButton}
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 flex justify-between items-center border-b border-gray-100 bg-white">
                <span className="text-xl font-display font-semibold text-primary">
                  Menu
                </span>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Menu Items */}
              <nav className="py-4 bg-white" aria-label="Mobile Navigation">
                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <NavLink 
                      key={item.to} 
                      to={item.to} 
                      type={item.type as NavLinkType}
                      icon={item.icon}
                    >
                      {item.text}
                    </NavLink>
                  ))}
                  <div className="mt-4 flex justify-center">
                    {orderButton}
                  </div>
                </div>
              </nav>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-white">
                <a
                  href="tel:+19493946318"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  <span className="text-lg">Call Us</span>
                  <span className="font-medium">(949) 394-6318</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
