<template>
  <header>
    <div class="header__logo">
      <router-link to="/">MovieDB</router-link>
    </div>

    <SearchBar></SearchBar>
    
    <nav class="header__nav"> 
      <router-link to="/toprated">Top rated</router-link>
      <router-link to="/upcoming">Upcoming</router-link>
      <router-link to="/favorites">Favorites</router-link>
    </nav>
  </header>
</template>

<script>
import SearchBar from "./SearchBar";
export default {
  name: 'AppHeader',
  components: {
    SearchBar
  }
}
</script>