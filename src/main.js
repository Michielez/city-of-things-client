import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/HelloWorld.vue'
import About from './components/About.vue'
import ThePentha from './components/ThePentha.vue'
import LagoZwembad from './components/LagoZwembad.vue'
import FlandersMake from './components/FlandersMake.vue'
import Grid from './components/Grid.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/grid', component: Grid },
    { path: '/about', component: About },
    { path: '/the-pentha', component: ThePentha},
    { path: '/lago-zwembad', component: LagoZwembad},
    { path: '/flanders-make', component: FlandersMake}
  ],
})

const app = createApp(App); 
app.use(router);

app.mount('#app');
