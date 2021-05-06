<template>
  <div>
    <div v-for="cardDataItems in cardData" :key="cardDataItems.id" class="cards__grid-wrapper">
      <div class="cards__grid-item" v-for="cardDataItem in cardDataItems" :key="cardDataItem.id">
        <router-link :to="'/movie/' + cardDataItem.id">

          <div class="cards__grid-item-details">
            <h3>{{ cardDataItem.title }}</h3>
            <p>{{ cardDataItem.overview.substring(0,220) + "..." }}</p>
          </div>

          <img :src="`https://image.tmdb.org/t/p/w500` + cardDataItem.poster_path" alt="" srcset="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppCard',
  
  props: {
    'cardData': Array 
  },

  data() {
    return {

    }
  }

}
</script>
