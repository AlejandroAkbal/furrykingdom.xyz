<template>
  <div style="min-height: 87.5vh;">
    <!-- Hero text -->
    <HeroCover title="Frequently Asked Questions" class="bg-gradient" />

    <!-- Page content -->
    <div class="mx-auto w-full md:w-2/3 p-6">
      <FaqCollapsible title="What is the community about?">
        About fun, freedom and diversity
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
