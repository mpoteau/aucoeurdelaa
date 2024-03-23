/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#292826', // light-dark
          2: '#999999', // light-gray
          3: '#A29054', // gold
          4: '#C1A64D', // light-gold
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'], // Ajoutez cette ligne
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}