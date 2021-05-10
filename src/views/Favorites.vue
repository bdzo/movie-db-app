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
import { StorageService } from '../services/storage'
export default {
  name: 'Favorites',

  data() {

    const storage = new StorageService('favorites')

    return {
      favoritesStorage: storage,
      favoritesData: storage.index()
    }
  },

  methods: {
    removeFavoritedItem(id) {
      this.favoritesStorage.delete(id)
      this.favoritesData = this.favoritesStorage.index()
      alert('Item removed from favorites');
    }
    
  }
}
</script>