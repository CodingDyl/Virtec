const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#808080",
        tertiary: "#C0C0C0",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      backgroundImage: {
        "bg-pattern": "url('/src/assets/bg_jasha_home.jpg')",
        "pattern-sm": "url('/src/assets/background_sm.jpg')"
      },
    },
  },
  animation: {
    scroll:
      "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
  },
  keyframes: {
    scroll: {
      to: {
        transform: "translate(calc(-50% - 0.5rem))",
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

