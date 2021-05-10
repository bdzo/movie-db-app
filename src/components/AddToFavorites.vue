<template>
    <button @click="addToFavorites({
        id: id,
        name: name,
        posterPath: posterPath
      })" class="btn-primary mtb-20">Add to favorites</button>
</template>

<script>
import { StorageService } from '../services/storage'
export default {
  name: 'AddToFavorites',
  props: {
    id: String,
    name: String,
    posterPath: String
  },

  data() {
    const storage = new StorageService( 'favorites' )
    return {
      favoritesStorage: storage,
    }
  },
  
  methods: {
    addToFavorites(item) {
      this.favoritesStorage.create(item)
    }
  }
}
</script>