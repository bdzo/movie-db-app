<template>
  <div class="popular">
    <h2 class="mb-30">Popular</h2>

    <div v-for="populars in popular" :key="populars.id" class="view__grid-wrapper">
      <div class="view__grid-item" v-for="popularItem in populars" :key="popularItem.id">
        <router-link v-bind:to="'/movie/' + popularItem.id">

          <div class="view__grid-item-details">
            <h3>{{ popularItem.title }}</h3>
            <p>{{ popularItem.overview.substring(0,220) + "..." }}</p>
          </div>

          <img :src="`https://image.tmdb.org/t/p/w500` + popularItem.poster_path" alt="" srcset="">
        </router-link>
      </div>
    </div>

    <button @click="loadMore(pageNum)" class="btn-primary mrl-auto mtb-20">Load More</button>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Popular',
  data () {
    return {
      pageNum: 1
    }
  },
  mounted () {
    this.$store.dispatch('setPopular', this.pageNum);
  },
  methods: {
    loadMore() {
      this.pageNum++;
      return this.$store.dispatch('setPopular', this.pageNum);
    }
  },
  computed: {
    ...mapState([
      'popular'
    ])
  }
}
</script>