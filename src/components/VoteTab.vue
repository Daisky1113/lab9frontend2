<template>
  <v-card>
    <v-tabs vertical>
      <v-tab v-for="member in membersData" :key="'tab-' + member.id">
        <v-icon left>mdi-account</v-icon>
        {{ member.name }}
      </v-tab>

      <v-tab-item v-for="member in membersData" :key="'tabItem-' + member.id">
        <ProductDetail
          :productOwner="member.name"
          :productName="member.productName"
          :tecTopix="member.tecTopix"
          :tecDetail="member.tecDetail"
          :serviceDetail="member.serviceDetail"
        >
          <template #btnArea>
            <v-btn outlined @click="vote(member.id)">投票する</v-btn>
          </template>
        </ProductDetail>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import ProductDetail from "./ProductDetails";
export default {
  name: "VoteTab",
  components: {
    ProductDetail,
  },
  data: () => ({}),
  computed: {
    membersData() {
      return new Array(36).fill(null).map((el, index) => ({
        id: index + 1,
        name: "member-" + (index + 1),
        productName: "product-" + (index + 1),
        tecTopix: "Lorem,ipsum,dolor,sit,amet,consectetur,adipiscing",
        tecDetail:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        serviceDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          .split("")
          .reverse()
          .join(""),
      }));
    },
  },
  methods: {
    vote(id) {
      this.$store.commit("openDialog");
      console.log(id);
    },
  },
};
</script>