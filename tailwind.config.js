/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFBF2',
        beige: '#F5F0E6',
        gold: '#DCA767',
        rose: '#EDC4B8',
        cocoa: '#4A4238',
        muted: '#7D766C',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 25px rgba(74, 66, 56, 0.08)',
      },
    },
  },
  plugins: [],
}

