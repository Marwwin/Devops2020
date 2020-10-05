import Vue from 'vue';
import BootStrapVue from 'bootstrap-vue';
import App from './App.vue';
//import bootstrap css files 

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootStrapVue);

Vue.config.productionTip = false;

var vm = new Vue({
  render: h => h(App),
}).$mount('#app')

console.log(vm)
