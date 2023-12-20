<script>
import MapboxMap from '../components/MapboxMap.vue';
import buildings from '../data/buildings'
export default {
  name: "Grid",
  data(){
    return {
      buildings: buildings
    }
  },

  components:{
    MapboxMap
  }
}
</script>

<template>
  <p>The grid</p>
  <MapboxMap :buildings="buildings"/>
</template>

<style lang="scss">

</style>
