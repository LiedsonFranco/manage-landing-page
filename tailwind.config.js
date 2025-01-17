/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'bright-red':'hsl(12, 88%, 59%)',
        'dark-blue': 'hsl(228, 39%, 23%)',
        'very-light-gray': 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}