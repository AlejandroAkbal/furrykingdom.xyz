<template>
  <div>
    <!-- Navigation bar -->
    <Navbar />

    <!-- Content -->
    <main>
      <nuxt />
    </main>

    <!-- Footer -->
    <footer>
      <Footer />
    </footer>

    <!-- Scroll to top -->
    <ScrollToTop />
  </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar.vue'
import Footer from '~/components/layout/Footer.vue'
import ScrollToTop from '~/components/layout/ScrollToTop.vue'

export default {
  name: 'DefaultLayout',

  components: { Navbar, Footer, ScrollToTop },

  // Set theme and background color in the body dynamically thanks to the vuex store computed property
  head() {
    return {
      title: 'Welcome',
      bodyAttrs: {
        class: true ? 'dark bg-background' : 'light bg-background'
      }
    }
  }
}
</script>
