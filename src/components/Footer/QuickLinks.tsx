import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function QuickLinks() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    const scrollToSection = () => {
      const element = document.querySelector(sectionId);
      if (element) {
        const headerOffset = 100; // Account for fixed header and some padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (isHomePage) {
      scrollToSection();
    } else {
      navigate("/");
      setTimeout(scrollToSection, 100);
    }
  };

  const linkClass = "text-white/70 hover:text-white transition-colors";

  return (
    <div className="grid grid-cols-2 gap-8">
      <ul className="space-y-2">
        <li>
          <a
            href="#story"
            className={linkClass}
            onClick={handleClick("#story")}
          >
            Our Story
          </a>
        </li>
        <li>
          <a href="#menu" className={linkClass} onClick={handleClick("#menu")}>
            Menu
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            className={linkClass}
            onClick={handleClick("#gallery")}
          >
            Gallery
          </a>
        </li>
        <li>
          <a href="#blog" className={linkClass} onClick={handleClick("#blog")}>
            Blog
          </a>
        </li>
      </ul>
      <ul className="space-y-2">
        <li>
          <a
            href="#homepage-catering"
            className={linkClass}
            onClick={handleClick("#homepage-catering")}
          >
            Catering
          </a>
        </li>
        <li>
          <a
            href="#reviews"
            className={linkClass}
            onClick={handleClick("#reviews")}
          >
            Reviews
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={linkClass}
            onClick={handleClick("#contact")}
          >
            Contact
          </a>
        </li>
        <li>
          <Link to="/privacy" className={linkClass}>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
}
