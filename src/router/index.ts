import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Template from '../views/Template.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/template',
    name: 'Template',
    component: Template
  }
]

const router = createRouter({
  history: createWebHistory('/xdz/'),
  routes
})

export default router
