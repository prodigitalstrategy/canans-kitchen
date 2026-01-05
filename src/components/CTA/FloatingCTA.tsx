import { useState, useEffect } from "react";
import { Phone, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Canan's+Kitchen+%26+Bakery,+16937+Bushard+St,+Fountain+Valley,+CA+92708";
const PHONE_NUMBER = "9493946318";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 60vh for mobile)
      const scrollThreshold = window.innerHeight * 0.6;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const actions = [
    {
      id: "call",
      icon: Phone,
      label: "Call",
      ariaLabel: "Call Canan's Kitchen at (949) 394-6318",
      href: `tel:${PHONE_NUMBER}`,
      color: "bg-primary",
      hoverColor: "hover:bg-primary-dark",
      isExternal: false,
      isLink: false,
    },
    {
      id: "directions",
      icon: MapPin,
      label: "Visit",
      ariaLabel: "Get directions to Canan's Kitchen",
      href: GOOGLE_MAPS_URL,
      color: "bg-secondary",
      hoverColor: "hover:bg-secondary-dark",
      isExternal: true,
      isLink: false,
    },
    {
      id: "catering",
      icon: Calendar,
      label: "Cater",
      ariaLabel: "View catering menu",
      href: "/catering",
      color: "bg-accent",
      hoverColor: "hover:bg-accent-dark",
      isExternal: false,
      isLink: true,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile: Bottom bar - safe area aware */}
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom"
            role="navigation"
            aria-label="Quick actions"
          >
            <div className="bg-white/98 backdrop-blur-lg border-t border-charcoal/10 px-4 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-lg">
              <div className="flex items-center justify-around gap-2 max-w-sm mx-auto">
                {actions.map((action) => {
                  const ButtonContent = (
                    <>
                      <action.icon size={22} strokeWidth={2} />
                      <span className="text-xs font-semibold mt-0.5">{action.label}</span>
                    </>
                  );

                  const className = `
                    flex flex-col items-center justify-center gap-0.5 
                    min-w-[72px] min-h-[56px] px-4 py-2 rounded-xl
                    text-white transition-all duration-200 
                    active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                    ${action.color} ${action.hoverColor}
                    ${action.id === "catering" ? "text-charcoal" : ""}
                  `;

                  if (action.isLink) {
                    return (
                      <Link
                        key={action.id}
                        to={action.href}
                        className={className}
                        aria-label={action.ariaLabel}
                      >
                        {ButtonContent}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={action.id}
                      href={action.href}
                      target={action.isExternal ? "_blank" : undefined}
                      rel={action.isExternal ? "noopener noreferrer" : undefined}
                      className={className}
                      aria-label={action.ariaLabel}
                    >
                      {ButtonContent}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.nav>

          {/* Desktop: Side floating buttons */}
          <motion.nav
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-4 lg:right-6 bottom-1/3 z-50 hidden md:flex flex-col gap-3"
            role="navigation"
            aria-label="Quick actions"
          >
            {actions.map((action, index) => {
              const className = `
                group relative flex items-center justify-center 
                w-14 h-14 rounded-full shadow-lg
                transition-all duration-200 hover:shadow-xl hover:scale-110
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                ${action.color} ${action.hoverColor}
                ${action.id === "call" ? "animate-pulse-soft" : ""}
                ${action.id === "catering" ? "text-charcoal" : "text-white"}
              `;

              const content = (
                <>
                  <action.icon size={24} strokeWidth={2} />
                  {/* Tooltip */}
                  <span className="
                    absolute right-full mr-3 top-1/2 -translate-y-1/2
                    px-3 py-2 rounded-lg bg-charcoal text-white text-sm font-medium
                    opacity-0 group-hover:opacity-100 group-focus:opacity-100
                    transition-opacity whitespace-nowrap pointer-events-none
                    shadow-lg
                  ">
                    {action.ariaLabel}
                  </span>
                </>
              );

              if (action.isLink) {
                return (
                  <motion.div
                    key={action.id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={action.href}
                      className={className}
                      aria-label={action.ariaLabel}
                    >
                      {content}
                    </Link>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={action.id}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={action.href}
                    target={action.isExternal ? "_blank" : undefined}
                    rel={action.isExternal ? "noopener noreferrer" : undefined}
                    className={className}
                    aria-label={action.ariaLabel}
                  >
                    {content}
                  </a>
                </motion.div>
              );
            })}
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
