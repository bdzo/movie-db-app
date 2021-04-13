<template>
  <div class="top-rated">
    <h2 class="mb-30">Top rated</h2>

    <div v-for="topRateds in topRated" :key="topRateds.id"  class="view__grid-wrapper">
      <a href="" class="view__grid-item" v-for="topRate in topRateds" :key="topRate.id">
        <div class="view__grid-item-details">
          <h3>{{ topRate.title }}</h3>
          <p>{{ topRate.overview.substring(0,220) + "..." }}</p>
        </div>

        <img :src="`https://image.tmdb.org/t/p/w500` + topRate.poster_path" alt="" srcset="">
      </a>
    </div>

    <button @click="loadMore(pageNum)" class="btn-primary">Load More</button>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Toprated',
  data () {
    return {
      pageNum: 1
    }
  },
  mounted () {
    this.$store.dispatch('setTopRated', this.pageNum);
  },
  methods: {
    loadMore() {
      this.pageNum++;
      return this.$store.dispatch('setTopRated', this.pageNum);
    }
  },
  computed: {
    ...mapState([
      'topRated'
    ])
  }
}
</script>