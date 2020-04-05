module.exports = {
  theme: {
    extend: {
      minHeight: {
        '100': '100px',
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
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
