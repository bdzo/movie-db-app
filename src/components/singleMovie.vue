<template>
  <div class="single-movie">

    <div>
      <img :src="'https://image.tmdb.org/t/p/w500/' + singleMovieData.poster_path" alt="" srcset="">

      <h3>{{ singleMovieData.title }}</h3>
      <p>{{ singleMovieData.genres }}</p>
      <p>{{ singleMovieData.overview }}</p>
      <p>Rating: {{ singleMovieData.vote_average }}</p>
      <p>Release date: {{ singleMovieData.release_date }}</p>

      <button class="btn-primary">Add to favorites</button>
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