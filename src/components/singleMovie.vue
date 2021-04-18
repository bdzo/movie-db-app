<template>
  <div class="single-movie">

    <div class="single-movie__poster">
      <img :src="'https://image.tmdb.org/t/p/w500/' + singleMovieData.poster_path" alt="" srcset="">
    </div>

    <div class="single-movie__details">
      <h2>{{ singleMovieData.title }}</h2>
      <p class="single-movie__genre mb-30"><span v-for="genre in singleMovieData.genres" :key="genre.id">{{ genre.name }} </span></p>

      <p class="mb-30">{{ singleMovieData.overview }}</p>

      <p>Rating: <strong>{{ singleMovieData.vote_average }}</strong></p>
      <p>Release date: <strong>{{ singleMovieData.release_date }}</strong></p>

      <button class="btn-primary mtb-20">Add to favorites</button>
    </div>

  </div>
</template>

<script>
import { mapState} from 'vuex'

export default {
  name: 'SingleMovie',
  data() {
    return {
      id: this.$route.params.id
    }
  },
  created() {
    this.$store.dispatch('getSingleMovieData', this.id);
  },
  computed: {
    ...mapState([
      'singleMovieData'
    ])
  }
}
</script>