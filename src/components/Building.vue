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
    height: 82vh;

    justify-content: space-evenly;

    @media (max-width: 768px) {
        height: fit-content;
        flex-direction: column;
        align-items: center;
    }
}
#left, #middle, #right {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 3%;

    @media (max-width: 768px) {
        width: 92%;
        height: 100%;

        margin-top: 2%;
        margin-bottom: 2%;

        &:first-child {
            margin-top: 0%;
        }
        &:last-child {
            margin-bottom: 5%;
        }

    }
}
</style>