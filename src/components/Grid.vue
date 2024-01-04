<script>
import LeafletMap from '../components/LeafletMap.vue';
import buildings from '../data/buildings'
import { onMounted, ref } from 'vue'

export default {
  name: "Grid",
  components: {
    LeafletMap  
  },
  setup() {
    const buildingsData = ref(buildings);

    onMounted(async () => {
      try {
        const url = "https://cms.cot.thiboverbeerst.cloud/api/buildings";
        const response = await fetch(url);

        if (response.ok) {
          buildingsData.value = await response.json();
          console.log(buildingsData.value);
        } else {
          console.error("Failed to fetch buildings:", response.status);
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    });

    return {
      buildings: buildingsData
    };
  }
}
</script>

<template>
  <div class="container">
    <LeafletMap :buildings="buildings"/>
  </div>
</template>

<style lang="scss">
  .container {
    width: 92%;
    margin: 0 auto;
    height: 82vh;
    z-index: 0;
  }
</style>
