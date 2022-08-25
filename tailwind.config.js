module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      0: '0',
      25: '.25',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      102: '1.02',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
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
      700: '700px',
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
        px: '1px',
        n24: '-24px',
        n4: '-4px',
        0: '0px',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
        25: '25px',
        26: '26px',
        27: '27px',
        28: '28px',
        29: '29px',
        30: '30px',
        31: '31px',
        32: '32px',
        33: '33px',
        34: '34px',
        35: '35px',
        36: '36px',
        37: '37px',
        38: '38px',
        39: '39px',
        40: '40px',
        41: '41px',
        42: '42px',
        43: '43px',
        44: '44px',
        45: '45px',
        48: '48px',
        50: '50px',
        58: '58px',
        69: '69px',
        70: '70px',
        72: '72px',
        75: '75px',
        80: '80px',
        90: '90px',
        96: '96px',
        105: '105px',
        108: '108px',
        112: '112px',
        126: '126px',
        128: '128px',
        140: '140px',
        168: '168px',
        170: '170px',
        205: '205px',
        387: '387px',
        366: '366px',
        419: '419px',
        400: '400px',
        414: '414px',
        463: '463px',
        432: '432px',
        463: '463px',
        500: '500px',
        520: '520px',
        570: '570px',
        580: '580px',
        651: '651px',
        617: '617px',
        576: '576px',
        700: '700px',
        780: '780px',
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
        96: '96px',
        '100px': '100px',
        '140px': '140px',
        '155px': '155px',
        '190px': '190px',
        '200px': '200px',
        '230px': '230px',
        '240px': '240px',
        '265px': '265px',
        '336px': '336px',
        '430px': '430px',
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
        linkBorder: '#818994',
        mainBorder: '#282828',
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
