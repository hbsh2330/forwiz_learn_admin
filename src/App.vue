<script setup>
import SideBar from "@/views/layout/SideBar.vue";
import Header from "@/views/layout/Header.vue";
import Footer from "@/views/layout/FooterView.vue";
</script>

<template>
  <div class="wrapper">
    <SideBar />
    <div class="main-panel">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
