import Vue from 'vue'
import App from './App.vue'

import router from './router'
Vue.config.productionTip = false
import "babel-polyfill"

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


let arr = [1, 2, 4];
let arrB = arr.map(item => item * 2);
console.log("可以使用ES6语法："+arrB.includes(8));