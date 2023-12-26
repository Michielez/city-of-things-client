<template>
    <div>
        <canvas class="gauge-canvas"></canvas>
        <div class="flex-container">
            <p>Duurzaam</p>
            <p>Niet-duurzaam</p>
        </div>
    </div>
</template>
  
<script>
import { Gauge } from 'gaugeJS';

export default {
    name: 'Gauge',
    props: {
        maxValue: {
            Type: Number,
            required: true
        },
        minValue: {
            Type: Number,
            required: true
        },
        currentValue: {
            Type: Number,
            required: true
        },
        options: {
            Type: Object,
            required: false
        }
    },
    data() {
        return {
            gauge: null
        };
    },
    mounted() {
        this.createGauge();
    },
    methods: {
        calculateZones() {
            let zones = [
                { strokeStyle: "green", min: 0, max: 130 },
                { strokeStyle: "orange", min: 130, max: 160 },
                { strokeStyle: "red", min: 160, max: 200 }

            ];

            for (let i = 0; i < zones.length; i++) {
                if (i === 0) {
                    zones[i].min = 0;
                    zones[i].max = this.maxValue * 0.65;
                } if (i === 1) {
                    zones[i].min = this.maxValue * 0.65;
                    zones[i].max = this.maxValue * 0.8;
                } if (i === 2) {
                    zones[i].min = this.maxValue * 0.8;
                    zones[i].max = this.maxValue;
                }
            }

            return zones;
        },
        createGauge() {
            const defaultOptions = {
                angle: 0,
                lineWidth: 0.35,
                pointer: {
                    length: 0.6,
                    strokeWidth: 0.035,
                    color: '#000000'
                },
                staticZones: this.calculateZones(),
                highDpiSupport: true
            };
            const gaugeOptions = { ...defaultOptions, ...this.options };

            const target = document.querySelector('.gauge-canvas');
            this.gauge = new Gauge(target).setOptions(gaugeOptions);
            this.gauge.maxValue = this.maxValue || 100;
            this.gauge.setMinValue(this.minValue || 0);
            this.gauge.animationSpeed = 32;
            this.gauge.set(this.currentValue || 0);
        }
    }
};
</script>
  
<style lang="scss" scoped>
.gauge-canvas {
    aspect-ratio: 2 / 1;
    height: 100%;
    /* or any specific value */
    max-width: 100%;
}
.flex-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
}
</style>
  