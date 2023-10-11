<script setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref([]);

axios
  .get('http://localhost:3000/api/query')
  .then(response => {
    data.value = response.data;
  })
  .catch(error => {
    console.error('Error:', error);
  });
</script>

<template>
  <div>
    <h1>Data from InfluxDB</h1>
    <ul>
      <li v-for="(item, index) in data" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
/* Your component styles here */
</style>
