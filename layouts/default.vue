<template>
  <div>
    <!-- Content -->
    <main>
      <nuxt />
    </main>

    <!-- Footer -->
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from '~/components/layout/Footer.vue'

export default {
  name: 'DefaultLayout',

  components: { Footer },

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
