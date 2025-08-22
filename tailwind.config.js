/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#6366f1",
          emerald: "#10b981",
          orange: "#f97316",
        },
      },
    },
  },
  plugins: [],
};
