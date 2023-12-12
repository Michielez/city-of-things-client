<script setup>
import { ref, onMounted } from 'vue';

const DePenta = {
  fullname: 'De Penta',
  shortname: 'Penta',
  pricetoday: '192.24',
  priceweek: '1024.45',
  pricemonth: '2624.16',
  realtime: '104kw',
};

const KWEA = {
  fullname: 'KWE.A',
  shortname: 'KWE.A',
  pricetoday: '192.24',
  priceweek: '1024.45',
  pricemonth: '2624.16',
  realtime: '104kw',
};

const getLocalStorageData = () => {
  const selectedBuilding = localStorage.getItem('selectedBuilding');
  return selectedBuilding === 'De Penta' ? DePenta : KWEA;
};

const data = ref(getLocalStorageData());

onMounted(() => {
  window.addEventListener('storage', () => {
    data.value = getLocalStorageData();
  });
});


</script>

<template>
  <div>
    <p>Full Name: {{ data.fullname }}</p>
    <p>Short Name: {{ data.shortname }}</p>
    <p>Price Today: {{ data.pricetoday }}</p>
    <p>Price Week: {{ data.priceweek }}</p>
    <p>Price Month: {{ data.pricemonth }}</p>
    <p>Real Time: {{ data.realtime }}</p>
  </div>
</template>

<style scoped lang="scss">
</style>
