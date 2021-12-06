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
      '33': '33%',
      '50': '50%',
      '66': '66%',
      '75': '75%',
      '1400px': '1400px',
    },
    maxWidth: {
      '1400px': '1400px',
      '33': '33%',
      '50': '50%',
      '66': '66%',
    },
    extend: {},
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
