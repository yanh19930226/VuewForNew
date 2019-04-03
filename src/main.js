import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

require('./assets/css/base.css'); //引入全局的base文件
new Vue({
  el: '#app',
  render: h => h(App)
})
