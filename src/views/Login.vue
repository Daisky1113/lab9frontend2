<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="4">
        <LoginForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from "../components/Loginform";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>