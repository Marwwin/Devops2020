import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const info = {
    test: 1,    
    isRegister : false,
    isLogin : false,
    auth: "",
    type:"",
}

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        props : { info }
    },
    {
        path: '/quiz',
        name: 'QuizView',
        component: () =>
            import ('../views/Quiz.vue'),
            props : { info }
    },
    {
        path: '/admin',
        name: 'AdminView',
        props : { info },

        component: () =>
            import ('../views/Admin.vue')
    },
    {
        path: '/profile',
        name: 'ProfileView',
        props : { info },

        component: () =>
            import ('../views/Profile.vue')
    },
    {
        path: '/register',
        name: 'RegisterView',
        props : { info },

        component: () =>
            import ('../views/Register.vue')
    },
    {
        path: '/login',
        name: 'LoginView',
        props : { info },

        component: () =>
            import ('../views/Login.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router