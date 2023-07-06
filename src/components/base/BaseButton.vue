<template>
  <v-btn>
    <template
      v-for="item in Object.keys($slots)"
      :key="item"
      #[item]="slotProps"
    >
      <slot
        :name="item"
        :slot-props="slotProps"
      />
    </template>
  </v-btn>
</template>
