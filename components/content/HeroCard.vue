<template>
  <!-- Element -->
  <div
    class="flex flex-col w-full md:w-1/4 text-default-text text-center mx-auto"
  >
    <!-- Image -->
    <div class="mx-auto overflow-hidden">
      <img
        :src="img"
        alt=""
        class="border border-border-hover rounded-full w-32 h-32"
      />
    </div>

    <!-- Title -->
    <div class="text-2xl mt-4">
      <h3 v-text="title" />
    </div>

    <!-- Text -->
    <div class="my-2">
      <p v-text="text" />
    </div>

    <!-- Call to action -->
    <div>
      <button
        class="border-2 border-primary hover:border-primary-hover transition-border-color rounded-full bg-primary-hover mt-2 px-4 py-2"
      >
        View Details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroCard',

  components: {},

  props: {
    title: {
      required: true,
      type: String
    },
    text: {
      required: false,
      type: String,
      default:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo soluta quod, distinctio minima, mollitia est repudiandae sequi saepe doloribus ad necessitatibus facere ipsam ea laudantium dicta corporis labore placeat!'
    },
    img: {
      required: true,
      type: String
    }
  }
}
</script>
