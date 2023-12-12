<template>
    <div id="sustainability">
        <h3>Duurzaamheid (realtime)</h3>
        <img src="../assets/images/new-gauge.png" alt="">
    </div>
</template>
<script>
export default {
    name: "Sustainability"
}
</script>
<style lang="scss" scoped>
#sustainability {
    height: 34.5%;
    display: flex;
    flex-direction: column;
    background-color: #E6E6F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;

    padding: 5%;

    @media (max-width: 768px) {
        height: 20vh;

        font-size: 4.5vw !important;
        font-weight: 600;

        img {
            width: 100% !important;
            height: auto !important;

        }
    }

}
#sustainability h3 {
    font-weight: 600;
    color: #1515BC; 
}
#sustainability img {
    align-self: center;
    height: 140px;
}
</style>