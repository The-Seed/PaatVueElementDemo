import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/home.vue')
        },
        {
            path: '/a',
            name: 'a',
            component: () => import('../views/a.vue')
        },
        {
            path: '/b',
            name: 'b',
            component: () => import('../views/b.vue')
        }
    ]
})
