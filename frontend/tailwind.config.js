/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        micro5: ['Micro5', 'sans-serif'],
        jersey15: ['Jersey15', 'sans-serif'],
        jersey10: ['Jersey10', 'sans-serif'],
      },
    },
  },
  plugins: [],
}