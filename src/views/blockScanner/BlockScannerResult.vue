<template>
  hey
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import api from '@/services/api'

const route = useRoute()

const txlist = ref(null)

const getTransactions = (address: string) => {
  const page = 1
  const offset = 50
  const sort = 'asc'

  return api.etherscan.getTransactions(address, page, offset, sort)
}

onMounted(async () => {
  const hash = route.params.hash as string
  txlist.value = await getTransactions(hash)
})
</script>
