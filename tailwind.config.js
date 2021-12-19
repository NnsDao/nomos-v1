module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      0: '0',
      25: '25%',
      30: '30%',
      33: '33%',
      50: '50%',
      66: '66%',
      75: '75%',
      '1400px': '1400px',
      '1600px': '1600px',
      '1200px': '1200px',
    },
    maxWidth: {
      '1400px': '1400px',
      '1200px': '1200px',
      '1600px': '1600px',
      33: '33%',
      50: '50%',
      66: '66%',
    },
    inset: {
      0: 0,
      // ...
      64: '16rem',
      '1/5': '20%',
    },
    extend: {
      spacing: {
        0: '0',
        25: '25%',
        30: '30%',
        33: '33%',
        50: '50%',
        66: '66%',
        75: '75%',
        40: '40px',
        '48px': '48px',
        '50px': '50px',
        '91px': '91px',
        '100px': '100px',
        '140px': '140px',
        '155px': '155px',
        '190px': '190px',
        '200px': '200px',
        '240px': '240px',
        '336px': '336px',
        '500px': '500px',
        '840px': '840px',
        '900px': '900px',
        '1000px': '1000px',
        '1400px': '1400px',
        '1550px': '1550px',
        '1600px': '1600px',
        '1200px': '1200px',
      },
      backgroundColor: theme => ({
        primary: '#0C0633',
        secondary: '#ffed4a',
        danger: '#e3342f',
        sign: '#D130B3',
        border: '#3F62E4',
        'main-content': '#251F5E',
        creatCard: '#35296b',
        subTitleColor: '#7aa9ff',
      }),
      backgroundImage: {},
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
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
      'synthwave',
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
