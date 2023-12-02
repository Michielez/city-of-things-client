<template>
    <div id="dashboard">
        <div id="left">
            <TitleCard title="Ons Doel?" url="/src/assets/icons/target.png" />
            <ProjectDescription />
        </div>
        <div id="middle">
            <TitleCard title='Verbruik "Kortrijk weide"' url="/src/assets/icons/Buildings.png" />
            <EnergyPrice />
            <Sustainability />
        </div>
        <div id="right">
            <Generators />
            <Facts />
        </div>
    </div>
</template>
<script>
import TitleCard from './TitleCard.vue';
import ProjectDescription from './ProjectDescription.vue';
import EnergyPrice from './EnergyPrice.vue';
import Generators from './Generators.vue';
import Facts from './Facts.vue';
import Sustainability from './Sustainability.vue';
export default {
    name: "Dashboard",
    components: {
        TitleCard,
        ProjectDescription,
        EnergyPrice,
        Generators,
        Facts,
        Sustainability
    }
}
</script>
<style lang="scss" scoped>
#dashboard {
    display: flex;
    height: 82vh;

    justify-content: space-evenly;
}
#left, #middle, #right {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 3%;

}
</style>