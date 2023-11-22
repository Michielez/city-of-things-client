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
    handleMouseover() {
      this.showBuildings = true;
    },
    handleMouseleave() {
      this.showBuildings = false;
    },
  }
}
</script>

<template>
  <header>
    <RouterLink to="/"><h1>City of Things</h1></RouterLink>
    <nav>
      <ul>
        <li><RouterLink class="underline" to="/">Dashboard</RouterLink></li>
        <li><RouterLink class="underline" to="/grid">Grid</RouterLink></li>
        <div @mouseover="handleMouseover" @mouseleave="handleMouseleave" class="dropdown">
          <p>Gebouwen<span :class="showBuildings ? 'up' : 'down'"> &gt; </span>
          </p>
          <ul v-show="showBuildings" class="dropdown-content">
            <li v-for="building in buildings">
              <RouterLink :to=" '/buildings/' + building.url ">{{ building.name }}</RouterLink>
            </li>
          </ul>
        </div>
      </ul>
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
  font-weight: 600;
}

nav ul a:not(.dropdown a), nav p {
  font-weight: 600;
  font-size: 1.5rem;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  display: block;
  background-color: #EDEDFD;
  border-radius: 1rem;
  min-width: 160px;
  box-shadow: 8px 8px 16px 8px rgba(0,0,0,0.2);
  z-index: 1;
  a {
    color: #05052E;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
}

span {
  margin-left: 5px;
  display: inline-block;
  transition: transform 0.3s ease;
  &.down {
    transform: rotate(90deg);
  }

  &.up {
    transform: rotate(-90deg);
  }
}

.router-link-active.underline {
  border-bottom: #1515BC 2px solid;
}

</style>
