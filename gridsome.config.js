// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// SASS and SCSS
const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass'),
        // or if you use scss
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, './src/assets/sass/*.sass'),
        // or scss
        path.resolve(__dirname, './src/assets/sass/*.scss')
      ]
    });
}

module.exports = {
  siteName: 'Furry kingdom',
  siteUrl: 'https://furrykingdom.xyz',
  siteDescription:
    "Rushy's Kingdom is a furry server designed with fun, freedom, and diversity in mind. Whoever and whatever you are, Rushy's Kingdom encourages you to show your true colors and be yourself! Enter the kingdom and become a part of this welcoming family of interesting characters. We encourage you to join us  and make some awesome and interesting memories with us.",
  titleTemplate: '%s | Furry kingdom',
  plugins: [],

  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    // types.forEach(type => {
    //   addStyleResource(config.module.rule('sass').oneOf(type));
    // });

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  }
};
