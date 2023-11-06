<script setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref({ location: null, average: null });
const dataList = ref(['1m', '5m', '15m', '1h', '3h', '6h', '12h', '24h', '2d', '7d', '30d']);
const selectedInterval = ref('1h'); // Default selected interval

const getAverage = () => {
  axios
    .get(`http://localhost:3000/api/query?interval=${selectedInterval.value}`)
    .then(response => {
      data.value = response.data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

// Fetch data with default interval when component mounts
axios
  .get(`http://localhost:3000/api/query?interval=${selectedInterval.value}`)
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
    <select v-model="selectedInterval" @change="getAverage">
      <option v-for="(item, index) in dataList" :key="index" :value="item">{{ item }}</option>
    </select>
    <div v-if="data.location !== null">
      <div>KWE.P</div>
      <div>Average: {{ data.average }} kw</div>
    </div>
  </div>
</template>

<style scoped>
div {
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  text-align: center;

}

h1 {
  font-size: 2em;
}
</style>
