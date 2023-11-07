<script setup>
import { ref } from 'vue';

const isBuildingsOpen = ref(false);

function toggleBuildings() {
    isBuildingsOpen.value = !isBuildingsOpen.value;
}
</script>

<template>
<aside>
    <img class="logo" src="../assets/images/KortijkLogo.jpg" alt="Logo"> 
    <nav>
        <ul>
            <li>
                <img src="../assets/icons/house.svg" alt="house">
                <router-link class="router-link" to="/">Dashboard</router-link>
            </li>
            <li>
                <img src="../assets/icons/location.svg" alt="location">
                <router-link class="router-link" to="/grid">The Grid</router-link>
            </li>
            <li @click="toggleBuildings">
                <img src="../assets/icons/buildings.svg" alt="buildings">
                <p>
                    Buildings
                    <img v-if="!isBuildingsOpen" src="../assets/icons/expand.svg" alt="expand">
                    <img v-if="isBuildingsOpen" src="../assets/icons/collapse.svg" alt="collapse">
                </p>
            </li>
        </ul>
        <ul v-if="isBuildingsOpen" class="buildings-list">
            <li>
                <img src="../assets/icons/bolt.svg" alt="bolt">
                <router-link class="router-link" to="/the-penta">The Penta</router-link>
            </li>
            <li>
                <img src="../assets/icons/bolt.svg" alt="bolt">
                <router-link class="router-link" to="/lago-zwembad">Lago Zwembad</router-link>
            </li>
            <li>
                <img src="../assets/icons/bolt.svg" alt="bolt">
                <router-link class="router-link" to="/flanders-make">Flanders Make</router-link>
            </li>
        </ul>
    </nav>  
</aside>
</template>

<style lang="scss" scoped>
aside {
  height: 100%;
  width: 11rem;
  background-color: #fbcdc7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img.logo {
    align-self: center;
    width: 60%;
  }
  nav {
    margin-left: 1rem;
    ul {
      list-style: none;

      margin-top: 10%;
      li {
        font-size: 1.2rem;
        font-family: 'Inter', sans-serif;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: black;
        margin-bottom: 10%;
        p {
            cursor: pointer;
        }
        p:hover {
            cursor: pointer;
            text-decoration: underline;
        }
        img {
          height: 1em;
          width: auto;
        }
        .router-link {
          text-decoration: none;
          color: black;
          font-size: 1.2rem;
          font-family: 'Inter', sans-serif;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .buildings-list {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-top: 0.5rem;

     li {
        margin-top: 0;
        margin-bottom: 4%;
     }

      .router-link {
        font-size: 80%;
      }
    }
  }
}
</style>