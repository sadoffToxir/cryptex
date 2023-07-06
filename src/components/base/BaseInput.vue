<template>
  <v-text-field :variant="variant" />
</template>

<script setup lang="ts">
interface Props {
  variant?: 'filled' | 'outlined' | 'plain' | 'underlined' | 'solo' | 'solo-inverted' | 'solo-filled' | undefined
}

withDefaults(defineProps<Props>(), {
  variant: 'outlined'
})
</script>
