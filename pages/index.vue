<template>
  <div>
    <!-- Share background with Nav and Hero component -->
    <div class="bg-gradient">
      <!-- Navigation bar -->
      <Navbar />

      <!-- Hero text -->
      <HeroComponent
        text="Rushy's Kingdom is designed with fun in mind. Whoever and whatever you
        are, Rushy's Kingdom encourages you to show your true colors and be
        yourself! Enter the kingdom and become a part of this welcoming family
        of interesting characters. We strive to maintain an active community
        with thousands of fluffy friends to meet! With planned community events
        every week such as games, movies, and contests, we work hard to ensure
        every single member gets a chance to be involved and have fun. All of us
        at Rushy's Kingdom encourage you to join us and make some awesome and
        interesting memories along the way!"
      />
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
