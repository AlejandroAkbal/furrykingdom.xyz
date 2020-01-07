<template>
  <div>
    <div>
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
export default {
  name: 'DefaultLayout',

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
