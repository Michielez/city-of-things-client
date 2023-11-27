<template>
    <div id="titleCard">
        <img :src="url" :alt="`${title} icon`" :title="`${title} icon`">
        <h2>{{ title }}</h2>
    </div>
</template>
<script>
export default {
    name: "TitleCard",
    props: {
        title: String,
        url: String
    }
}
</script>
<style lang="scss">
#titleCard {
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #E6E6F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    padding: 2rem;
}

#titleCard img {
    height: 80px;
}

#titleCard h2 {
    // font-size: clamp(1rem, 3vh, 2rem);
    font-size: 2rem;
    font-weight: 600;
}
</style>