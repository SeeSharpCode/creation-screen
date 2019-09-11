`<template>
  <div>
    <h2>{{character.name}}</h2>
    <h5 class="text-muted">{{character.author}}</h5>

    <hr />

    <h4>Description</h4>
    <h5>Backstory</h5>
    <p>{{character.description.backstory}}</p>
    <h5>Playstyle</h5>
    <p>{{character.description.playstyle}}</p>
    <h5>Questlines</h5>
    <p>{{character.description.questlines}}</p>

    <hr />

    <h4>Play Guide</h4>
    <
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "home",
  props: ['id'],
  created: function() {
    console.log('doing stuff');
    axios.get(`/api/characters/${this.id}`, { headers: { 'Authorization': 'bearer ' + localStorage.getItem('accessToken') } })
      .then(response => {
        console.log(response.data);
        this.character = response.data;
      })
      .catch(error => console.log(error));
  },
  data: function() {
    return {
      character: {}
    }
  }
};
</script>
