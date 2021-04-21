<template>
  <div class="top-rated">
    <h2 class="mb-30">Favorites</h2>

    <div class="favorites">
      <ul>
        <li v-for="favoritItem in this.favoritesData" :key="favoritItem.id">
          <div class="favorites__movie-details">
            <img :src="'https://image.tmdb.org/t/p/w500/' + favoritItem.posterPath" alt="">
            <p>{{ favoritItem.name }}</p>
          </div>

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
    // TODO: - Remove item from favorites// TODO: - Remove item from favorites
    removeFavoritedItem() { //favoritedItemId
      let getFavoritedMovie = localStorage.getItem('favoritesData');
      getFavoritedMovie = JSON.parse(getFavoritedMovie)

      for(let i = 0; i < getFavoritedMovie.length; i++) {
        console.log('TODO: - Remove item from favorites');


        // let favoritedItemLsId = getFavoritedMovie[i]['id'];
        // if (favoritedItemId[favoritedItemLsId.id] !== -1) {
        //   console.log('true');
        //   // getFavoritedMovie.splice(i, 1);
        // }   

        // if(favoritedItemId == getFavoritedMovie[i]['id']) {
        //   getFavoritedMovie.
        // }

        // console.log(getFavoritedMovie[i]['id']);
        // console.log(favoritedItemId);
        // if (favoritedItemId == getFavoritedMovie.key('id')) {
        //   console.log(favoritedItemId)
        // }
      }

    }
  }
}
</script>