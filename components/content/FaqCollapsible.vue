<template>
  <div
    class="w-full md:w-1/2 mx-auto my-3 text-default-text border border-border hover:border-border-hover rounded-lg overflow-hidden"
  >
    <div @click="isActive = !isActive" class="bg-depth p-3">
      <!-- Toggler -->
      <button class="w-full flex justify-between">
        <!-- Title -->
        <h3 class="font-bold">
          <slot name="title" />
        </h3>
        <!-- Dinamic icon -->
        <span v-html="isActive ? '&#9650;' : '&#9660;'" class="colorful"></span>
      </button>
    </div>
    <!-- Content, uses slot -->
    <div v-if="isActive" class="bg-depth-hover px-5 py-3">
      <slot name="description" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqCollapsible',

  props: {
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
