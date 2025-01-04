/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["Marcellus", "serif"],
      },
      colors: {
        primary: "#B75C9D",
        "primary-dark": "#9d4e86",
      },
    },
  },
  plugins: [],
};
