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
        this.map = L.map(this.$refs.mapContainer).setView([50.8256969, 3.252], 17);

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
                    let customIconSize;
                    if (building.rating === 'green') {
                        customIconUrl = GreenIcon;
                        customIconSize = 30;
                    } if (building.rating === 'orange') {
                        customIconUrl = OrangeIcon;
                        customIconSize = 40;
                    } if (building.rating === 'red') {
                        customIconUrl = RedIcon;
                        customIconSize = 50;
                    }



                    const customIcon = L.icon({
                        iconUrl: customIconUrl,
                        iconSize: [customIconSize, customIconSize],
                        iconAnchor: [15, 30], 
                        popupAnchor: [0, -30] 
                    });

                    const markerHTML = `
                    <h3>${building.name}</h3>
                    <ul>
                        <li><span>Verbruik:</span> ${building.usage}</li>
                        <li><span>Duurzaamheid:</span> ${building.sustainability}</li>
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

<style>
.mapContainer {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}
.leaflet-popup-content-wrapper h3{
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
  }
  
  .leaflet-popup-content-wrapper li span{
    font-weight: bold;
  }
</style>
