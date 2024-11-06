/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Hanken Grotesk", "serif"],
      },

      colors: {
        bgyellow: "#FFAB1F",
        nav_link: "#333333",
      },
    },
  },
  plugins: [],
};
