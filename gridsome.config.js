// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Furry kingdom',
  siteUrl: 'https://furrykingdom.xyz',
  siteDescription:
    "Rushy's Kingdom is a furry server designed with fun, freedom, and diversity in mind. Whoever and whatever you are, Rushy's Kingdom encourages you to show your true colors and be yourself! Enter the kingdom and become a part of this welcoming family of interesting characters. We encourage you to join us  and make some awesome and interesting memories with us.",
  titleTemplate: '%s | Furry kingdom',

  // Tailwind and PurgeCSS
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './some/file/js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
      */
    },
  ],
}
