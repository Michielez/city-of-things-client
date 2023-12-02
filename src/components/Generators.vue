<template>
    <div id="consumers">
        <img src="../assets/icons/usage.png" alt="top opwekkers icon" title="top opwekkers icon">
        <h2>Top opwekkers</h2>
        <ol id="buildings">
            <li>The Penta</li>
            <li>Hangar K</li>
            <li>VEG-I-TEC</li>
        </ol>          
    </div>
</template>
<script>
export default {
    name: "Generators"
}
</script>
<style lang="scss" scoped>
#consumers {
    height: 58%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E6E6F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;

    padding: 5%;
}
#consumers img {
    height: 20%;
}
#consumers h2 {
    margin-top: 1vh;
    font-size: 2vw;
    font-weight: 600;
    margin-bottom: 3vh;
}
#buildings {
    width: 100%;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 2vh;
}
#buildings li {
    background-color: #A8A8F5;
    border-radius: 1rem;
    padding: 1.2rem 0rem;
    font-weight: 600;
    font-size: 1.4vw;
}
</style>