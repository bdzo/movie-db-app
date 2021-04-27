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
      console.log(favoritesData);

      // for (let i = 0; i < favoritesData.length; i++) {
      //   console.log(addToFavoritesData.id, favoritesData[i].id);
        
      //   if (addToFavoritesData.id != favoritesData[i].id) {
      //     favoritesData.push(addToFavoritesData);
      //     localStorage.setItem("favoritesData", JSON.stringify(favoritesData));
      //     alert('Movie added to favorites.');
      //   } else {
      //     alert('Movie already in favorites.');
      //   }
      // }

      favoritesData.push(addToFavoritesData);
      localStorage.setItem("favoritesData", JSON.stringify(favoritesData));
    }
  }
}
</script>