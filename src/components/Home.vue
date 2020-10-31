<template>
  <div class="mt-5 container d-flex flex-wrap justify-content-between">
    <div v-for="character in characters" class="rounded custom-card pb-3 shadow m-2" @mouseover="enter(character.id)" @mouseleave="visible = false">
      <img :src="character.image" alt="" class="w-100 rounded-top">
      <p class="mt-2 p-3 text-center">
        {{ character.name }}
      </p>
      <div class="d-flex justify-content-center">
        <transition name="fade">
          <router-link :to="'/detail/' + character.id" class="btn btn-primary mt-5" v-if="visible && id == character.id">Ver más</router-link>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
      characters: [],
      visible: false,
      id: '',
    };
  },
  created() {
    this.$store.state.services.myService.getCharacters().then(response => {
      this.characters = response.data.results;
    });
  },
  methods: {
    enter: function(id) {
      this.id = id;
      this.visible = true;
    }
  }
}
</script>

<style scoped>

  img {
    object-fit: cover;
  }

  p {
    font-weight: bold;
    height: 2em;
  }

  .custom-card {
    width: 30%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

</style>
