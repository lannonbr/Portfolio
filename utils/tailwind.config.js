module.exports = {
  darkMode: 'media',
  purge: {
    content: ['./src/**/*.js', './utils/**/*.js'],
  },
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      screens: {
        '2xl': '1600px',
      },
      boxShadow: {
        in: '1px 1px 0px rgba(255, 255, 255, 0.1)',
      },
      minHeight: {
        100: '100px',
        150: '150px',
      },
      maxWidth: {
        '7xl': '100rem',
      },
      colors: {
        'rebecca-purple': {
          DEFAULT: '#663399',
          light: '#66339988',
          lighter: '#663399dd',
          lightest: '#66339906',
        },
        cyan: {
          DEFAULT: '#81cfe0',
          transparent: '#81cfe020',
          light: '#e4f1fe',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'responsive', ' focus', 'dark'],
    textColor: ['hover', 'responsive', 'focus', 'dark'],
    borderColor: ['responsive', 'hover', 'focus', 'dark'],
    translate: ['hover', 'responsive', 'focus', 'group-hover'],
  },
  plugins: [],
}
