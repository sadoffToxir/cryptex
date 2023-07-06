<template>
  <div class="h-screen d-flex align-center justify-center">
    <div class="w-75">
      <v-row>
        <v-col
          cols="12"
          class="py-0"
        >
          <BaseInput
            label="Wallet Address"
            v-model="hashInput"
            placeholder="ex. 0xb4c9E4617a16Be36B92689b9e07e9F64757c1792"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="py-0 d-flex justify-center"
        >
          <BaseButton @click="searchAddressInfo">
            Search
          </BaseButton>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'

const router = useRouter()

const hashInput = ref(null)

const searchAddressInfo = () => {
  router.push(`/block-scanner/${hashInput.value}`)
}
</script>

