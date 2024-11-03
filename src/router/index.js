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
        {
            path: '/phim/:slug',
            name: 'movie-info',
            component: () => import('../views/MovieDetail.vue'),
        },
        {
            path: '/phim/:slug/:play',
            name: 'movie-play',
            component: () => import('../views/MoviePlay.vue'),
        },
    ],
})

export default router
