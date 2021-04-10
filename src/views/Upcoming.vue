<template>
  <div class="upcoming">
    <h2 class="mb-30">Upcoming</h2>

    <div class="view__grid-wrapper">
      <div v-for="upcoming in upcomings" :key="upcoming.id">
        <a href="">
          <img :src="`https://image.tmdb.org/t/p/w500` + upcoming.poster_path" alt="" srcset="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Upcoming',
  data () {
    return {
      upcomings: null
    }
  },
  mounted () {
    axios
      .get('https://api.themoviedb.org/3/movie/upcoming?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US&page=1')
      .then(response => (this.upcomings = response.data.results))
      .catch(error => console.log(error))
  }
}
</script>