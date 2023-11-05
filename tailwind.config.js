/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "vtd-primary": colors.sky, // Light mode Datepicker color
        "vtd-secondary": colors.gray, // Dark mode Datepicker color
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs","@tailwindcss/forms","flowbite/plugin")], 
}

