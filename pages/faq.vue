<template>
  <div style="min-height: 87.5vh;">
    <!-- Hero text -->
    <HeroCover title="Frequently Asked Questions" class="bg-gradient" />

    <!-- Page content -->
    <div class="mx-7vw md:mx-14vw py-3">
      <!-- Question -->
      <FaqCollapsible>
        <template slot="title">What is the community about?</template>
        <template slot="description">
          About fun, freedom and diversity.
        </template>
      </FaqCollapsible>

      <!-- Question -->
      <FaqCollapsible>
        <template slot="title">How are you different from others?</template>
        <template slot="description">
          Because we're a kingdom.
        </template>
      </FaqCollapsible>
    </div>
  </div>
</template>

<script>
import HeroCover from '~/components/content/HeroCover.vue'
import FaqCollapsible from '~/components/content/FaqCollapsible.vue'

export default {
  name: 'Faq',

  components: { HeroCover, FaqCollapsible },

  metaInfo: {
    title: 'Frequently asked questions'
  }
}
</script>
