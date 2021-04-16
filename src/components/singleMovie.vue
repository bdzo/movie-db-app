<template>
  <div class="single-movie">
    <h2 class="mb-30">Popular</h2>

    <div>
      <img src="" alt="" srcset="">

      <h3></h3>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>

      <button>Add to favorites</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'singleMovie',
  data() {
    return {
      id: this.$route.params.id,
      movieData: {}
    }
  },
  created() {
    
      axios
        .get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US')
        .then(response => {
          console.log(response);
          // let popular = [];
          // popular.push(response.data.results);
        })
        .catch(error => console.log(error))
    
  }
}
</script>