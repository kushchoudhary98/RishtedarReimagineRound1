/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'hero': '0 0px 13px rgba(0, 0, 0, 0.25)',
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

