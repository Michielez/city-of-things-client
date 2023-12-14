<template>
    <div id="building">
        <div id="left">
            <TitleCard :title="building.name" url="/src/assets/icons/Buildings.png" />
            <BuildingRender />
        </div>
        <div id="middle">
            <TitleCard :title='`Verbruik "${building.name}"`' url="/src/assets/icons/usage.png"/>
            <EnergyPrice />
            <Sustainability />
        </div>
        <div id="right">
            <GreenFacts />
            <DidYouKnow />
        </div>
    </div>
</template>
<script>
import TitleCard from './TitleCard.vue';
import BuildingRender from './BuildingRender.vue';
import EnergyPrice from './EnergyPrice.vue';
import Sustainability from './Sustainability.vue';
import DidYouKnow from './DidYouKnow.vue';
import GreenFacts from './GreenFacts.vue';
export default {
    name: "Building",
    props: {
        building: Object
    },
    components: {
    TitleCard,
    BuildingRender,
    EnergyPrice,
    Sustainability,
    DidYouKnow,
    DidYouKnow,
    GreenFacts
}
}
</script>
<style lang="scss" scoped>
#building {
    display: flex;
    gap: 70px;
    height: 80vh;
}
#left, #middle, #right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>