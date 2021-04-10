<template>
  <div class="top-rated">
    <h2 class="mb-30">Top rated</h2>

    <div class="view__grid-wrapper">
      <div v-for="topRate in topRated" :key="topRate.id">
        <a href="">
          <img :src="`https://image.tmdb.org/t/p/w500` + topRate.poster_path" alt="" srcset="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Toprated',
  data () {
    return {
      topRated: null
    }
  },
  mounted () {
    axios
      .get('https://api.themoviedb.org/3/movie/top_rated?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US&page=1')
      .then(response => (this.topRated = response.data.results))
      .catch(error => console.log(error))
  }
}
</script>