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

<style scoped>
main {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>
