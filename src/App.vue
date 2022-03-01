<template>
  <div id="app">
    <Header />
    <nav />
    <about />
    <experience />
    <porfolio />
    <contact />
    <footer />
  </div>
</template>

<script>
import About from "./components/about/About.vue";
import Contact from "./components/contact/Contact.vue";
import Experience from "./components/experience/Experience.vue";
import Header from "./components/header/Header.vue";
import Nav from "./components/nav/Nav.vue";
import Porfolio from "./components/porfolio/Porfolio.vue";
export default {
  name: "App",
  components: {
    About,
    Header,
    Experience,
    Porfolio,
    Contact,
  },
  Nav,
};
</script>

<style>
</style>
