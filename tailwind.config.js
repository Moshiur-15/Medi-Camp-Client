const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily:{
        'merriweather': ['Merriweather', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        background: '#eef2f8c0', 
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}