<template>
  <v-app>
    <Header />
    <v-main>
      <!-- <Login /> -->
      <Vote />
    </v-main>
  </v-app>
</template>

<script>
// import Login from "./views/Login";
import Vote from "./views/Vote";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    // Login,
    Vote,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
