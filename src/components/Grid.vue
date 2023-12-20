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
  <div class="container">
    <MapboxMap :buildings="buildings"/>

  </div>
</template>

<style lang="scss">
  .container{
    width: 92%;
    margin: 0 auto;
    height: 82vh;
  }
</style>
