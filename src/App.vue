<script>
import { RouterView } from 'vue-router';

import Header from './components/Header.vue';
export default {
  components: {
    Header
  }
}
</script>

<template>
  <Header></Header>
  <RouterView />
  
</template>

<style scoped lang="scss">

body {
  font-family: 'Poppins', sans-serif;
}

</style>
