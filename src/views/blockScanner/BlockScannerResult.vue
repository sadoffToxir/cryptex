<template>
  <BaseDataTable
    :headers="transactionsList"
    :items="formattedTxList"
    :items-per-page="pagination.itemsPerPage"
  />
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import BaseDataTable from '@/components/base/BaseDataTable.vue'

import api from '@/services/api'

import { transactionsList } from '@/config/headers'
import { getEthFromWei, getEthFromGas } from '@/utils/gas'
import { unixToIsoDateAndTime } from '@/utils/date'

const route = useRoute()
const router = useRouter()

const pagination = ref({
  itemsPerPage: 50,
  page: 1
})

const txlist: any = ref(null)

const formattedTxList = computed(() => {
  let result = txlist.value ? txlist.value.map((transaction: any) => {
    return {
      transactionHash: getReducedHash(transaction.blockHash),
      destination: transaction.methodId === '0x' ? 'In' : //Transfer
        transaction.methodId === '0x48657920' ? 'In': //Transfer*
          transaction.methodId === '0x6a761202' ? 'out': //Exec Transaction
            transaction.methodId=== '0x3805550f' ? 'Out' : '', // Exit
      blockNumber: transaction.blockNumber,
      dateAndTime: unixToIsoDateAndTime(Number(transaction.timeStamp) * 1000),
      from: getReducedHash(transaction.from),
      to: getReducedHash(transaction.to),
      value: getEthFromWei(Number(transaction.value)),
      transactionFee: getEthFromGas(Number(transaction.gasUsed), Number(transaction.gasPrice), 8) + ' ETH'
    }
  }) : []
  return result
})

const getReducedHash = (hash: string) => {
  return hash.slice(0, 7) + '...' + hash.slice(-7)
}

const getTransactions = (address: string) => {
  const page = 1
  const sort = 'desc'

  return api.etherscan.getTransactions(address, page, pagination.value.itemsPerPage, sort)
}

onMounted(async () => {
  const hash = route.params.hash as string
  if(hash) {
    const response = await getTransactions(hash)
    txlist.value = response.result
  } else {
    router.push('/block-scanner')
  }

})
</script>
