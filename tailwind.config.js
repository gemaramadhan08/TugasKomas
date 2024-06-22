/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#31363F",
        biru: "#76ABAE",
      },
      backgroundImage: {
        home: "url(./assets/eren.jpg')",
      },
    },
  },
  plugins: [],
};
