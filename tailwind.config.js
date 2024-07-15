import { colors } from './src/styles/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      colors,
      backgroundImage: {
        "home": "url('/src/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

