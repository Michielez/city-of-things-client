<script setup>
import AsideNavBar from './components/AsideNavBar.vue';
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';


</script>

<template>
  <div class="flex-container">
    <AsideNavBar class="aside-nav-bar"></AsideNavBar>
    <div class="right-content">
      <Navbar class="nav-bar"></Navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  min-height: 100vh;
  max-width: 100vw;
}
.aside-nav-bar{
  min-height: 100vh;
}
.right-content{
  width: 100%;
}

</style>
