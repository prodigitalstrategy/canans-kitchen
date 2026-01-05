import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { getOperatingStatus, OperatingStatus } from "../../utils/operatingStatus";
import { motion } from "framer-motion";

interface LiveStatusProps {
  variant?: "badge" | "inline" | "compact";
  showIcon?: boolean;
}

export function LiveStatus({ variant = "badge", showIcon = true }: LiveStatusProps) {
  const [status, setStatus] = useState<OperatingStatus>(getOperatingStatus());

  useEffect(() => {
    // Update immediately
    setStatus(getOperatingStatus());

    // Update every minute
    const interval = setInterval(() => {
      setStatus(getOperatingStatus());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColors = () => {
    switch (status.statusType) {
      case "open":
        return {
          bg: "bg-green-500",
          text: "text-green-500",
          dot: "bg-green-400",
          border: "border-green-500/20",
        };
      case "closing-soon":
        return {
          bg: "bg-amber-500",
          text: "text-amber-600",
          dot: "bg-amber-400",
          border: "border-amber-500/20",
        };
      case "opening-soon":
        return {
          bg: "bg-blue-500",
          text: "text-blue-600",
          dot: "bg-blue-400",
          border: "border-blue-500/20",
        };
      default:
        return {
          bg: "bg-red-500",
          text: "text-red-500",
          dot: "bg-red-400",
          border: "border-red-500/20",
        };
    }
  };

  const colors = getStatusColors();

  // Badge variant - for hero section
  if (variant === "badge") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`
          inline-flex items-center gap-2 px-4 py-2 rounded-full 
          ${colors.bg} text-white text-sm sm:text-base font-medium 
          shadow-lg shadow-${colors.bg}/25
        `}
        role="status"
        aria-live="polite"
      >
        {showIcon && (
          <span className="relative flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors.dot} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 bg-white`}></span>
          </span>
        )}
        <span>{status.statusText}</span>
      </motion.div>
    );
  }

  // Inline variant - for header
  if (variant === "inline") {
    return (
      <div
        className={`
          inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
          bg-white border ${colors.border} text-sm font-medium
        `}
        role="status"
        aria-live="polite"
      >
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors.dot} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${colors.bg}`}></span>
        </span>
        <span className={colors.text}>{status.isOpen ? "Open Now" : "Closed"}</span>
      </div>
    );
  }

  // Compact variant - minimal
  return (
    <div
      className={`
        inline-flex items-center gap-1.5 text-sm font-medium ${colors.text}
      `}
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors.dot} opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${colors.bg}`}></span>
      </span>
      <span>{status.isOpen ? "Open" : "Closed"}</span>
    </div>
  );
}
