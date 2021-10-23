// const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: () => ({
        primary: "#00B2FF",
        secondary: "#161922",
      }),

      textColor: {
        primary: "#00B2FF",
        secondary: "#fff",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
