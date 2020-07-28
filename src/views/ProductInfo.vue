<template>
  <v-container fluid>
    <v-row justify="center" align>
      <v-col cols="8">
        <ProductDetail />
      </v-col>
      <v-col cols="4">
        <ProductForm />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ProductForm from "../components/ProductForm";
import ProductDetail from "../components/ProductDetails";
export default {
  name: "ProductInfo",
  components: {
    ProductForm,
    ProductDetail,
  },
};
</script>