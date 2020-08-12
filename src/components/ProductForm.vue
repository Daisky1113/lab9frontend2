<template>
  <v-card flat>
    <v-card-text>
      <v-text-field :value="productData.productName" outlined label="プロダクト名"></v-text-field>
      <v-textarea :value="productData.tecTopix" outlined label="使用技術"></v-textarea>
      <v-textarea :value="productData.tecDetail" outlined label="技術的に工夫したところ"></v-textarea>
      <v-textarea :value="productData.serviceDetail" outlined label="サービス的に工夫したところ"></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="regist" text>登録する</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "ProductInfo",
  props: {
    productData: Object,
  },
  data: () => ({
    inputData: {
      productName: "",
      tecTopix: "",
      tecDetail: "",
      serviceDetail: "",
    },
  }),
  methods: {
    ...mapMutations([
      "updateProductName",
      "updatetecTopix",
      "updatetecDetail",
      "updateServiceDetail",
    ]),
    ...mapActions(["postProductInfo"]),
    regist() {
      const inputs = Object.assign({}, this.inputData);
      this.postProductInfo(inputs);
    },
  },
};
</script>