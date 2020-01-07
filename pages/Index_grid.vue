<template>
  <Layout>
    <div class="hero-container">
      <div class="hero-image">
        <img
          class="m-auto"
          src="../assets/img/logo_white.png"
          alt="Brand image"
        />
      </div>
      <div class="hero-text">
        <h1 class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          architecto reiciendis odit, accusantium ratione voluptatem ad iure
          deleniti qui saepe praesentium incidunt at nihil nisi facilis, sit
          labore? Commodi, facilis.
        </h1>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'splashPage',
  components: {},
  metaInfo: {
    title: 'Welcome!',
  },
}
</script>

<style>
.hero-container {
  height: 50vh;
  @apply relative overflow-hidden;
}
/* The hero image */
.hero-image {
  opacity: 35%;

  @apply w-full absolute h-full;
}

/* Place text in the middle of the image */
.hero-text {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @apply text-default-text absolute m-auto text-center;
}
</style>
