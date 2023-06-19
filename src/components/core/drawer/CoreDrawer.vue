<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
      >
        <template #append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
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
          prepend-icon="mdi-home-city"
          title="Home"
          value="home"
        />
        <v-list-item
          prepend-icon="mdi-account"
          title="My Account"
          value="account"
        />
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          title="Users"
          value="users"
        />
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(true)
const rail = ref(true)
</script>
