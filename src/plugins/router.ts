import { createRouter, createWebHistory } from 'vue-router'

import ChainScanner from '@/views/ChainScanner.vue'
import ToolsList from '@/views/ToolsList.vue'
import MarketsList from '@/views/MarketsList.vue'

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
    },
    {
      path: '/tools',
      name: 'tools',
      component: ToolsList
    },
    {
      path: '/markets',
      name: 'markets',
      component: MarketsList
    }
  ]
})

export default router
