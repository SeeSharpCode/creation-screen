<template>
  <div>
    <CharacterCard
      v-for="character in characters"
      :key="character.id"
      :title="character.name"
      :shortDescription="character.shortDescription"
      :author="character.author"
      :skills="['one-handed', 'fresh']"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterCard from "@/components/CharacterCard.vue";
import axios from 'axios';

export default {
  name: "home",
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
