module.exports = {
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '25': '25%',
      '30': '30%',
      '33': '33%',
      '50': '50%',
      '66': '66%',
      '75': '75%',
      '1400px': '1400px',
      '1600px': '1600px',
      '1200px': '1200px',

    },
    maxWidth: {
      '1400px': '1400px',
      '1200px': '1200px',
      '1600px': '1600px',
      '33': '33%',
      '50': '50%',
      '66': '66%',
    },
    extend: {
      spacing: {
        '0': '0',
        '25': '25%',
        '30': '30%',
        '33': '33%',
        '50': '50%',
        '66': '66%',
        '75': '75%',
        '840px': '840px',
        '500px': '500px',
        '1000px': '1000px',
        '1400px': '1400px',
        '1600px': '1600px',
        '1200px': '1200px',
      },
      backgroundColor: theme => ({
        'primary': '#010D41',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'sign': '#D130B3',
        'border': '#3F62E4',
      }),
      backgroundImage: {
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
      'emerald', // first one will be the default theme
      'dark',
      'forest',
      'synthwave'
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
