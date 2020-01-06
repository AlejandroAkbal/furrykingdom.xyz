// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
  // Use Buefy
  Vue.use(Buefy);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
