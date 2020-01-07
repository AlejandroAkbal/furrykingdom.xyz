<template>
  <nav class="navbar flex-col md:flex-row">
    <div class="-mt-2 flex justify-around w-full md:w-auto">
      <!-- Brand -->
      <g-link to="/">
        <g-image
          alt="Logo image"
          src="@/assets/img/logo_white.png"
          height="64"
          width="64"
          quality="50"
        />
      </g-link>

      <!-- Navigation bar toggler -->
      <button class="md:hidden" @click="isActive = !isActive">
        Toggle
      </button>
    </div>
    <!-- Links -->
    <div
      class="w-full overflow-hidden md:flex md:justify-between"
      :class="{ hidden: !isActive }"
    >
      <!-- Right -->
      <ul class="flex flex-col md:flex-row ml-2">
        <!-- Home -->
        <li>
          <g-link to="/">Home</g-link>
        </li>

        <!-- Browse Fursonas -->
        <li>
          <g-link to="/browse/">Browse Fursonas</g-link>
        </li>

        <!-- Rules -->
        <li>
          <g-link to="/rules/">Rules</g-link>
        </li>

        <!-- Events -->
        <li>
          <g-link to="/events/">Events</g-link>
        </li>

        <!-- Faq -->
        <li>
          <g-link to="/faq/">Faq</g-link>
        </li>

        <!-- Staff -->
        <li>
          <g-link to="/staff/">Staff</g-link>
        </li>

        <!-- Ban appeal -->
        <li>
          <g-link to="/appeal/">Ban appeal</g-link>
        </li>

        <!-- Patreon -->
        <li>
          <g-link to="/patreon/">Patreon</g-link>
        </li>
      </ul>

      <hr class="md:hidden m-5" />

      <ul class="flex flex-row">
        <!-- Join Us -->
        <li class="px-2 m-auto">
          <a href="https://discord.gg/BmZFfB6">Join Us</a>
        </li>

        <!-- Join Us -->
        <li class="px-2  m-auto">
          <a href="https://discord.gg/BmZFfB6">
            <button
              class="text-default border-0 rounded-full bg-discord py-2 px-4 shadow hover:shadow-md"
            >
              Login with Discord
            </button>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {
      isActive: false,
    }
  },
}
</script>

<style>
.navbar {
  @apply p-4 flex shadow-lg;
}

.navbar li {
  @apply px-2 my-auto;
}
</style>
