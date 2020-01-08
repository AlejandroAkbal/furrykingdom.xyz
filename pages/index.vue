<template>
  <div>
    <!-- Share background with Nav and Hero component -->
    <div class="bg-gradient">
      <!-- Navigation bar -->
      <Navbar />

      <!-- Hero text -->
      <HeroComponent />
    </div>

    <div class="mx-auto w-5/6 md:w-2/3">
      <!-- Separator -->
      <div class="w-full m-12 border border-border" style="height: 1px;" />

      <!-- Info text -->
      <section>
        <HeroInfo />
      </section>

      <!-- Separator -->
      <div class="w-full m-12 border border-border" style="height: 1px;" />

      <!-- Images -->
      <section id="clarifications" class="flex flex-wrap">
        <HeroCard
          :img="require('~/assets/img/cutie1.png')"
          title="8k+ Members!"
        />
        <HeroCard
          :img="require('~/assets/img/cutie2.png')"
          title="Friendly Community"
        />
        <HeroCard
          :img="require('~/assets/img/logo_white.png')"
          title="Epic Roleplay"
        />
      </section>

      <!-- Separator -->
      <div class="w-full m-12 border border-border" style="height: 1px;" />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar.vue'
import HeroComponent from '~/components/content/HeroComponent.vue'
import HeroInfo from '~/components/content/HeroInfo.vue'
import HeroCard from '~/components/content/HeroCard.vue'

export default {
  name: 'SplashPage',

  components: { Navbar, HeroComponent, HeroInfo, HeroCard },

  metaInfo: {
    title: 'Welcome!'
  }
}
</script>
