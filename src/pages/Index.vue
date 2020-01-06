<template>
  <Layout>
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <Carousel />
  </Layout>
</template>

<script>
import Carousel from '~/components/content/Carousel.vue'

export default {
  components: { Carousel },
  metaInfo: {
    title: 'Welcome!',
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
