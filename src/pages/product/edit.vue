<script setup lang="ts">
import { ref } from "vue";
import Row from "src/components/Ui/wrapper/Row.vue";
import Form from "src/components/Ui/form/form.vue";
import Text from "src/components/Ui/form/text.vue";
import Button from "src/components/Ui/form/button.vue";
import { useRoute } from "vue-router";
import { useDataStore } from "src/stores/data";
import ProductService from "src/services/ProductService";
const store = useDataStore()
const router = useRoute();
const id = router.params.id;
const data = store.getOneData(+id)
const products = ref({
  id:data?.id,
  product_type_id:data?.product_type_id,
  name_uz:data?.name_uz,
  cost:data?.cost,
  address:data?.address,
  created_date:data?.created_date
});

async function edit(e:Event){
  e.preventDefault()
  await ProductService.editProduct(products.value)
}

</script>

<template>
  <Row label="Edit Product">
    <Form>
      <Text name="Name" v-model="products.name_uz" label="Name"/>
      <Text type="number" name="Type" label="Type" v-model="products.product_type_id"/>
      <Text type="number" name="Cost" label="Cost" v-model="products.cost" />
      <Text name="Address" label="Address" v-model="products.address" />
      <Text name="date" label="date" v-model="products.created_date" />

      <div class="full-width flex q-ma-xl justify-end">
        <Button @click="edit($event)" label="Edit" />
      </div>
    </Form>
  </Row>
</template>
