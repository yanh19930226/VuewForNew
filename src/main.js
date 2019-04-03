import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './routerconfig'
import store from './store'
Vue.use(VueRouter);

require('./assets/css/base.css'); //引入全局的base文件



const router=new VueRouter({
  mode:'history',
  routes:routerConfig
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
