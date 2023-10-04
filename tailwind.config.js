/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1097px'},
      // => @media (max-width: 1097px) { ... }

      'lg': {'max': '1000px'},
      // => @media (max-width: 1000px) { ... }

      'lg1': {'max': '855px'},
      // => @media (max-width: 855px) { ... }

      'sm': {'max': '550px'},
      // => @media (max-width: 550px) { ... }

      'sm1': {'max': '470px'},
      // => @media (max-width: 470px) { ... }

      'mi': {'max': '400px'},
      // => @media (max-width: 400px) { ... }

      'mi1': {'max': '360px'},
      // => @media (max-width: 360px) { ... }

      'mi2': {'max': '295px'},
      // => @media (max-width: 295px) { ... }
    },
  },
  plugins: [],
}

