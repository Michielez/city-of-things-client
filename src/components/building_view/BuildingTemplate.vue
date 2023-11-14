<script setup>
import { ref } from 'vue';

const props = defineProps(['fullname', 'shortname', 'pricetoday', 'priceweek', 'pricemonth', 'realtime']);
</script>

<template>
  <div>
    <p>Full Name: {{ fullname }}</p>
    <p>Short Name: {{ shortname }}</p>
    <p>Price Today: {{ pricetoday }}</p>
    <p>Price Week: {{ priceweek }}</p>
    <p>Price Month: {{ pricemonth }}</p>
    <p>Real Time: {{ realtime }}</p>
  </div>
</template>

<style scoped lang="scss">
</style>
