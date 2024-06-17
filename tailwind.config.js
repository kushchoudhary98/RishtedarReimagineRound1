/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'hero': '0 21px 16px rgba(0, 0, 0, 0.25)',
        'hero-sub': '0px 4px 10px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        'fredoka': 'Fredoka',
        'inter': 'Inter'
      }
    },
  },
  plugins: [],
}

