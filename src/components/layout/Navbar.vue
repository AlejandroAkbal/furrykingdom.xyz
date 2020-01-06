<template>
  <nav class="py-2 px-5">
    <div class="flex flex-row justify-between">
      <!-- Right -->
      <ul class="flex flex-row">
        <!-- Home -->
        <li class="px-2">
          <g-link to="/home/">Home</g-link>
        </li>

        <!-- Browse Fursonas -->
        <li class="px-2">
          <g-link to="/browse/">Browse Fursonas</g-link>
        </li>

        <!-- Rules -->
        <li class="px-2">
          <g-link to="/rules/">Rules</g-link>
        </li>

        <!-- Events -->
        <li class="px-2">
          <g-link to="/events/">Events</g-link>
        </li>

        <!-- Faq -->
        <li class="px-2">
          <g-link to="/faq/">Faq</g-link>
        </li>

        <!-- Staff -->
        <li class="px-2">
          <g-link to="/staff/">Staff</g-link>
        </li>

        <!-- Ban appeal -->
        <li class="px-2">
          <g-link to="/appeal/">Ban appeal</g-link>
        </li>

        <!-- Patreon -->
        <li class="px-2">
          <g-link to="/patreon/">Patreon</g-link>
        </li>
      </ul>

      <ul class="flex flex-row">
        <!-- Join Us -->
        <li class="px-2">
          <a href="https://discord.gg/BmZFfB6">Join Us</a>
        </li>

        <!-- Join Us -->
        <li class="px-2">
          <a href="https://discord.gg/BmZFfB6">Join Us</a>
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
