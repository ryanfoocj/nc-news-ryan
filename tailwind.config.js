import("tailwindcss").Config;

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      color1: "#FAF7F0",
      aqueous: "#CDFCF6",
      deeppurp: "#BCCEF8",
      darkpurp: "#98A8F8",
      button: "#F9F5EB",
      buttonh: "#EAE3D2",
      bluey: "#607EAA",
      rando: "#CAE4DB",
      black: colors.black,
      white: colors.white,
      red: colors.red,
      green: colors.green,
      transparent: colors.transparent,
    },

    screens: {
      mo: "640px",
      // => @media (min-width: 576px) { ... }

      tab: "768px",
      // => @media (min-width: 640px) { ... }

      lap: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
