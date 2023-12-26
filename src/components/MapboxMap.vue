<template>
    <div ref="mapContainer" class="mapContainer"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import greenMarker from '../assets/icons/energy-marker-icon/green.svg'
import orangeMarker from '../assets/icons/energy-marker-icon/orange.svg'
import orangeRedMarker from '../assets/icons/energy-marker-icon/orangered.svg'
import redMarker from '../assets/icons/energy-marker-icon/red.svg'


export default {
    name: "MapboxMap",
    components: {
        
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
    mounted() {
        mapboxgl.accessToken = "pk.eyJ1IjoibWljaGllbC1zdHJhZ2llciIsImEiOiJjbHBzZnZpN3gwM2Q5Mmpxc2IwZzU1OHB0In0.XTKi-w4ZbMXY7Q2kQ6Jbig";

        this.map = new mapboxgl.Map({
            container: this.$refs.mapContainer,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [3.252, 50.8256969], // starting position [lng, lat]
            zoom: 15.5
        })
        this.map.on('load', () => {
            this.addMarkers();
        })
    },
    methods: {
        addMarkers() {
            this.buildings.forEach(building => {
                if (building.location) {
                    const el = document.createElement('div');
                    el.innerHTML = `<img src="${redMarker}" alt="Custom Marker" class="">`;
                    el.style.width = "30px"
                    el.style.height = "30px"


                    const markerHTML = `
                    <h1 style="font-size:1.2rem; margin-bottom:0.5rem;">${building.name}</h1>
                    <ul>
                        <li>
                            <p>
                                <span style="font-weight:bolder;">Verbruik: </span>40KWh
                            </p>
                        </li>
                        <li>
                            <p>
                                <span style="font-weight:bolder;">Duurzaamheid: </span>60%
                            </p>
                        </li>
                    </ul>
                    `

                    new mapboxgl.Marker(el)
                        .setLngLat([building.location.lng, building.location.lat])
                        .setPopup(new mapboxgl.Popup().setHTML(markerHTML))
                        .addTo(this.map)
                }
            });
        }
    }

}
</script>

<style scoped>
.mapContainer {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}
</style>