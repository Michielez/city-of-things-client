<template>
    <div ref="mapContainer" class="mapContainer"></div>
</template>

<script>

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import EnergyIcon from './EnergyIcon.vue';
export default {
    name: "MapboxMap",
    components: {
        EnergyIcon
    },
    data() {
        return {
            map: null
        }
    },
    mounted(){
        mapboxgl.accessToken = "pk.eyJ1IjoibWljaGllbC1zdHJhZ2llciIsImEiOiJjbHBzZnZpN3gwM2Q5Mmpxc2IwZzU1OHB0In0.XTKi-w4ZbMXY7Q2kQ6Jbig";

        this.map = new mapboxgl.Map({
            container: this.$refs.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [3.252,50.8256969], // starting position [lng, lat]
            zoom: 15
        })
    }

}
</script>

<style scoped>

.mapContainer {
  height: 60vh;
  width: 60vw;
  }
</style>