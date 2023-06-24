<template>
  <v-app>
    <layout>
      <CoreDrawer />
      <v-main>
        <container>
          <RouterView />
        </container>
      </v-main>
    </layout>
  </v-app>
</template>

<script setup lang="ts">
import CoreDrawer from '@/components/core/drawer/CoreDrawer.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
</style>
