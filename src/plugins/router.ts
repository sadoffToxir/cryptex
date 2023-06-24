import { createRouter, createWebHistory } from 'vue-router'
import ChainScanner from '@/views/ChainScanner.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/chain-scanner'
    },
    {
      path: '/chain-scanner',
      name: 'chain-scanner',
      component: ChainScanner
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is la zy-loaded when the route is visited.
    //   component: () => import('../pages/AboutView.vue')
    // }
  ]
})

export default router
