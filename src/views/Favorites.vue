<template>
  <div class="top-rated">
    <h2 class="mb-30">Favorites</h2>

    <div class="favorites">
      <ul>
        <li v-for="favoritItem in this.favoritesData" :key="favoritItem.id">
          <router-link v-bind:to="'/movie/' + favoritItem.id" class="favorites__movie-details">
            <img :src="'https://image.tmdb.org/t/p/w500/' + favoritItem.posterPath" alt="">
            <p>{{ favoritItem.name }}</p>
          </router-link>

          <button id="remove-favorited" @click="removeFavoritedItem(favoritItem.id)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favorites',
  data() {
    return {
      favoritesData: null
    }
  },

  created() {
    let favoritesStorageData = localStorage.getItem('favoritesData');
    this.favoritesData = JSON.parse(favoritesStorageData);
  },

  methods: {
    removeFavoritedItem(favoritedItemId) {

      for (let i = 0; i < this.favoritesData.length; i++) {        
        if (favoritedItemId == this.favoritesData[i].id) {
          let movieIndex = this.favoritesData.indexOf(this.favoritesData[i]);
          this.favoritesData.splice(movieIndex, 1);

          JSON.parse(localStorage.getItem('favoritesData'));
          localStorage.setItem("favoritesData", JSON.stringify(this.favoritesData));

          alert('Item removed from favorites');
        }
      }   
    }
    
  }
}
</script>