import { Link, useLocation } from "react-router-dom";

export function Logo() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      to="/"
      onClick={handleClick}
      className="flex items-center group"
    >
      <img 
        src="/logo.png" 
        alt="Canan's Kitchen & Bakery" 
        className="h-12 w-auto transition-transform group-hover:scale-105"
      />
    </Link>
  );
}
