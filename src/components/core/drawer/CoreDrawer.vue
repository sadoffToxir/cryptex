<template>
  <v-navigation-drawer
    :rail="rail"
    @click="rail = false"
  >
    <v-list-item
      nav
    >
      <template #default>
        <v-row>
          <v-col class="d-flex justify-center align-center">
            <v-avatar
              image="src/assets/logo.ico"
              size="50"
            />
            <span class="text-h5 font-weight-bold logo-text">
              CRYPTEX
            </span>
          </v-col>
        </v-row>
      </template>
      <template #append>
        <v-btn
          variant="text"
          :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
          @click.stop="rail = !rail"
        />
      </template>
    </v-list-item>

    <v-divider />

    <v-list
      density="compact"
      nav
    >
      <v-list-item
        v-for="navItem in navItems"
        :key="navItem.key"
        :prepend-icon="navItem.icon"
        :title="navItem.title"
        :value="navItem.key"
        :to="navItem.route"
      />
    </v-list>
    <template #append>
      <div class="mb-6 mx-3">
        <BaseCountDown
          title="Time left to BTC last halving:"
          :date="lastHalving"
        />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { lastHalving } from '@/config/constants'
import navItems from './navItems'

import BaseCountDown from '@/components/base/BaseCountDown.vue'

const rail = ref(false)
</script>

<style lang="scss">
@import '@/assets/main.scss';

.logo-text {
  color: $logo-color
}
</style>
