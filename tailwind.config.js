/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/../*.{html, js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
],
  darkMode: "class",
  theme: {
    colors: {
      first: '#0D96A4',
      firstLight: '#31A2AD',
      second: '#FF6D6D',
      third: '#219D80',
      thirdLight: '#77D7D3',
      forth: '#38BDCA',
      fifth: '#096DB0',
      sixth: '#0D96A4',
      dark1: '#2E4049',
      dark2: '#0D0D0D',
      dark3: '#252A34',
      dark4: '#444444',
      dark5: '#384C56',
      dark6: '#444444',
      dark7: '#727272',
      dark8: '#555555',
      light1: '#FFFFFF',
      light2: '#FFFCF9',
      light3: '#F2F1F1',
      light4: '#ECF1F0',
      light5: '#F0F0F0',
      light6: '#F1EEEC',
      light7: '#FDEEE4',
      light8: '#AFAFAF',
      light9:  '#C7C7C7',
      light10: '#C5CECC',
      light11: '#F9F9F9',
      light12: '#D0D0D0',
      light13: '#3F3F3F',
      light14: '#DBDBDB'
    },
    fontFamily: {
      sue: ['Sue Ellen Francisco', 'cursive'],
      work: ['Work Sans', 'sans-serif'],
      shippori: ['Shippori Mincho', 'serif'],
      playfair: ['Playfair Display', 'serif'],
    },
    borderWidth: {
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
    },
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin.cjs")],
}

