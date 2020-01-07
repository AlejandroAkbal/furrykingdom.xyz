<template>
  <div class="hero-container relative overflow-hidden">
    <div class="hero-image"></div>
    <div class="flex h-full m-5">
      <h1 v-text="text" class="text-default-text text-lg m-auto text-center" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroComponent',

  components: {},

  props: {
    text: { type: String, required: true, default: 'Replace me!' }
  }
}
</script>
