<template>
  <v-app>
    <CoreDrawer />
    <main>
      <container>
        <RouterView />
      </container>
    </main>
  </v-app>
</template>

<script setup lang="ts">
import CoreDrawer from '@/components/core/drawer/CoreDrawer.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
</style>
