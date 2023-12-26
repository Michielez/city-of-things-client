<template>
    <div ref="mapContainer" class="mapContainer"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import GreenIcon from '../assets/icons/energy-marker-icon/green.svg'
import OrangeIcon from '../assets/icons/energy-marker-icon/orange.svg'
import RedIcon from '../assets/icons/energy-marker-icon/red.svg'

export default {
    name: "LeafletMap",
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
        this.map = L.map(this.$refs.mapContainer).setView([50.8256969, 3.252], 15.5);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        this.addMarkers();
    },
    methods: {
        addMarkers() {
        this.buildings.forEach(building => {
            if (building.location) {
                let customIconUrl;
                if (building.rating === 'green'){
                    customIconUrl = GreenIcon;
                } if (building.rating === 'orange'){
                    customIconUrl = OrangeIcon;
                } if (building.rating === 'red'){
                    customIconUrl = RedIcon;
                }

               

                const customIcon = L.icon({
                    iconUrl: customIconUrl,
                    iconSize: [30, 30], // Size of the icon
                    iconAnchor: [15, 30], // Point of the icon which will correspond to marker's location
                    popupAnchor: [0, -30] // Point from which the popup should open relative to the iconAnchor
                });

                const markerHTML = `
                    <h3>${building.name}</h3>
                    <ul>
                        <li>Verbruik: ${building.usage}</li>
                        <li>Duurzaamheid: ${building.sustainability}</li>
                    </ul>
                `;

                L.marker([building.location.lat, building.location.lng], { icon: customIcon })
                    .addTo(this.map)
                    .bindPopup(markerHTML);
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
