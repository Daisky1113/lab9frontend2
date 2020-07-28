<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="8">
        <ProductDetail
          productOwner="member.name"
          productName="member.productName"
          tecTopix="member.tecTopix"
          tecDetail="member.tecDetail"
          serviceDetail="member.serviceDetail"
        />
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