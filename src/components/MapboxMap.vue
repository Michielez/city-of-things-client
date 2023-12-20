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
    props: {
        buildings: {
            type: Array,
            default: () => []
        }
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
            zoom: 15.5
        })
        this.map.on('load', () => {
            this.addMarkers();
        })
    },
    methods: {
        addMarkers() {
            this.buildings.forEach(building => {
                if (building.location){
                    console.log(building.location)
                    new mapboxgl.Marker()
                    .setLngLat([building.location.lng, building.location.lat])
                    .setPopup(new mapboxgl.Popup().setHTML(`<h3>${building.name}</h3>`))
                    .addTo(this.map)
                }
            });
        }
    }

}
</script>

<style scoped>

.mapContainer {
  height: 60vh;
  width: 80%;
  margin: 0 auto;
  }
</style>