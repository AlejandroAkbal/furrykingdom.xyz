<template>
  <div>
    <!-- Hero text -->
    <HeroLanding class="bg-gradient" />

    <!-- Page content -->
    <div class="mx-7vw md:mx-14vw">
      <!-- Separator -->
      <Separator :quote="true" />

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
      <Separator :quote="true" />

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
              avatar="https://i.imgur.com/QRpx8zF.png"
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
import HeroLanding from '~/components/landing/HeroLanding.vue'
import HeroInfo from '~/components/content/HeroInfo.vue'
import HeroCard from '~/components/content/HeroCard.vue'
import Separator from '~/components/content/Separator.vue'

export default {
  name: 'Landing',

  components: { HeroLanding, HeroInfo, HeroCard, Separator }

  // metaInfo: {
  //   title: 'Welcome!'
  // }
}
</script>
