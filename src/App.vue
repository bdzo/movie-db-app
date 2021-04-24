<template>
  <div id="app">
    <Header></Header>

    <div class="view__main-wrapper">
      <router-view/>
    </div>

    <Footer></Footer>
  </div>
</template>

<style>
@import 'assets/css/style.css';
@import 'assets/css/responsive.css';
</style>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
 components: {
   Header,
   Footer
 } 
}
</script>