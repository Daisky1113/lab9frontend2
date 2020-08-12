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
import { mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.redirectToProductInfo();
        this.setUserWhenUserHasDisplayName(user);
        this.getProductInfo(user.uid);
      } else {
        this.redirectToLogin();
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
  methods: {
    ...mapActions(["getProductInfo"]),
    ...mapMutations(["setUser"]),
    setUserWhenUserHasDisplayName(user) {
      if (user.displayName != "") {
        this.setUser({ uid: user.uid, displayName: user.displayName });
      }
    },
    redirectToProductInfo() {
      this.$router.push(
        { name: "ProductInfo" },
        () => {},
        () => {}
      );
    },

    redirectToLogin() {
      this.$router.push(
        { name: "Login" },
        () => {},
        () => {}
      );
    },
  },
};
</script>
