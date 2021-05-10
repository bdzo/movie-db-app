<template>
  <div class="popular">
    <h2 class="mb-30">Popular</h2>

    <AppCard
      :card-data=popular
    ></AppCard>

    <AppButton
      title="Load more"
      @method="loadMore(pageNum)"
      class="btn-primary mrl-auto mtb-20"
    ></AppButton>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppButton from '../components/AppButton'
import AppCard from '../components/AppCard'

export default {
  name: 'Popular',
  components: {
    AppButton,
    AppCard
  },

  data() {
    return {
      pageNum: 1
    }
  },

  mounted() {
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