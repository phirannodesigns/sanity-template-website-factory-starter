/* eslint-disable global-require, import/no-extraneous-dependencies, unicorn/prefer-module */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ea612a',
        },
        background: {
          DEFAULT: '#000000',
        },
        type: {
          DEFAULT: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // className="!text-4xl !font-semibold !mb-4"
            'h1, h2, h3, h4': {
              fontWeight: theme('fontWeight.semibold'),
            },
            h2: {
              fontSize: theme('fontSize.4xl'),
              lineHeight: theme('lineHeight.10'),
              marginBottom: theme('margin.4'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
