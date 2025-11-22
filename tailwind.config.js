/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 🚨🚨 核心修改：开启手动选择器模式 🚨🚨
  darkMode: 'selector', 
  theme: {
    extend: {},
  },
  plugins: [],
}