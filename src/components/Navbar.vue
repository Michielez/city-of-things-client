<script setup>

</script>

<template>
  <nav>
    <h1>City Of Things</h1>
    <div class="routes">
        <router-link to="/about">about</router-link>
        <router-link to="/devices">devices</router-link>
    </div>
  </nav>
</template>

<style scoped>
h1 {
    margin-left: 2vw;
    font-size: 200%;
    color: black;
}

nav {
    display: flex;
    width: 100vw;
    height: 7vh;
    background-color: lightgray;
    padding: 0;
    justify-content: space-between;
    align-items: center;
}

img {
    width: 120px;
    height: 70px;
}

.routes {
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    margin-right: 2vw;
}

a {
    color: black;
    font-variant: small-caps;
    font-size: 120%;
}
</style>
