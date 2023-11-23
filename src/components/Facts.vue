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
    name: "Facts"
}
</script>
<style lang="scss" scoped>
#facts {
    background-color: #A8A8F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    padding: 2rem;
    font-family: 'Staatliches', sans-serif;
}
#facts h3 {
    font-size: 3.5rem;
    margin-bottom: 10px;
}
#facts div {
    display: flex;
    align-items: center;
}
#facts img {
    height: 40px;
}
#facts p {
    margin-left: 10px;
    font-size: 1.5rem;
}
</style>