/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: '#10375C',
        secondary: '#D7E8F7',
        base: '#F2F2F2',
        accent: '#69B99D',
        rose: '#D99197',
        roseBold: '#F27E7E',
        dark: '#0D0D0D',
      },
    },
  },
  plugins: [],
}