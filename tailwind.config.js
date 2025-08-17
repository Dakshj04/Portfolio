/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        cream: '#F5F5DC',
        ivory: '#FFFFF0',
        beige: '#EDE6D6',
        taupe: '#D2B48C',
        mocha: '#A1887F',
        brown: '#5C4033',
        espresso: '#3E2723',
        gold: '#C5A572',
      }
    },
  },
  plugins: [],
};