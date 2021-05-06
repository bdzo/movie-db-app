<template>
  <div class="single-movie">

    <div class="single-movie__poster">
      <img :src="`https://image.tmdb.org/t/p/w500/${singleMovieData.poster_path}`" alt="" srcset="">
    </div>

    <div class="single-movie__details">
      <h2>{{ singleMovieData.title }}</h2>
      <p class="single-movie__genre mb-30"><span v-for="genre in singleMovieData.genres" :key="genre.id">{{ genre.name }} </span></p>

      <p class="mb-30">{{ singleMovieData.overview }}</p>

      <p>Rating: <strong>{{ singleMovieData.vote_average }}</strong></p>
      <p>Release date: <strong>{{ singleMovieData.release_date }}</strong></p>

      <AppButton 
        title="Add to favorites"
        @method="addToFavorites"
      ></AppButton>
    </div>

  </div>
</template>

<script>
import { mapState} from 'vuex'
import AppButton from '../components/AppButton.vue'

export default {
  name: 'SingleMovie',
  components: {
    AppButton
  },
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  created() {
    this.$store.dispatch('getSingleMovieData', this.id);
  },
  computed: {
    ...mapState(['singleMovieData'])
  },
  methods: {
    addToFavorites() {
      let addToFavoritesData = {
        'id': this.id,
        'name': this.$store.state.singleMovieData.title,
        'posterPath': this.$store.state.singleMovieData.poster_path,


        // TODO: add values for 'name' and 'posterPath'
      };
      
      let favoritesData = [];
      favoritesData = JSON.parse(localStorage.getItem('favoritesData')) || [];
      console.log(favoritesData);

      favoritesData.push(addToFavoritesData);
      localStorage.setItem('favoritesData', JSON.stringify(favoritesData));
    }
  }
}
</script>