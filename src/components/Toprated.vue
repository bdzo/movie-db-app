<template>
  <div class="top-rated">
    <h2 class="mb-30">Top rated</h2>

    <div class="view__grid-wrapper">
      <a href="" class="view__grid-item" v-for="topRate in topRated" :key="topRate.id">
        <div class="view__grid-item-details">
          <h3>{{ topRate.title }}</h3>
          <p>{{ topRate.overview.substring(0,220) + "..." }}</p>
        </div>

        <img :src="`https://image.tmdb.org/t/p/w500` + topRate.poster_path" alt="" srcset="">
      </a>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Toprated',
  mounted () {
    this.$store.dispatch('setTopRated');
  },
  computed: {
    ...mapState([
      'topRated'
    ])
  }
}
</script>