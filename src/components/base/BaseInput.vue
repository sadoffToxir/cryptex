<template>
  <v-textarea 
    :model-value="modelValue"
    :auto-grow="noResize ? undefined : autoGrow"
    :clearable="clearable"
    :density="density"
    clear-icon="mdi-close-circle"
    :disabled="disabled"
    :error="error"
    :error-messages="errorMessages"
    :hide-details="hideDetails"
    :hint="hint"
    :label="label"
    :loading="loading"
    :no-resize="true"
    :persistent-hint="persistentHint"
    :placeholder="placeholder"
    :append-icon="appendIcon"
    :append-inner-icon="appendInnerIcon"
    :rows="rows"
    @update:model-value="handleChange"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: string
  autoGrow?: boolean
  clearable?: boolean
  density?: 'default' | 'comfortable' | 'compact'
  disabled?: boolean
  error?: boolean
  errorMessages?: string | string[]
  hideDetails?: 	boolean | 'auto'
  hint?: string
  label?: string
  loading?: boolean
  name?: string
  noResize?: boolean
  persistentHint?: boolean
  placeholder?: string
  appendIcon?: string 
  appendInnerIcon?: string 
  rows?: string | number
}>(), { 
  modelValue: '',
  clearable: false,
  density: 'default',
  disabled: false,
  error: false,
  errorMessages: '',
  hideDetails: 'auto',
  hint:'',
  label: '',
  loading: false,
  name: '',
  noResize: false,
  persistentHint: false,
  placeholder: '',
  appendIcon: '',
  appendInnerIcon: '',
  autoGrow: true,
  rows: 1
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleChange = (value: string) => {
  emits('update:modelValue', value)
}

</script>
