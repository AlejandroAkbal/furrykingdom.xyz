<template>
  <div>
    <!-- Share background with Nav and Hero component -->
    <div class="bg-gradient">
      <!-- Navigation bar -->
      <Navbar />

      <!-- Hero text -->
      <HeroComponent />
    </div>

    <!-- Page content -->
    <div class="mx-auto w-5/6 md:w-2/3">
      <!-- Separator -->
      <Separator />

      <!-- Info text -->
      <section>
        <HeroInfo />
      </section>

      <!-- Separator -->
      <Separator />

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
      <Separator />

      <!-- Discord messages -->
      <section class="flex flex-col">
        <!-- Title -->
        <h3 class="text-3xl text-default-text text-center mx-auto">
          What our members say
        </h3>
        <div class="mt-5 md:p-10 md:mt-0">
          <!-- Discord messages -->
          <discord-messages class="shadow-xl">
            <discord-message
              author="Rush"
              avatar="https://cdn.discordapp.com/avatars/541023088821665809/261c5ab6bd6b5d5254d9146073002cc4.png?size=128"
              role-color="#ff0065"
            >
              Welcome to our wonderful community!
            </discord-message>
          </discord-messages>
        </div>
      </section>

      <!-- Separator -->
      <Separator />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar.vue'
import HeroComponent from '~/components/content/HeroComponent.vue'
import HeroInfo from '~/components/content/HeroInfo.vue'
import HeroCard from '~/components/content/HeroCard.vue'
import Separator from '~/components/content/Separator.vue'

export default {
  name: 'SplashPage',

  components: { Navbar, HeroComponent, HeroInfo, HeroCard, Separator }

  // metaInfo: {
  //   title: 'Welcome!'
  // }
}
</script>
