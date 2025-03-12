/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A6FA5',
        secondary: '#94A3B8',
        text: '#334155',
        surface: {
          ground: '#F1F5F9',
          section1: '#ffffff',
          section2: '#F8FAFC',
          section3: '#EFF6FF',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}