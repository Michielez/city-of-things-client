<template>
    <main>
        <Building :building="building" />
    </main>
</template>
<script>

import data from '../data/buildings';
import Building from '../components/Building.vue';
export default {
    name: "BuildingView",
    data() {
        return {
            building: {}
        }
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
    },
    components: {
        Building,
    }
}
</script>
<style lang="scss">
    
</style>