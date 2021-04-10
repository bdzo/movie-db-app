<template>
  <div class="upcoming">
    <h2 class="mb-30">Most popular</h2>

    <div class="view__grid-wrapper">
      <div v-for="mostPopular in popular" :key="mostPopular.id">
        <a href="">
          <img :src="`https://image.tmdb.org/t/p/w500` + mostPopular.poster_path" alt="" srcset="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Mostpopular',
  data () {
    return {
      popular: null
    }
  },
  mounted () {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US&page=1')
      .then(response => (this.popular = response.data.results))
      .catch(error => console.log(error))
  }
}
</script>