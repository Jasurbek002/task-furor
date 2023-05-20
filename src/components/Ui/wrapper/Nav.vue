<script setup lang="ts">
const props = defineProps({
  label: String,
});

const back = () => {
  window.history.back();
};
</script>

<template>
  <div class="full-width flex justify-around aligin-center q-ma-xl">
    <h4 class="text-blue-5">{{ props.label }}</h4>
    <q-btn @click="back" outline color="primary">назад</q-btn>
  </div>
</template>
