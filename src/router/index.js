import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

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
            import ('../views/quiz.vue')
    },
    {
        path: '/admin',
        name: 'AdminView',

        component: () =>
            import ('../views/admin.vue')
    },
    {
        path: '/profile',
        name: 'ProfileView',

        component: () =>
            import ('../views/profile.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router