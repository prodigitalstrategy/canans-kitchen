import React from "react";
import { X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const menuItems = [
    { to: "#story", text: "Our Story", type: "section" },
    { to: "#menu", text: "Menu", type: "section" },
    { to: "#catering", text: "Catering", type: "section" },
    { to: "#blog", text: "Blog", type: "section" },
    { to: "#contact", text: "Contact", type: "section" },
  ];

  const handleClick = () => {
    setIsOpen(false);
  };

  const handleSectionClick = (e: React.MouseEvent, to: string) => {
    handleClick();

    if (isHomePage && to.startsWith("#")) {
      // On homepage, scroll to section
      const element = document.querySelector(to);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (!isHomePage && to.startsWith("#")) {
      // Not on homepage, navigate and then scroll
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

  const NavLink = ({
    to,
    type,
    children,
  }: {
    to: string;
    type: "section";
    children: React.ReactNode;
  }) => {
    return (
      <a
        href={to}
        className="text-lg lg:text-xl font-display hover:text-primary transition-colors tracking-wide"
        onClick={(e) => handleSectionClick(e, to)}
      >
        {children}
      </a>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12">
        {menuItems.map((item) => (
          <NavLink key={item.to} to={item.to} type={item.type}>
            {item.text}
          </NavLink>
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
              <div key={item.to} className="block px-6">
                <NavLink to={item.to} type={item.type}>
                  {item.text}
                </NavLink>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
