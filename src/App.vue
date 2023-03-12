<template>
  <h1>You did it!</h1>
  <BaseInput :model-value="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('hey')
</script>
