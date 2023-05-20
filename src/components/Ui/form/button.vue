<script setup lang="ts">
const props = defineProps({
  label: String,
  submit: Event
})
</script>


<template>
  <q-btn @click="props.submit" type="submit" outline color="primary">{{ props.label }}</q-btn>
</template>
