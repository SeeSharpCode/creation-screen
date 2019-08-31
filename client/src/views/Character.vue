`<template>
  <div>
    <h2>{{character.name}}</h2>
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
