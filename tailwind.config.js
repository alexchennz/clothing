/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clothing-gray': '#f6f6f7',
        'clothing-black': '#222222',
        'clothing-text': '#8d8d8d'
      }
    },
  },
  plugins: [],
}