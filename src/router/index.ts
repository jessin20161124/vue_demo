import { createRouter, createWebHistory } from 'vue-router'
import Home  from '@/components/home.vue'
import Login from '@/components/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router