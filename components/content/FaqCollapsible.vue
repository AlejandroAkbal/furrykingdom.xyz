<template>
  <div
    class="w-full md:w-1/2 mx-auto text-default-text border border-border rounded-lg overflow-hidden"
  >
    <div class="bg-depth p-3">
      <!-- Toggler -->
      <button @click="isActive = !isActive" class="w-full flex justify-between">
        <!-- Title -->
        <h3 v-text="title" class="font-bold" />
        <!-- Dinamic icon -->
        <span v-html="isActive ? '&#9650;' : '&#9660;'" class="colorful"></span>
      </button>
    </div>
    <!-- Content, uses slot -->
    <div v-if="isActive" class="bg-depth-hover px-5 py-3">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqCollapsible',

  props: {
    title: { type: String, required: true },
    active: { type: Boolean, required: false, default: false }
  },

  data() {
    return { isActive: false }
  },

  created() {
    this.isActive = this.active
  }
}
</script>
