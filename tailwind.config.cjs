/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#222222',
        'brand-light': '#f5f5f5',
        'brand-gray': '#a3a3a3',
      },
    },
  },
  plugins: [],
};
