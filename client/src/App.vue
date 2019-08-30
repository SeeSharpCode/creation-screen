<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand href="#">Creation Screen</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item v-if="accessToken === 'null'" to="/register">Register</b-nav-item>
            <b-nav-item v-if="accessToken === 'null'" to="/login">Login</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <b-navbar-nav v-if="accessToken !== 'null'" class="ml-auto">
          <b-nav-item-dropdown right>
            <template slot="button-content">{{username}}</template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="logOut">Log Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-container>
    </b-navbar>

    <b-container class="mt-3">
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      get username() {
        return localStorage.getItem('username');
      },
      set username(value) {
        localStorage.setItem('username', value);
      },
      get accessToken() {
        return localStorage.getItem('accessToken');
      },
      set accessToken(value) {
        localStorage.setItem('accessToken', value);
      }
    }
  },
  methods: {
    logOut() {
      this.accessToken = null;
      this.username = null;
    }
  }
}
</script>

<style>
</style>
