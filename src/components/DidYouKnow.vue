<template>
    <div id="facts">
        <h3>WIST JE DAT...</h3>
        <div>
            <img src="../assets/icons/lightbulb.png" alt="oplichtend licht" title="oplichtend licht">
            <p>een spel console meer verbruikt dan een koelkast.</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "DidYouKnow"
}
</script>
<style lang="scss" scoped>
#facts {
    height: 42%;
    background-color: #A8A8F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    font-family: 'Staatliches', sans-serif;
    padding: 5%;

    @media (max-width: 768px) {
        height: 15vh;

        margin-bottom: 2%;

        h3 {
            font-size: 6vw !important;
            font-weight: 600;
        }

        p {
            font-size: 4vw !important;
            font-weight: 600;
            margin-top: 5% !important;
        }


        img {
            width: 20% !important;
            height: auto !important;
        }
    }
}
#facts h3 {
    font-size: 3.5vw;
    margin-bottom: 4%;
}
#facts div {
    display: flex;
    align-items: center;
}
#facts img {
    height: 7vh;
}
#facts p {
    margin-left: 2%;
    font-size: 1.5vw;
}
</style>