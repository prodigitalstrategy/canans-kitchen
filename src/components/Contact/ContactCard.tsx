import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
    external?: boolean;
  };
  variant?: "primary" | "secondary" | "accent";
  children?: ReactNode;
}

export function ContactCard({
  icon,
  title,
  description,
  action,
  variant = "primary",
  children,
}: ContactCardProps) {
  const variantStyles = {
    primary: {
      bg: "bg-primary",
      iconBg: "bg-white/20",
      text: "text-white",
      textMuted: "text-white/80",
      button: "bg-white text-primary hover:bg-cream",
    },
    secondary: {
      bg: "bg-secondary",
      iconBg: "bg-white/20",
      text: "text-white",
      textMuted: "text-white/80",
      button: "bg-white text-secondary hover:bg-cream",
    },
    accent: {
      bg: "bg-accent",
      iconBg: "bg-charcoal/10",
      text: "text-charcoal",
      textMuted: "text-charcoal-light",
      button: "bg-charcoal text-white hover:bg-charcoal-light",
    },
  };

  const styles = variantStyles[variant];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`
        relative overflow-hidden rounded-2xl p-8 h-full
        ${styles.bg}
        shadow-lg hover:shadow-xl transition-shadow
      `}
    >
      {/* Decorative circle */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <div className={`w-14 h-14 ${styles.iconBg} rounded-xl flex items-center justify-center mb-5`}>
          {icon}
        </div>

        {/* Title */}
        <h3 className={`font-display text-2xl ${styles.text} mb-2`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`${styles.textMuted} mb-4 flex-grow`}>
          {description}
        </p>

        {/* Custom content (like hours or status) */}
        {children && (
          <div className="mb-6">
            {children}
          </div>
        )}

        {/* Action button */}
        {action.external ? (
          <a
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
              font-medium transition-all hover:shadow-lg
              ${styles.button}
            `}
          >
            {action.label}
            <ArrowRight size={18} />
          </a>
        ) : (
          <a
            href={action.href}
            className={`
              inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
              font-medium transition-all hover:shadow-lg
              ${styles.button}
            `}
          >
            {action.label}
            <ArrowRight size={18} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

