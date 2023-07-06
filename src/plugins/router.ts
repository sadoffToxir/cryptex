import { createRouter, createWebHistory } from 'vue-router'

import BlockScanner from '@/views/blockScanner/BlockScanner.vue'
import BlockScannerResult from '@/views/blockScanner/BlockScannerResult.vue'
import BlockScannerSearchForm from '@/views/blockScanner/BlockScannerSearchForm.vue'

import ToolsList from '@/views/ToolsList.vue'
import MarketsList from '@/views/MarketsList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/block-scanner'
    },
    {
      path: '/block-scanner',
      component: BlockScanner,
      children: [
        {
          path: '',
          component: BlockScannerSearchForm
        },
        {
          path: ':hash',
          component: BlockScannerResult
        }
      ]
    },
    {
      path: '/tools',
      component: ToolsList
    },
    {
      path: '/markets',
      component: MarketsList
    }
  ]
})

export default router
