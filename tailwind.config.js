/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Corrected the double slash
  theme: {
    screens: {
      "ssm": "300px",
      "sd":"415px",
      sm: "567px",
      md: "768px",
      lg: "904px",
      xl: "1000px",
      "2xl": "1100px",
    },
    extend: {
      colors: {
        customBlue: '#8A56E9',
        customBlack:'#1E2744',
        backgroundGrey:'#F2F2F2'
      
      },
      fontFamily: {},

      container: {
        center: true,
        padding: "0.1rem",
      },

      backgroundImage: {},

    },
  },
};