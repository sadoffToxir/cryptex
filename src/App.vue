<template>
  <v-app>
    <v-layout>
      <CoreDrawer />
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import CoreDrawer from '@/components/core/drawer/CoreDrawer.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
</style>
