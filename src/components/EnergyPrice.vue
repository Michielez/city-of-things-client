<template>
    <div id="energyPrice">
        <div id="header">
            <h3>Prijs energie</h3>
            <p>
                <span 
                @click="handleChangeUnit('eur')" 
                class="unit"
                :class="{ 'active' : unit === 'eur'}">
                eur</span> 
                |
                <span 
                @click="handleChangeUnit('kwh')" 
                class="unit"
                :class="{ 'active' : unit === 'kwh'}">
                kWh</span>
            </p>
        </div>
        <hr>
        <div id="prices">
            <div id="today">
                <p>vandaag</p>
                <p v-if="unit === 'eur' ">€ {{ todayValue }}</p>
                <p v-else>{{ todayValue }} kWh</p>
            </div>
            <div id="week">
                <p>deze week</p>
                <p v-if="unit === 'eur' ">€ {{ weekValue }}</p>
                <p v-else>{{ weekValue }} kWh</p>
            </div>
            <div id="month">
                <p>deze maand</p>
                <p v-if="unit === 'eur' ">€ {{ monthValue }}</p>
                <p v-else>{{ monthValue }} kWh</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "EnergyPrice",
    data() {
        return {
            unit: "eur",
            todayValue: "196,31",
            weekValue: "2032,23",
            monthValue: "2593,12"
        }
    },
    methods: {
        handleChangeUnit(newUnit) {
            this.unit = newUnit;
        }
    },
}
</script>
<style lang="scss">
#energyPrice {
    height: 34.5%;
    display: flex;
    flex-direction: column;
    background-color: #E6E6F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;

    padding: 5%;
}
#header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6vw;
}
.unit {
    cursor: pointer;
}
.active {
    font-weight: 600;
    color: #1515BC;
    text-decoration: underline;
}
hr {
    width: 100%;
}
#prices {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10%;

    font-size: 1.2vw;
}
#energyPrice h3 {
    font-weight: 600;
    color: #1515BC;
}
#today {
    margin-bottom: 1rem;
}
#today p {
    font-size: 2vw;
}
#today, #week, #month {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
}
#today p:last-child {
    font-weight: 700;
}
#week, #month {
    color: #9898FE;
}
</style>