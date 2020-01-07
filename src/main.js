// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Custom Css
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  // Push Icons
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add attributes to BODY tag dynamically
  head.bodyAttrs = {
    class: true ? 'dark bg-background' : 'light bg-background',
  }
}
