<template>
  <nav
    class="navbar p-4 flex flex-wrap md:flex-no-wrap shadow-lg overflow-hidden"
  >
    <div class="-mt-2 flex justify-around w-full md:w-auto">
      <!-- Brand -->
      <g-link to="/">
        <g-image
          alt="Logo image"
          src="@/assets/img/logo_white.png"
          height="64"
          width="64"
          quality="80"
        />
      </g-link>

      <!-- Navigation bar toggler -->
      <button class="md:hidden p-2 -mb-3" @click="toggleNav">
        <svg
          class="icon h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <!-- Links -->
    <div
      class="w-full overflow-hidden md:flex md:justify-between"
      :class="isActive ? 'block' : 'hidden'"
    >
      <!-- Right -->
      <ul class="flex flex-col md:flex-row ml-2">
        <!-- Separator -->
        <hr class="md:hidden m-5" />

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

      <!-- Separator -->
      <hr class="md:hidden m-5" />

      <ul class="flex flex-row">
        <!-- Join Us -->
        <li class="m-auto">
          <a href="https://discord.gg/BmZFfB6">Join Us</a>
        </li>

        <!-- Join Us -->
        <li class="m-auto">
          <a href="https://discord.gg/BmZFfB6">
            <button
              class="text-default-text flex border-0 rounded-full bg-discord py-2 px-4 shadow hover:shadow-md"
            >
              <svg
                class="icon w-6 h-6 pr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 245 240"
              >
                <path
                  d="M104 104c-5 0-10 5-10 11s5 11 10 11c6 0 11-5 11-11s-5-11-11-11zm37 0c-6 0-10 5-10 11s4 11 10 11 10-5 10-11-4-11-10-11z"
                />
                <path
                  d="M190 20H56c-12 0-21 9-21 21v135c0 11 9 20 21 20h113l-5-18 12 12 13 11 21 19V41c0-12-9-21-20-21zm-39 131l-7-9c13-3 18-11 18-11l-11 5c-5 3-10 4-15 5a70 70 0 01-40-5c-3 0-5-2-8-3l-1-1-3-2c0 1 5 9 18 12l-7 9c-22-1-30-16-30-16 0-32 14-58 14-58 14-11 28-10 28-10l1 1c-18 5-26 13-26 13l6-3c10-5 19-6 22-6h2a85 85 0 0151 9s-8-8-25-13l1-1s14-1 28 10c0 0 14 26 14 58 1 0-8 15-30 16z"
                />
              </svg>

              Login
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

  methods: {
    toggleNav() {
      this.isActive = !this.isActive
      console.log('hi')
    },
  },
}
</script>
