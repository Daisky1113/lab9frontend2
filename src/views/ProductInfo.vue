<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="8">
        <ProductDetail
          :productData="productInfo"
          productOwner="member.name"
          productName="member.productName"
          tecTopix="member.tecTopix"
          tecDetail="member.tecDetail"
          serviceDetail="member.serviceDetail"
        />
      </v-col>
      <v-col cols="4">
        <ProductForm :productData="productInfo" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ProductForm from "../components/ProductForm";
import ProductDetail from "../components/ProductDetails";
import { mapState } from "vuex";
export default {
  name: "ProductInfo",
  computed: {
    ...mapState(["productInfo"]),
  },
  components: {
    ProductForm,
    ProductDetail,
  },
};
</script>