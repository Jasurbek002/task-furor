<template>
  <Layout :items="Router" :drawer="drawer" >
    <template #header>
      <q-toolbar
        class="bg-white full-width text-black flex items-center justify-between q-py-md"
      >
           <h3>CRUD TEST</h3>
        <q-btn
          class="bg-blue-1"
          color="blue"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer.active = !drawer.active"
        />

        <div class="flex items-center relative-position form-control">
          <q-input
            class="full-width"
            color="blue"
            model-value=""
            dense
            placeholder="Поиск..."
            outlined
          >
            <template v-slot:append>
              <q-icon color="blue" name="search" class="cursor-pointer" />
            </template>
          </q-input>
        </div>



        <q-dialog v-model="dialog.active" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar
                icon="logout"
                color="primary"
                text-color="white"
              />
              <span class="q-ml-sm"
                >Вы действительно хотите уйти?</span
              >
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Нет" color="primary" v-close-popup />
              <q-btn flat label="Да" color="primary" @click="logout"/>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-toolbar>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "./Layout.vue";
import { Router } from "src/constants/routers";
import { ref } from "vue";
import Logo from "src/components/logo/logo.vue";

const drawer = ref({
  active: false,
});



const dialog = ref({
  active: false,
});


function logout() {
  localStorage.removeItem('token')
  window.location.href = '/login'
}
</script>

<style scoped>
.form-control {
  width: 400px;
}

</style>
