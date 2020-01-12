<template>
  <div class="relative overflow-hidden" style="height: 25vh;">
    <!-- Background image -->
    <div class="hero-image bg-cover inset-0 absolute">&nbsp;</div>

    <!-- Information -->
    <div class="absolute flex h-full z-10 inset-0 top-0">
      <div class="text-default-text text-center m-auto flex flex-col">
        <!-- Title -->
        <h1 v-text="title" class="text-3xl md:text-5xl tracking-wide" />
        <!-- Subtitle -->
        <h2
          v-if="subtitle"
          v-text="subtitle"
          class="text-xl md:text-2xl leading-relaxed"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroLanding',

  components: {},

  props: {
    title: { type: String, required: true, default: 'Title placeholder' },
    subtitle: { type: String, required: false, default: undefined }
  }
}
</script>
