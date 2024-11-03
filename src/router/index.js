import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue'),
        },
        {
            path: '/tim-phim/:key',
            name: 'search',
            component: () => import('../views/Search.vue'),
        },
    ],
})

export default router
