<template>
  <div class="upcoming">
    <h2 class="mb-30">Upcoming</h2>

    <div class="view__grid-wrapper">
      <a href="" class="view__grid-item" v-for="upcoming in upcomings" :key="upcoming.id">
        <div class="view__grid-item-details">
          <h3>{{ upcoming.title }}</h3>
          <p>{{ upcoming.overview.substring(0,220) + "..." }}</p>
        </div>

        <img :src="`https://image.tmdb.org/t/p/w500` + upcoming.poster_path" alt="" srcset="">
      </a>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Upcoming',
  mounted () {
    this.$store.dispatch('setUpcoming');
  },
  computed: {
    ...mapState([
      'upcomings'
    ])
  }
}
</script>