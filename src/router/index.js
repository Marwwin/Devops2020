import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/quiz',
        name: 'QuizView',
        component: () =>
            import ('../views/Quiz.vue')
    },
    {
        path: '/admin',
        name: 'AdminView',

        component: () =>
            import ('../views/Admin.vue')
    },
    {
        path: '/profile',
        name: 'ProfileView',

        component: () =>
            import ('../views/Profile.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router