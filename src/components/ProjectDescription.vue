<template>
    <div id="projectDescription">
        <p><span>City Of Things</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, porro dolor voluptatum dolorem quidem omnis molestias sequi necessitatibus quod officiis pariatur, recusandae error eum soluta corrupti tenetur, iste autem facere?</p>
        <img src="../assets/images/KortijkLogo2.jpg" alt="logo stad Kortrijk" title="logo stad Kortrijk">
    </div>
</template>
<script>
export default {
    name: "ProjectDescription",    
}
</script>
<style lang="scss" scoped>
#projectDescription {
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #E6E6F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    padding: 5%;

    @media (max-width: 768px) {
        height: 35vh;

        p {
            font-size: 3vw !important;
            font-weight: 600;
        }

        img {
            width: 40% !important;
        }
    }
}
#projectDescription p {
    font-size: 1.4vw;
    line-height: 120%;
}
#projectDescription span {
    color: #1515BC;
    font-weight: 600;
}
#projectDescription img {
    max-width: 70%;
    max-height: 50%;
    height: auto;
    width: auto;
}
</style>