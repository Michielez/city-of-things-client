<template>
    <div id="projectDescription">
        <p><span>City Of Things</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, porro dolor voluptatum dolorem quidem omnis molestias sequi necessitatibus quod officiis pariatur, recusandae error eum soluta corrupti tenetur, iste autem facere?</p>
        <img src="../assets/images/KortijkLogo.jpg" alt="logo stad Kortrijk" title="logo stad Kortrijk">
    </div>
</template>
<script>
export default {
    name: "ProjectDescription",    
}
</script>
<style lang="scss" scoped>
#projectDescription {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #E6E6F5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    padding: 2rem;
    flex: 1;
}
#projectDescription p {
    font-size: 1.4rem;
    line-height: 1.6rem;
}
#projectDescription span {
    color: #1515BC;
    font-weight: 600;
}
</style>