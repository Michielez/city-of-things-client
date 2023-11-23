<template>
    <div id="energyPrice">
        <h3>Prijs energie</h3>
        <hr>
        <div id="prices">
            <div id="today">
                <p>vandaag</p>
                <p>€ 169,31</p>
            </div>
            <div id="week">
                <p>deze week</p>
                <p>€ 2042,12</p>
            </div>
            <div id="month">
                <p>deze maand</p>
                <p>€ 2251,43</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
#energyPrice {
    display: flex;
    flex-direction: column;
    background-color: #E6E6F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    padding: 2rem;
    flex: 1;
}
hr {
    width: 100%;
}
#prices {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}
#energyPrice h3 {
    font-weight: 600;
    color: #1515BC;
}
#today {
    margin-bottom: 1rem;
}
#today p {
    font-size: 2rem;
}
#today, #week, #month {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
}
#week, #month {
    color: #9898FE;
}
</style>