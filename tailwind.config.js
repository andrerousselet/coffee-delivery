/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Roboto", ...defaultTheme.fontFamily.sans],
        baloo: "'Baloo 2', cursive",
      }
    },
  },
  plugins: [],
}