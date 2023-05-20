<script setup lang="ts">
const {styles} = defineProps({
  styles:String
})
</script>


<template>
  <q-form :class="`${styles} flex text-center  items-center full-width wrap q-pa-sm justify-evenly`">
    <slot />
  </q-form>
</template>
