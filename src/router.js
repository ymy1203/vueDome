import Vue from 'vue'
import Vuerouter from 'vue-router'
Vue.use(Vuerouter)

import page from './pages/page.vue'
import page2 from './pages/page2.vue'

const router = new Vuerouter({
  mode: 'history',
  routes: [{
      path: '/',
      name:'app-index',
      component: page
    },
    {
      path: '/home',
      name:'app-home',
      component: page
    },
    {
      path: '/home2',
      component: page2
    }
  ]
})

export default router