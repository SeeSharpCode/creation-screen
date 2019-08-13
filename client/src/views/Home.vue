<template>
  <CharacterCard 
    title="Foo"
    shortDescription="Bar"
    username="Breems"
    :skills="['one-handed', 'fresh']"
  />
</template>

<script>
// @ is an alias to /src
import CharacterCard from "@/components/CharacterCard.vue";

export default {
  name: "home",
  components: {
    CharacterCard
  }
};
</script>
