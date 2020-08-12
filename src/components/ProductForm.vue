<template>
  <v-card flat>
    <v-card-text>
      <v-text-field v-model="inputData.productName" outlined label="プロダクト名"></v-text-field>
      <v-textarea v-model="inputData.tecTopix" outlined label="使用技術"></v-textarea>
      <v-textarea v-model="inputData.tecDetail" outlined label="技術的に工夫したところ"></v-textarea>
      <v-textarea v-model="inputData.serviceDetail" outlined label="サービス的に工夫したところ"></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="regist" text>登録する</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ProductInfo",
  data: () => ({
    inputData: {
      productName: "",
      tecTopix: "",
      tecDetail: "",
      serviceDetail: "",
    },
  }),
  methods: {
    ...mapActions(["postProductInfo"]),
    regist() {
      this.postProductInfo(this.inputData);
    },
  },
};
</script>