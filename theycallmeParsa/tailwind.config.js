/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["0.5rem", "20px"],
      base: ["0.75rem", "24px"],
      lg: ["1rem", "28px"],
      pl: ["1.8rem"],
      xl: ["2rem", "32px"],
    },
  },
  plugins: [],
};
