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
    name: "Consumers"
}
</script>
<style lang="scss" scoped>
#consumers {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E6E6F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    padding: 2rem;
    flex: 1;
}
#consumers img {
    height: 80px;
}
#consumers h2 {
    margin-top: 10px;
    font-size: 2rem;
    font-weight: 600;
}
#buildings {
    width: 100%;
    flex-grow: 1;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
#buildings li {
    background-color: #A8A8F5;
    border-radius: 1rem;
    padding: 1.8rem 0rem;
    font-weight: 600;
    font-size: 1.4rem;
}
</style>