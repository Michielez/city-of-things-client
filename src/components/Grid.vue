<script>
import LeafletMap from '../components/LeafletMap.vue';
import buildings from '../data/buildings'
export default {
  name: "Grid",
  data(){
    return {
      buildings: buildings
    }
  },

  components:{
    LeafletMap  
  }
}
</script>

<template>
  <div class="container">
    <LeafletMap :buildings="buildings"/>

  </div>
</template>

<style lang="scss">
  .container{
    width: 92%;
    margin: 0 auto;
    height: 82vh;
  }
</style>
