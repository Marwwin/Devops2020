import Vue from 'vue';
import App from './App.vue';
//import bootstrap css files 
import router from './router'


Vue.config.productionTip = false;

var vm = new Vue({
    router,
    data:{
        currentRoute: window.location.pathname
    },
    render: h => h(App),
}).$mount('#app')

console.log(vm)