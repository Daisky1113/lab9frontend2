<template>
  <v-app>
    <Header />
    <v-main>
      <!-- <Login /> -->
      <!-- <Vote /> -->
      <!-- <List /> -->
      <ProductInfo />
    </v-main>
  </v-app>
</template>

<script>
// import Login from "./views/Login";
// import Vote from "./views/Vote";
// import List from "./views/List";
import ProductInfo from "./views/ProductInfo";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    // Login,
    // Vote,
    // List,
    ProductInfo,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
