/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
        display: ["Instrument Serif", "Georgia", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#C4562A",
          dark: "#A84520",
          light: "#D97B56",
        },
        secondary: {
          DEFAULT: "#6B7B3D",
          dark: "#556330",
          light: "#8A9B5C",
        },
        accent: {
          DEFAULT: "#D4A84B",
          dark: "#B8923F",
          light: "#E5C77A",
        },
        cream: {
          DEFAULT: "#FDF6EE",
          dark: "#F5EBD9",
          light: "#FFFAF5",
        },
        charcoal: {
          DEFAULT: "#2C2825",
          light: "#4A4542",
          lighter: "#6B6560",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-up": "slideUp 0.4s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "breathe": "breathe 3s ease-in-out infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(196, 86, 42, 0.4)" },
          "50%": { transform: "scale(1.02)", boxShadow: "0 0 0 8px rgba(196, 86, 42, 0)" },
        },
        breathe: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
        "18": "4.5rem",
        "22": "5.5rem",
      },
      minHeight: {
        "screen-mobile": ["100vh", "100svh"],
        "touch": "44px",
      },
      minWidth: {
        "touch": "44px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "warm": "0 4px 20px -4px rgba(196, 86, 42, 0.15)",
        "card": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
        "card-hover": "0 10px 40px rgba(0,0,0,0.12)",
      },
      screens: {
        "xs": "480px",
        "3xl": "1920px",
      },
      transitionDuration: {
        "400": "400ms",
      },
      backdropBlur: {
        "xs": "2px",
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
      },
    },
  },
  plugins: [],
};
