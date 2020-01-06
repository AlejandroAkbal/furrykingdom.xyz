<template>
  <div>
    <b-navbar>
      <!-- Brand logo -->
      <template slot="brand">
        <b-navbar-item tag="g-link" :to="{ path: '/' }">
          <g-image alt="Brand image" src="~/favicon.png" />
        </b-navbar-item>
      </template>

      <!-- Left Navbar content -->
      <template slot="start">
        <!-- Home -->
        <b-navbar-item tag="g-link" :to="{ path: '/' }">
          Home
        </b-navbar-item>

        <!-- Browse -->
        <b-navbar-item tag="g-link" :to="{ path: '/browse' }">
          Browse Fursonas
        </b-navbar-item>

        <!-- Rules -->
        <b-navbar-item tag="g-link" :to="{ path: '/rules' }">
          Rules
        </b-navbar-item>

        <!-- Events -->
        <b-navbar-item tag="g-link" :to="{ path: '/events' }">
          Events
        </b-navbar-item>

        <!-- Faq -->
        <b-navbar-item tag="g-link" :to="{ path: '/faq' }">
          Faq
        </b-navbar-item>

        <!-- Staff -->
        <b-navbar-item tag="g-link" :to="{ path: '/staff' }">
          Staff
        </b-navbar-item>

        <!-- Ban appeal -->
        <b-navbar-item tag="g-link" :to="{ path: '/appeal' }">
          Ban appeal
        </b-navbar-item>

        <!-- Patreon -->
        <b-navbar-item tag="a" href="https://www.patreon.com/furrykingdom">
          Patreon
        </b-navbar-item>
      </template>

      <!-- Right Navbar content -->
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-light">
              Join Us
            </a>
            <a class="button is-primary">
              <strong>Log in with discord</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
