<script setup lang="ts">
 const props = defineProps({
  label:String
 })
</script>

<template>
  <div class="col">
    <h2 class="full-width  text-left text-h6 text-indigo-10">{{ props.label }}</h2>
      <slot />
  </div>
</template>



<style scoped>
.col{
  display: flex;
  align-items: center;
flex-direction: column;
}
</style>
