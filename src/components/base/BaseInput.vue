<template>
  <v-textarea 
    :id="id"
    :model-value="modelValue"
    :auto-grow="noResize ? undefined : autoGrow"
    :clearable="clearable"
    :density="density"
    clear-icon="mdi-close-circle"
    :direction="direction"
    :disabled="disabled"
    :error="error"
    :error-messages="errorMessages"
    :hide-details="hideDetails"
    :hint="hint"
    :label="label"
    :loading="loading"
    :max-errors="maxErrors"
    :no-resize="true"
    :persistent-hint="persistentHint"
    :placeholder="placeholder"
    :append-icon="appendIcon"
    :append-inner-icon="appendInnerIcon"
    :readonly="readonly"
    :rows="rows"
    @update:model-value="handleChange"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: string
  autoGrow: boolean
  clearable: boolean
  density: 'default' | 'comfortable' | 'compact'
  direction: 'horizontal' | 'vertical'
  disabled: boolean
  error: boolean
  errorMessages: string | string[]
  hideDetails: 	boolean | 'auto'
  hint: string
  id: string
  label: string
  loading: boolean
  maxErrors: string | number
  name: string
  noResize: boolean
  persistentHint: boolean
  placeholder: string
  appendIcon: string 
  appendInnerIcon: string 
  readonly: boolean
  rows: string | number
}>(), { 
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
