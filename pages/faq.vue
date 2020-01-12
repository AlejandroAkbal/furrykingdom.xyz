<template>
  <div>
    <!-- Hero text -->
    <HeroCover title="Frequently Asked Questions" class="bg-gradient" />

    <!-- Page content -->
    <div class="mx-auto w-5/6 md:w-2/3">
      <!-- Separator -->
      <!-- <Separator :quote="true" /> -->
    </div>
  </div>
</template>

<script>
import HeroCover from '~/components/content/HeroCover.vue'
import Separator from '~/components/content/Separator.vue'

export default {
  name: 'Faq',

  components: { HeroCover, Separator },

  metaInfo: {
    title: 'Frequently asked questions'
  }
}
</script>
