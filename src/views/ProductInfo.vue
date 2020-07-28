<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="8"></v-col>
      <v-col cols="4">
        <ProductForm />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ProductForm from "../components/ProductForm";
export default {
  name: "ProductInfo",
  components: {
    ProductForm,
  },
};
</script>