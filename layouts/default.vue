<template>
  <div>
    <div class="bg-gradient">
      <!-- Navigation bar -->
      <Navbar />

      <!-- Content -->
      <main>
        <nuxt />
      </main>
    </div>

    <!-- Footer -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar.vue'

export default {
  name: 'DefaultLayout',

  components: { Navbar },

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
