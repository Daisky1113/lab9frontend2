<template>
  <v-app>
    <Header />
    <v-main>
      <!-- <Login /> -->
      <!-- <Vote /> -->
      <!-- <List /> -->
      <!-- <ProductInfo /> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Login from "./views/Login";
// import Vote from "./views/Vote";
// import List from "./views/List";
// import ProductInfo from "./views/ProductInfo";
import firebase from "firebase";
import Header from "./components/Header";

export default {
  name: "App",
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.$router.push(
          { name: "ProductInfo" },
          () => {},
          () => {}
        );
      } else {
        this.$router.push(
          { name: "Login" },
          () => {},
          () => {}
        );
      }
    });
  },

  components: {
    // Login,
    // Vote,
    // List,
    // ProductInfo,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
