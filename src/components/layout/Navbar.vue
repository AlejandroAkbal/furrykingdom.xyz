<template>
  <nav class="navbar py-2 px-5 border">
    <div class="flex justify-between">
      <!-- Right -->
      <ul class="flex">
        <!-- Home -->
        <li>
          <g-link to="/home/">Home</g-link>
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

      <ul class="flex">
        <!-- Join Us -->
        <li class="px-2 my-auto">
          <a href="https://discord.gg/BmZFfB6">Join Us</a>
        </li>

        <!-- Join Us -->
        <li class="px-2">
          <a href="https://discord.gg/BmZFfB6">
            <button
              class="text-default border rounded-full bg-discord py-2 px-4 shadow"
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
}
</script>

<style lang="scss">
.navbar li {
  @apply px-2 my-auto;
}
</style>
