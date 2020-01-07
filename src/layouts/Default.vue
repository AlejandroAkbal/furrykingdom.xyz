<template>
  <div class="bg-gradient">
    <!-- Navigation bar -->
    <Navbar />

    <!-- Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar.vue'

export default {
  name: 'defaultLayout',

  components: { Navbar },
}
</script>
