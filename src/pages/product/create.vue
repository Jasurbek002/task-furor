<script setup>
import Row from "../../components/Ui/wrapper/Row.vue";
import Form from "src/components/Ui/form/form.vue";
import Text from "src/components/Ui/form/text.vue";
import { ref } from "vue";
import ProductService from "./../../services/ProductService"


const products = ref({
  product_type_id:0,
  name_uz:"",
  cost:0,
  address:"",
  created_date:""
});

async function setProducts(e) {
   e.preventDefault()
   console.log(products.value);
   await ProductService.postProducts(products.value)
}

</script>

<template>
  <Row label="Создать Products">
    <Form>

      <Text type="text" v-model="products.name_uz" label="Name"/>
      <Text type="number" name="Type" label="Type" v-model="products.product_type_id"/>
      <Text type="number" name="Cost" label="Cost" v-model="products.cost" />
      <Text type="text" name="Address" label="Address" v-model="products.address" />
      <Text type="date" name="Address" label="Address" v-model="products.created_date" />

      <div class="full-width flex q-ma-xl justify-end">
              <q-btn @click="setProducts($event)" type="submit" outline color="primary">создавать</q-btn>
      </div>
    </Form>
  </Row>
</template>
