<template>
    <button @click="addToFavorites()" class="btn-primary mtb-20">Add to favorites</button>
</template>

<script>
export default {
  name: 'AddToFavorites',
  props: {
    id: String,
    name: String,
    posterPath: String
  },
  
  methods: {
    addToFavorites() {
      let addToFavoritesData = {
        "id": this.id,
        "name": this.name,
        "posterPath": this.posterPath
      };
      
      let favoritesData = [];
      favoritesData = JSON.parse(localStorage.getItem('favoritesData')) || [];

      favoritesData.push(addToFavoritesData);
      localStorage.setItem("favoritesData", JSON.stringify(favoritesData));
    }
  }
}
</script>