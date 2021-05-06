<template>
  <div id="app">
    <AppHeader></AppHeader>

    <div class="view__main-wrapper">
      <router-view/>
    </div>

    <AppFooter></AppFooter>
  </div>
</template>

<style>
@import 'assets/css/style.css';
@import 'assets/css/responsive.css';
</style>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default {
 components: {
   AppHeader,
   AppFooter
 } 
}
</script>