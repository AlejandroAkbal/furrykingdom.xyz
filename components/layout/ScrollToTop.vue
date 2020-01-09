<template>
  <div class="fixed right-0 bottom-0 mr-12 mb-12">
    <button
      @click="scrollToTop"
      class="py-1 md:py-2 px-2 md:px-4 text-white text-xl text-center bg-background-hover border rounded-full border-border-hover hover:border-border focus:border-border"
    >
      <b>&#94;</b>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',

  methods: {
    // Scroll to top button
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
