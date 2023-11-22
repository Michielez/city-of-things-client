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
  <header>
    <h1>City of Things</h1>
    <nav>
      <ul>
        <li><RouterLink to="/">Dashboard</RouterLink></li>
        <li><RouterLink to="/Grid">Grid</RouterLink></li>
        <div @mouseenter="toggleShowBuildings" class="dropdown">
          <p @click="toggleShowBuildings">Gebouwen <span :class="showBuildings ? 'up' : 'down'"> &gt; </span></p>
          <ul @mouseenter="toggleShowBuildings" @mouseleave="toggleShowBuildings" v-show="showBuildings" class="dropdown-content">
            <li @click="toggleShowBuildings" v-for="building in buildings">
              <RouterLink :to=" '/buildings/' + building.url ">{{ building.name }}</RouterLink>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
    <nav>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

header, nav ul {
  display: flex;
  align-items: center;
  gap: 100px;
}

header {
  height: 15vh;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-size: 3rem;
  color: #1515BC;
  font-weight: 900;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  margin-top: 10px;
  position: absolute;
  display: block;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

span {
  margin-left: 5px;
  display: inline-block;
  transition: transform 0.3s ease;
}

span.down {
  transform: rotate(90deg);
}

span.up {
  transform: rotate(-90deg);
}


.router-link-active {
  text-decoration: underline #1515BC 2px;
}

</style>
