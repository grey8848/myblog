/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 关键：启用手动选择器模式 (v4 推荐用 'selector'，v3 用 'class'，这里都兼容)
  darkMode: 'selector', 
  theme: {
    extend: {},
  },
  plugins: [],
}