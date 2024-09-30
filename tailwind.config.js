/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lavender-indigo': '#A844FF',
        'violet-blue': '#6D44FF',
        'eerie-black': '#151515',
      },
    },
    fontFamily: {
      custom: ['Silka', 'sans-serif'],
    },
  },
  plugins: [],
};
