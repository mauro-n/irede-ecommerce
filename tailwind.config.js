/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-purple': '#8B53FE',
        'gradient-blue': '#5CDFE6',
      }
    },
  },
  plugins: [],
}