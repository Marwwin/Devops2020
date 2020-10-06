import Vue from 'vue';
import BootStrapVue from 'bootstrap-vue';
import App from './App.vue';
//import bootstrap css files 
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootStrapVue);

Vue.config.productionTip = false;

var vm = new Vue({
    router,
    data:{
        currentRoute: window.location.pathname
    },
    render: h => h(App),
}).$mount('#app')

console.log(vm)