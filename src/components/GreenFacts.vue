<template>
    <div id="green-facts">
        <img src="../assets/icons/ecology.png" alt="ecologie icon" title="ecologie icon">
        <h2>Groene cijfers...</h2>
        <p class="accent">Door zonnepanelen op Kortrijk weide kunnen we vandaag...</p>
        <ul>
            <li>122 GSM's opladen</li>
            <li>of</li>
            <li>123 euro besparen aan elektriciteit</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "GreenFacts"    
}
</script>
<style lang="scss" scoped>
#green-facts {
    height: 58%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E6E6F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;

    padding: 5%;

    @media (max-width: 768px) {
        height: 45vh;

        margin-bottom: 2%;

        padding-bottom: 8%;
        h2 {
            font-size: 5vw !important;
            font-weight: 600;
            margin-top: 5% !important;
        }

        p {
            font-size: 4vw !important;
            font-weight: 600;
            margin-top: 2% !important;
        }

        li {
            font-size: 4vw !important;
            font-weight: 600;

        }

        img {
            width: 20% !important;
            height: auto !important;
        }
    }
}
#green-facts img {
    height: 21%;
}
#green-facts h2 {
    margin-top: 2vh;
    font-size: 2vw !important;
    font-weight: 600;
    margin-bottom: 3vh;
}

#green-facts p {
    font-size: 1.5vw;

    margin-bottom: 2vh;
}
#green-facts ul {
    text-align: center;
}
#green-facts ul li:nth-child(odd) {
    background-color: #A8A8F5;
    border-radius: 1rem;
    padding: 1.2rem;
    font-weight: 600;
    font-size: 1.4vw;
}
#green-facts ul li:nth-child(even) {
    font-size: 1.4vw;

    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}
.accent {
    color: #1515BC;
    text-align: center;
}
</style>