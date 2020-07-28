<template>
  <v-app>
    <Header />
    <v-main>
      <!-- <Login /> -->
      <!-- <Vote /> -->
      <List />
    </v-main>
  </v-app>
</template>

<script>
// import Login from "./views/Login";
// import Vote from "./views/Vote";
import List from "./views/List";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    // Login,
    // Vote,
    List,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
