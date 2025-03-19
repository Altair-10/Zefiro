const {heroui, lightLayout} = require("@heroui/react");
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class will be used' 
  content: [
    "./src/pages/**/*.{js,jsx,tsx}",
    "./src/components/**/*.{js,jsx,tsx}",
    "./src/app/**/*.{js,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        blue: {
          light: "#82bfca",
          medium: "#489fb5",
          dark: "#16697a",
        },
        brown: {
          light: "#ede7e4",
        },
        orange: "#ffa62b",
      },
      backgroundImage: {
        'gradient-orange': "linear-gradient(to right, #ffa62b, #ff9a3b, #ff8c00)",
      },
      fontFamily: {
        title: ["Roboto", "sans-serif"],
        general: ["Times New Roman", "serif"],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    heroui({
      prefix: "myapp",
    }),
  ],
};

