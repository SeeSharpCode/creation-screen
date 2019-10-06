<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" style="font-family: serif">
            <h4 class="title is-4 has-text-white">
              <i class="fas fa-sliders-h" style="margin-right: 2px;"></i>
              CS
            </h4>
          </a>
          
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">Home</a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Select a game...</a>

              <div class="navbar-dropdown">
                <a class="navbar-item"
                  v-for="game in games.entities"
                  v-bind:key="game.properties.name">
                  <img :src="game.links[0].href" style="margin-right: 5px;" />
                  {{game.properties.name}}
                </a>
                <!-- <a class="navbar-item">Skyrim</a>
                <a class="navbar-item">Fallout 4</a>
                <a class="navbar-item">Oblivion</a> -->
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div v-if="!username" class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">Log in</a>
              </div>
            </div>

            <div v-if="username" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">{{username}}</a>

              <div class="navbar-dropdown">
                <a class="navbar-item">Profile</a>
                <a class="navbar-item">Log out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created: async function() {
    this.home = (await axios.get('/api')).data;
    this.games = (await axios.get('/api/games')).data;
  },
  data() {
    return {
      home: {},
      games: {},
      selectedGame: 'Skyrim',
      get username() {
        return localStorage.getItem("username");
      },
      set username(value) {
        localStorage.setItem("username", value);
      },
      get accessToken() {
        return localStorage.getItem("accessToken");
      },
      set accessToken(value) {
        localStorage.setItem("accessToken", value);
      }
    };
  },
  methods: {
    logOut() {
      this.accessToken = null;
      this.username = null;
    }
  }
};
</script>

<style>
</style>
