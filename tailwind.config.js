module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    gridTemplateAreas: {
      'gallery': [
        'itemA itemA itemA itemA itemA itemA itemA itemA',
        'itemB itemB itemB itemC itemC itemC itemC itemC',
        'itemD itemD itemD itemD itemD itemD itemD itemD',
        'itemE itemE itemE itemE itemE itemF itemF itemF',
        'itemG itemG itemG itemG itemG itemG itemG itemG',
      ]
    },
    extend: {
      fontSize: {
        super: ['8.438rem', '1em']
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Lato', 'sans-serif']

      },
      container: {
        center: true,
        padding: '1rem'
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}