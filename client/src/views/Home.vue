<template>
  <div>
    <h2>Popular Builds</h2>
    <CharacterCard
      v-for="character in characters"
      v-bind:key="character.name"
      v-bind:character="character"
      style="float: left;"
      class="mr-2"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterCard from "@/components/CharacterCard.vue";
import axios from 'axios';

export default {
  components: {
    CharacterCard
  },
  created: function() {
    axios.get('/api/characters', { headers: { 'Authorization': 'bearer ' + localStorage.getItem('accessToken') } })
      .then(response => {
        this.characters = response.data;
      })
      .catch(error => console.log(error));
  },
  data: function() {
    return {
      characters: []
    }
  }
};
</script>
