/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d6aae",
        secondary: "#3867d6",
        success: "#2dce89",
        warning: "#ffba08",
        pinkRed: "#eb3b5a",
        primaryLight: "#e2f2ff",
        light: "#F7F8FC",
        black: {
          DEFAULT: "#070f22",
          special: "#2D2E2E",
        },
        gray: {
          DEFAULT: "#dddbf1",
          light: "#f8f8ff",
          dark: "#4b6584",
        },
        grayThree: "#f8f8f8",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-image":
          "url('https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1670309928/mh6hpcqrlb4ts68ia1gg.jpg')",
        "gallery-bg":
          "url('https://shikho.com/bg/shikho-biddaloy/gallery.jpg')",
        "green-gradient": `linear-gradient(90deg, rgba(75,254,135,1) 24%, #4bfe85  100%)`,
        "blue-gradient": `linear-gradient(46.87deg, #5576ED 0%, #6FFD96 96.94%)`,
        "black-gradient": `linear-gradient(180deg, #0A0A0A 0%, rgba(5, 5, 5, 0.58) 100%),linear-gradient(0deg, #1B1C1C, #1B1C1C)`,
      },
    },
  },
  plugins: [],
};
