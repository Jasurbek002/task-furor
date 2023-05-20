<script setup lang="ts">
const props = defineProps({
  value1:String,
  value2:String
})
</script>

<template>
   <q-card-section class="text-h6 q-pa-none">
 {{ props.value1 + " : " + (props.value2 !=='' ? props.value2 : " ") }}
   </q-card-section>
</template>
