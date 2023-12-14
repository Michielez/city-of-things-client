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
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #E6E6F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        margin-bottom: 2%;

        height: 15vh;

        img {
            width: 20%;
            height: auto !important;
        }

        h2 {
            font-size: 4vw !important;
            font-weight: 600;
        }
    }
}

#titleCard img {
    height: 50%;
}

#titleCard h2 {
    font-size: 2vw;
    font-weight: 600;
}
</style>