<template>
  <div class="container mt-5">
    <div class="shadow rounded rounded pb-2">
      <img :src="character.image" alt="" class="mb-5 w-100">
      <div class="px-5">
        <p>Name: {{character.name }}</p>
        <p>Status: {{character.status }}</p>
        <p>Species: {{character.species }}</p>
        <p>Type: {{character.type }}</p>
        <p>Gender: {{character.gender }}</p>
        <p>Origin: {{character.origin.name }}</p>
        <p>Location: {{character.location.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data: function() {
    return {
      character: {},
    };
  },
  created() {
    let id = this.$route.params.id;

    this.$store.state.services.myService.getCharacter(id).then(response => {
      this.character = response.data;
    });
  }
}
</script>

<style scoped>
  img {
    height: 35em;
    object-fit: cover;
  }
</style>
