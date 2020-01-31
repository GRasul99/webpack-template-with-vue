import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'
import './assets/scss/main.scss'
import './js/'
// import './assets/css/main.css'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
