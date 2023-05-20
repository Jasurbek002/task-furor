<template>
  <q-layout view="hHh Lpr lFf">
    <q-header  bordered class=" bg-amber-1">
      <slot name="header"></slot>
    </q-header>

    <q-drawer v-model="drawer.active" show-if-above bordered >
      <q-expansion-item icon="menu" class="text-blue" label="Home">
        <q-item
          v-for="(item, i) of items"
          :key="i"
          :to="item.to"
          class="q-ml-sm"
          active-class="q-item-no-link-highlighting"
        >
          <q-item-section avatar>
            <q-icon color="blue" :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-blue">{{ item.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view></router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">


export interface Link {
  to: string;
  icon: string;
  title: string;
}

export interface Props {
  items: Link[];
  drawer: { active: boolean };
}

const { items, drawer } = defineProps<Props>();
</script>

<style>
.header-q {
  display: flex !important;
  justify-content: space-between;
  gap: 1rem;
}
</style>
