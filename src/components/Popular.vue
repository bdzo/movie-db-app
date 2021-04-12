<template>
  <div class="popular">
    <h2 class="mb-30">Popular</h2>

    <div class="view__grid-wrapper">
      <a href="" class="view__grid-item" v-for="popularItem in popular" :key="popularItem.id">
        <div class="view__grid-item-details">
          <h3>{{ popularItem.title }}</h3>
          <p>{{ popularItem.overview.substring(0,220) + "..." }}</p>
        </div>

        <img :src="`https://image.tmdb.org/t/p/w500` + popularItem.poster_path" alt="" srcset="">
      </a>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Popular',
  mounted () {
    this.$store.dispatch('setPopular');
  },
  computed: {
    ...mapState([
      'popular'
    ])
  }
}
</script>