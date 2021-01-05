module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      titles: ['Roboto', 'sans-serif'],
      texto: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        lightShades: {
          200: '#FEFDFC',
          500: '#F6F5F3',
          700: '#A9AEB8',
        },
        lightAccents: {
          200: '#F8EAA5',
          500: '#BF9820',
          700: '#896510',
        },
        mainBrand: {
          200: '#FBF5D6',
          500: '#DCC98B',
          700: '#9E8546',
        },
        darkAccents: {
          200: '#F7C9B7',
          500: '#B1433F',
          700: '#7F1F2C',
        },
        darkShades: {
          200: '#E9D9CB',
          500: '#231B18',
          700: '#190D0C',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
