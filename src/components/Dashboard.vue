<script setup>
import OnsDoel from './dashboard_components/OnsDoel.vue';
import Verbruik from './dashboard_components/Verbruik.vue';
import ExtraInfo from './dashboard_components/ExtraInfo.vue';
</script>

<template>
    <div class="dashboard-component">
        <OnsDoel></OnsDoel>
        <Verbruik></Verbruik>
        <ExtraInfo></ExtraInfo>
    </div>
</template>

<style scoped>
    .dashboard-component {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100vw;
        height: 88vh;
    }
</style>
