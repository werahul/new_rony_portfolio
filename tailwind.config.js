/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pt': ['PT Sans', 'sans-serif',],
      'kanit': ['Kanit', 'sans-serif',],
      'ubuntu': ['Ubuntu', 'sans-serif',],
    },
    extend: {},
  },
  plugins: [],
}

