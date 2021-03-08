module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FF8223',
        'custom-green': '#006D62',
      },
      backgroundImage: theme =>({
        'tj-logo': "url('https://www.datocms-assets.com/42067/1613992817-tj-portfolio-logo.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
