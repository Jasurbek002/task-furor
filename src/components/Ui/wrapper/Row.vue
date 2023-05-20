<script setup lang="ts">
const props = defineProps({
  label: String,
});

const back = () =>{
  window.history.back()
}
</script>

<template>
  <div class="row full-width">
    <div class=" full-width flex justify-around aligin-center   ">
     <h4> {{ props.label }}</h4>    <q-btn @click="back" outline color="primary"  >назад</q-btn>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

</style>
