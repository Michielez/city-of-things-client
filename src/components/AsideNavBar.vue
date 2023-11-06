<script setup>

</script>

<template>
    <aside>
        <img class="howest-logo" src="../assets/images/howest-hogeschool-logo.png" alt="Howest Logo"> 
        <nav>
            <ul>
            <li>
                <img src="../assets/icons/house.svg" alt="house">
                <router-link class="router-link" to="/">Dashboard</router-link>
            </li>
            <li>
                <img src="../assets/icons/location.svg" alt="location">
                <router-link class="router-link" to="/about">The grid</router-link>
            </li>
        </ul>
        <p>Sites</p>
        <ul>
            <li>
                <img src="../assets/icons/bolt.svg" alt="bolt">
                <router-link class="router-link" to="/about">The pentha</router-link>
            </li>
            <li>
                <img src="../assets/icons/bolt.svg" alt="bolt">
                <router-link class="router-link" to="/about">Lago Zwembad</router-link>
            </li>
            <li>
                <img src="../assets/icons/bolt.svg" alt="bolt">
                <router-link class="router-link" to="/about">Flanders make</router-link>
            </li>
        </ul>
        </nav>  
    </aside>
</template>

<style scoped>

aside {
    height: 100%;
    width: 15rem;
    background-color: #C7F9FB;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

aside img.howest-logo{
    align-self: centerx;
}
nav{
    margin-left: 1rem;
}
p{
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    align-self: flex-start;
    padding:0;
    margin: 1rem 0 0.5rem 0;
}

p::after{
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: black;
}

img.howest-logo {
    width: 100%;
    height: auto;
}

ul{
    list-style: none;
    padding: 0;
    margin: 0;
}

ul li{
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: black;
}

ul li img{
    height: 1em;
    width:auto;
}

.router-link{
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
}

.router-link:hover{
    text-decoration: underline;
}

</style>