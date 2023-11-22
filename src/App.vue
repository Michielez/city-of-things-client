<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <div class="nav-bar">
    <Navbar></Navbar>
  </div>
  <div class="main-content">
    <router-view></router-view>
  </div>
  
</template>

<style scoped lang="scss">

body {
  font-family: 'Poppins', sans-serif;
}
.main-content {
  display: flex;
  height: 88vh;
  width: 100%;

  background-color: #EDEDFD;
}

</style>
