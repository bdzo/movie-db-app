<template>
  <div id="app">

    <header>
      <div class="header__logo">
        <router-link to="/">MovieDB</router-link>
      </div>

      <div class="header__search-bar">
        <input type="text" name="" id="" placeholder="Search for the movie...">
      </div>
      
      <nav class="header__nav"> 
        <router-link to="/toprated">Top rated</router-link>
        <router-link to="/upcoming">Upcoming</router-link>
        <router-link to="/favorites">Favorites</router-link>
      </nav>
    </header>

    <div class="view__main-wrapper">
      <router-view/>
    </div>

    <footer>
      <p>2021. Copyright. All rights reserved. MoviesDB</p>
    </footer>
  </div>
</template>

<style>
@import 'assets/css/style.css';
@import 'assets/css/responsive.css';
</style>
