import { createRouter, createWebHistory } from 'vue-router';

import DashboardView from '../views/DashboardView.vue';
import GridView from '../views/GridView.vue';
import BuildingView from '../views/BuildingView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: DashboardView
        },
        {
            path: '/grid',
            name: 'grid',
            component: GridView
        },
        {
            path: '/buildings/:name',
            name: 'buildings',
            component: BuildingView
        }
    ],
});

export default router;