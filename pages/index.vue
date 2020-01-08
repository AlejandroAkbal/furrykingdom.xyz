<template>
  <div>
    <!-- Share background with Nav and Hero component -->
    <div class="bg-gradient">
      <!-- Navigation bar -->
      <Navbar />

      <!-- Hero text -->
      <HeroComponent />
    </div>

    <!-- Info -->
    <HeroInfo />
  </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar.vue'
import HeroComponent from '~/components/content/HeroComponent.vue'
import HeroInfo from '~/components/content/HeroInfo.vue'

export default {
  name: 'SplashPage',

  components: { Navbar, HeroComponent, HeroInfo },

  metaInfo: {
    title: 'Welcome!'
  }
}
</script>
