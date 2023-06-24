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
          <v-col class="d-flex justify-center">
            <v-avatar
              image="https://randomuser.me/api/portraits/men/85.jpg"
              size="80"
            />
          </v-col>
        </v-row>
      </template>
      <template #append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = true"
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
</template>

<script setup lang="ts">
import { ref } from 'vue';

const rail = ref(false)
</script>
