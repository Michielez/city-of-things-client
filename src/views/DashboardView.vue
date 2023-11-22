<template>
    <main>
        <OnsDoel></OnsDoel>
        <Verbruik></Verbruik>
        <ExtraInfo></ExtraInfo>
    </main>
</template>

<script>
import OnsDoel from '../components/dashboard_components/OnsDoel.vue';
import Verbruik from '../components/dashboard_components/Verbruik.vue';
import ExtraInfo from '../components/dashboard_components/ExtraInfo.vue';
export default {
    name: 'DashboardView',
    components: {
        OnsDoel,
        Verbruik,
        ExtraInfo
    }
}
</script>

<style scoped>
    main {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100vw;
        height: 88vh;
    }
</style>