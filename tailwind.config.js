const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontSize: {
      xxs: ".60rem",
      xs: ".75rem",
      tiny: ".84rem",
      sm: ".875rem",

      base: "1rem",
      sl: "1.08rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      large: "7rem",
    },
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      gray: colors.blueGray,
      greyish: colors.coolGray,
      grey: colors.gray,
      red: colors.red,
      sky: colors.sky,
      blue: colors.blue,
      yellow: colors.amber,
      teal: colors.teal,
      cyan: colors.cyan,
      lime: colors.lime,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      violet: colors.violet,
      green: colors.green,
      purple: colors.purple,
      indigo: colors.indigo,
      primary: "#009E82",
      glass: "rgb(230, 228, 231, 0.8)",
      blackish: "rgb(0, 0, 0, 0.7)",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        Libre: ["Libre Baskerville", "serif"],
        Mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {},
  },

  plugins: [],
};
