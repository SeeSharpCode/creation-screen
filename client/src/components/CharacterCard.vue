<template>
  <b-card
    :title="title"
    v-bind:sub-title="subtitle"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-badge v-for="skill in skills" v-bind:key="skill" class="mr-1">{{skill}}</b-badge>

    <b-card-text>
      {{shortDescription}}
    </b-card-text>

    <b-link to="#" variant="primary">View</b-link>
  </b-card>
</template>

<script>
export default {
  computed: {
    subtitle() {
      return `By ${this.username}`;
    }
  },
  props: [
    'title',
    'shortDescription',
    'username',
    'skills'
  ]
}
</script>
