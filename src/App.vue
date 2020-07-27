<template>
  <v-app>
    <Header />
    <v-main>
      <Login />
    </v-main>
  </v-app>
</template>

<script>
import Login from "./views/Login";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Login,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
