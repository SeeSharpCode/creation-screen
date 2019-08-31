<template>
  <b-card
    :title="character.name"
    v-bind:sub-title="subtitle"
    :img-src="character.imageUrl"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-badge
      v-for="skill in character.skills"
      v-bind:key="skill"
      class="mr-1">{{skill}}
    </b-badge>

    <b-card-text>
      {{character.shortDescription}}
    </b-card-text>

    <b-link to="#" variant="primary">View</b-link>
  </b-card>
</template>

<script>
export default {
  computed: {
    subtitle() {
      return `By ${this.character.author}`;
    }
  },
  props: [
    'character'
  ]
}
</script>
