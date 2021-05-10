<template>
  <div class="top-rated">
    <h2 class="mb-30">Top rated</h2>

    <AppCard
      :card-data=topRated
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
  name: 'Toprated',
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