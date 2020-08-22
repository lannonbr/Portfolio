module.exports = {
  purge: {
    content: ['./src/**/*.js', './utils/**/*.js'],
    whitelist: ['mode-dark'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      boxShadow: {
        in: '1px 1px 0px rgba(255, 255, 255, 0.1)',
      },
      minHeight: {
        '100': '100px',
        '150': '150px',
      },
      maxWidth: {
        '7xl': '100rem',
      },
      colors: {
        'rebecca-purple': {
          default: '#663399',
          light: '#66339988',
          lighter: '#663399dd',
          lightest: '#66339906',
        },
        cyan: {
          default: '#81cfe0',
          transparent: '#81cfe020',
          light: '#e4f1fe',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'responsive', ' focus', 'dark', 'dark-hover'],
    textColor: ['hover', 'responsive', 'focus', 'dark', 'dark-hover'],
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'dark',
      'dark-hover',
      'dark-focus',
    ],
    translate: ['hover', 'responsive', 'focus', 'group-hover'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
