/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode via a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Aesthetic font
      },
    },
  },
  plugins: [],
};



