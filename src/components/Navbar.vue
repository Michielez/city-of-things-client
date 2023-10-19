<script setup>

</script>

<template>
  <nav>
    <img src="../assets/images/howest-hogeschool-logo.png" alt="">
    <div class="routes">
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
    display: flex;
    width: 100vw;
    height: 7vh;
    background-color: lightgray;
    padding: 0;

    align-items: center;
}

img {
    width: 120px;
    height: 70px;
}

.routes {
    width: 10vw;
    display: flex;
    justify-content: space-around;
    margin-right: 0;
    margin-left: auto;

}

a {
    color: black;
    font-variant: small-caps;
    font-size: 120%;
}
</style>
