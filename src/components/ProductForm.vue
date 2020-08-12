<template>
  <v-card flat>
    <v-card-text>
      <v-text-field
        @input="updateProductName"
        :value="productData.productName"
        outlined
        label="プロダクト名"
      ></v-text-field>
      <v-textarea @input="updatetecTopix" :value="productData.tecTopix" outlined label="使用技術"></v-textarea>
      <v-textarea
        @input="updatetecDetail"
        :value="productData.tecDetail"
        outlined
        label="技術的に工夫したところ"
      ></v-textarea>
      <v-textarea
        @input="updateServiceDetail"
        :value="productData.serviceDetail"
        outlined
        label="サービス的に工夫したところ"
      ></v-textarea>
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
  data: () => ({}),
  methods: {
    ...mapMutations([
      "updateProductName",
      "updatetecTopix",
      "updatetecDetail",
      "updateServiceDetail",
    ]),
    ...mapActions(["postProductInfo"]),
    regist() {
      this.postProductInfo(this.productData);
    },
  },
};
</script>