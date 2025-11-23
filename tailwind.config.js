/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Tailwind v4 dark mode configuration
  darkMode: {
    selector: '.dark',
  },
  theme: {
    extend: {},
  },
  plugins: [],
}