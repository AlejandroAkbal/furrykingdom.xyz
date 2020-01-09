<template>
  <!-- Separator -->
  <div
    :class="quote ? 'blockquote' : ''"
    class="w-full mx-auto m-12 border border-border rounded-full relative"
    style="height: 1px;"
  ></div>
</template>

<script>
export default {
  name: 'Separator',

  props: {
    quote: { default: false, required: false, type: Boolean }
  }
}
</script>
