<template>
  <v-app>
    <CoreDrawer />
    <main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </main>
  </v-app>
</template>

<script setup lang="ts">
import CoreDrawer from '@/components/core/drawer/CoreDrawer.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
</style>
