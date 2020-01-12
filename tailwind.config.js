module.exports = {
  theme: {
    extend: {
      colors: {
        // Colors
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',

        // accent: 'var(--color-accent)',
        // 'accent-hover': 'var(--color-accent-hover)',

        default: 'var(--color-default)',
        'default-text': 'var(--color-default-text)',
        'default-text-hover': 'var(--color-default-text-hover)',
        'default-text-muted': 'var(--color-default-text-muted)',

        background: 'var(--color-background)',
        'background-hover': 'var(--color-background-hover)',

        depth: 'var(--color-depth)',
        'depth-hover': 'var(--color-depth-hover)',

        border: 'var(--color-border)',
        'border-hover': 'var(--color-border-hover)',

        'gradient-one': 'var(--color-gradient-one)',
        'gradient-two': 'var(--color-gradient-two)',

        // Extra
        'black-25': 'rgba(0, 0, 0, 0.25)',

        // Brands
        discord: '#7289DA'
      },

      inset: {},
      // Width and height
      spacing: {
        'fit-content': 'fit-content',

        // Margins for content
        '7vw': '7vw',
        '14vw': '14vw'
      },

      maxHeight: {
        '0': '0px',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },

      minHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      }
    }
  },
  // Recommended variant order
  // ['responsive', 'group-hover', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled']

  // Every variant possible
  // variants: ['responsive', 'group-hover', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
  variants: {
    textColor: ['responsive', 'group-hover', 'hover', 'focus']
  }
}
