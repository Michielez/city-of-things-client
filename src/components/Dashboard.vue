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
            <DidYouKnow />
        </div>
    </div>
</template>
<script>
import TitleCard from './TitleCard.vue';
import ProjectDescription from './ProjectDescription.vue';
import EnergyPrice from './EnergyPrice.vue';
import Generators from './Generators.vue';
import DidYouKnow from './DidYouKnow.vue';
import Sustainability from './Sustainability.vue';
export default {
    name: "Dashboard",
    components: {
        TitleCard,
        ProjectDescription,
        EnergyPrice,
        Generators,
        DidYouKnow,
        Sustainability
    },
    mounted() {
        document.getElementById('left').classList.add('fade-in');
        document.getElementById('middle').classList.add('fade-in');
        document.getElementById('right').classList.add('fade-in');
    }
}
</script>
<style lang="scss" scoped>
#dashboard {
    display: flex;
    height: 82vh;

    justify-content: space-evenly;

    @media (max-width: 768px) {
        height: fit-content;
        flex-direction: column;
        align-items: center;
    }

    overflow: hidden;
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

#left.fade-in {
    animation: fadeInLeft 1.4s ease-out;
}
#middle.fade-in {
    animation: fadeIn 1.4s ease-out;
}

#right.fade-in {
    animation: fadeInRight 1.4s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);

    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>