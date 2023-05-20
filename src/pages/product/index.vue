<script setup lang="ts">
import { useDataStore } from "src/stores/data";
import { ref ,onMounted} from "vue";
import ProductService from "src/services/ProductService";
const store = useDataStore()

const data = ref([])

async function getData(){
 const data1 = await ProductService.getProducts()
 data.value = data1
 store.setData(data1)
}
getData()

async function remove(id:number){
    await ProductService.deleteProduct(id)
}



const column = store.getDataColumn

console.log(column);

const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 5
})

const pageNumber = ref(Math.ceil(data.value.length / pagination.value.rowsPerPage));

</script>

<template>
  <q-table
  virtual-scroll
  flat bordered
    style="height:530px;"
    class="teal-10"
    :title-class="{ 'text-h4  text-blue': [true] }"
    title="Products"
    :rows="data"
    :columns="column"
    row-key="name"
    separator="cell"
    v-model:pagination="pagination"
    hide-pagination
  >
    <template #top-right>
      <q-btn outline to="/product/create" class="q-my-md" color="primary" icon="add"
        >Создавать</q-btn
      >
    </template>



    <template #body-cell-edit="props">
      <q-td :props="props">
        <q-btn
          outline
          color="blue"
          :to="`/product/edit/${props.row.id}`"
          icon="edit"
          fab-mini
          :flat="false"
        ></q-btn>
      </q-td>
    </template>

    <template #body-cell-delete="props">
      <q-td :props="props">
        <q-btn
        @click="remove(props.row.id)"
          outline
          color="red"
          icon="delete"
          fab-mini
          :flat="false"
        ></q-btn>
      </q-td>
    </template>

    <template #bottom>
      <q-pagination
        class="full-width text-center q-pa-lg"
        v-model="pagination.page"
        :max="pageNumber"
        direction-links
      />
    </template>
  </q-table>
</template>
