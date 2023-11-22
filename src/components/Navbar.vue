<script>
import { RouterLink } from 'vue-router';
import data from '../data/buildings';

export default {
  name: "Navbar",
  data() {
    return {
      buildings: data,
      showBuildings: false
    }
  },
  methods: {
    toggleShowBuildings() {
      this.showBuildings = !this.showBuildings
    }
  }
}
</script>

<template>
  <nav>
    <h1>City of Things</h1>
    <ul>
      <li><RouterLink to="/">Dashboard</RouterLink></li>
      <li><RouterLink to="/Grid">Grid</RouterLink></li>
      <li @click="toggleShowBuildings" class="clickable">Gebouwen</li>
    </ul>
    <ul v-if="showBuildings" class="gebouwen">
      <li v-for="building in buildings">
        <RouterLink :to=" '/buildings/' + building.url ">{{ building.name }}</RouterLink>
      </li>
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
  flex-wrap: wrap;

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

      &.clickable {
        cursor: pointer;
      }
    }
  }

  .gebouwen {
    list-style: none;
    padding: 0;
    position: absolute;
    top: 9.5vh;
    width: 65%;
    height: 4.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 22%;

    background-color: #A8A8F5;

    border-radius: 15px;

    li {
      margin-right: 2%;
      font-size: 100%;
      font-weight: bold;
    }
  }
}
</style>
