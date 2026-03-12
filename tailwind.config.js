/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base':    '#0D1A2C',
        'bg-card':    '#1D2B40',
        'bg-section': '#122033',
        'primary':    '#429EC8',
        'primary-dark': '#4A6FA5',
        'text-light': '#D8EBFF',
        'text-muted': '#839CB5',
        'nav-text':   '#1F2E42',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
}
