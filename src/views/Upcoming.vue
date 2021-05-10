<template>
  <div class="upcoming">
    <h2 class="mb-30">Upcoming</h2>

    <AppCard
      :card-data=upcomings
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
  name: 'Upcoming',
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