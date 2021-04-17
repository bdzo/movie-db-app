<template>
  <div class="upcoming">
    <h2 class="mb-30">Upcoming</h2>

    <div v-for="upcomin in upcomings" :key="upcomin.id" class="view__grid-wrapper">
      <div href="" class="view__grid-item" v-for="upcoming in upcomin" :key="upcoming.id">
        <router-link v-bind:to="'/movie/' + upcoming.id">
          <div class="view__grid-item-details">
            <h3>{{ upcoming.title }}</h3>
            <p>{{ upcoming.overview.substring(0,220) + "..." }}</p>
          </div>

          <img :src="`https://image.tmdb.org/t/p/w500` + upcoming.poster_path" alt="" srcset="">
        </router-link>
      </div>
    </div>

    <button @click="loadMore(pageNum)" class="btn-primary">Load More</button>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Upcoming',
  data () {
    return {
      pageNum: 1
    }
  },
  mounted () {
    this.$store.dispatch('setUpcoming', this.pageNum);
  },
  methods: {
    loadMore() {
      this.pageNum++;
      return this.$store.dispatch('setUpcoming', this.pageNum);
    }
  },
  computed: {
    ...mapState([
      'upcomings'
    ])
  }
}
</script>