<template>
    <main>
        <h1>dynamic loading of building</h1>
        <p>{{ building.url }}</p>
    </main>
</template>
<script>

import data from '../data/buildings';

export default {
    name: "BuildingView",
    data() {
        building: {}
    },
    watch: {
        '$route.params.name'(newUrl) {
            this.updateBuilding(newUrl)
        }
    },
    created() {
        const url = this.$route.params.name;
        this.building = data.find((building) => building.url === url);
    },
    methods: {
        updateBuilding(newUrl) {
            this.building = data.find((building) => building.url === newUrl);
        }
    }
}
</script>
<style lang="scss">
    
</style>