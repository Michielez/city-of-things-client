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
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E6E6F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    padding: 2rem;
    flex: 1;
}
#green-facts img {
    height: 80px;
}
#green-facts h2 {
    margin-top: 10px;
    font-size: 2rem;
    font-weight: 600;
}
#green-facts ul {
    text-align: center;
}
#green-facts ul li:nth-child(odd) {
    background-color: #A8A8F5;
    padding: 1rem 0rem;
    border-radius: 1rem;
}
#green-facts ul li:nth-child(even) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}
.accent {
    color: #1515BC;
    text-align: center;
}
</style>