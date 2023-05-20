<script setup lang="ts">
const {row,column} = defineProps({
   row:Array,
   column:Array
})
</script>

<template>
  <q-table :rows="row" :columns="column">
    <slot />
  </q-table>
</template>
