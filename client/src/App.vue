<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: async function() {
    this.home = (await axios.get("/api")).data;
    this.games = (await axios.get("/api/games")).data;
  },
  data() {
    return {
      home: {},
      games: {},
      selectedGame: "Skyrim",
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
