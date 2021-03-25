import Vue from 'vue'
import Router from 'vue-router'
import Box from '../components/Box.vue'

Vue.use(Router)

const routes = [
  {
    path: '/box',
    component: Box,
    children: [
      {
        path: 'cli',
        component: () => import('../components/cli.vue')
      }
    ]
  }
]

const router = new Router({
  routes
})

export default router
