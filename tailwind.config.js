/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        lightWhite: "rgba(255, 255, 255, 0.7)",
        lightBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      'xs': '480px',
      // => @media (min-width: 480px) { ... }

      'ss': '620px',
      // => @media (min-width: 620px) { ... }

      'sm': '768px',
      // => @media (min-width: 768px) { ... }

      'md': '1060px',
      // => @media (min-width: 1060px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xl': '1700px',
      // => @media (min-width: 1700px) { ... }
    }
  },
  plugins: [],
}

