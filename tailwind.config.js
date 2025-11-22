/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 必须添加这一行，否则手动切换无效！
  darkMode: 'selector', 
  theme: {
    extend: {},
  },
  plugins: [],
}