<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <nav>
    <h1>City of Things</h1>
    <ul>
        <li><RouterLink to="/">Dashboard</RouterLink></li>
        <li><RouterLink to="/Grid">Grid</RouterLink></li>
        <li><p>Gebouwen</p></li>
    </ul>
  </nav>
</template>

<style scoped="scss" lang="scss">

nav {
    display: flex;
    height: 12vh;
    width: 100vw;
    background-color: #EDEDFD;
    align-items: center;

    h1 {
        font-size: 220%;
        margin-left: 5%;
        color: #1515BC;
        font-weight: bold;
    }
    
    ul {
        display: flex;
        margin-left: 3%;

        li {
            margin-right: 12%;
            font-size: 155%;
            font-weight: bold;

            a {
                text-decoration: none;
                color: #05052E;
            }
        }
    }
}
</style>
