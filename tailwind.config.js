const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fx: {
          navy: "#0B1B3A",
          red: "#E5242A",
          gold: "#FDC500",
          ink: "#101418",
          gray50: "#F7F7F7",
          gray200: "#EAEAEA"
        }
      },
      boxShadow: {
        elev1: "0 4px 12px rgba(0,0,0,0.12)",
        glowRed: "0 0 0 0 rgba(0,0,0,0), 0 0 24px rgba(229,36,42,0.20)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
}
