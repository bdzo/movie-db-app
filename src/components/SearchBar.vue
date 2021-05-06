<template>
  <div class="header__search-bar">
    <input 
      type="text" 
      name="search-input" 
      id="search-input" 
      v-model="searchInput" 
      @keydown="searchMovie"
      placeholder="Search for the movie..."
    >

    <div 
      class="header__search-results" 
     :class="{ 'display-none': hideSearchResults }"
    >
      <ul>
        <li 
          v-for="searchResult in this.searchResults" 
          :key="searchResult.id" 
          class="header__search-result"
        >
          <router-link :to="'/movie/' + searchResult.id">
            {{ searchResult.title.substring(0,60) + "..." }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SearchBar',
  data() {
    return {
      searchInput: [],
      hideSearchResults: Boolean
    }
  },

  methods: {
    searchMovie() {
      this.$store.dispatch('getSearchResults', this.searchInput);

      if (this.searchInput.length == 0) this.hideSearchResults = true;
      else this.hideSearchResults = false
    }
  },

  computed: {
    ...mapState([
      'searchResults'
    ])
  }
}
</script>

<style >
.display-none {
  display: none;
}
</style>