<template>
    <main>
        <OnsDoel></OnsDoel>
        <Verbruik></Verbruik>
        <ExtraInfo></ExtraInfo>
    </main>
</template>

<script>
import OnsDoel from '../components/dashboard/OnsDoel.vue';
import Verbruik from '../components/dashboard/Verbruik.vue';
import ExtraInfo from '../components/dashboard/ExtraInfo.vue';
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
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    height: 85vh;
    display: flex;
    justify-content: space-between;
    width: 90%;
}
    /* main {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100vw;
        height: 88vh;
    } */
</style>