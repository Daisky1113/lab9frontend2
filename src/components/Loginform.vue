<template>
  <v-card>
    <v-card-title>
      ログインする
      <v-spacer></v-spacer>
      <v-switch label="signup" v-model="isSignup"></v-switch>
    </v-card-title>
    <v-card-text>
      <v-text-field
        v-if="isSignup"
        v-model="inputData.userName"
        outlined
        label="name"
        prepend-inner-icon="mdi-account-outline"
      ></v-text-field>

      <v-text-field
        v-model="inputData.email"
        outlined
        label="email"
        prepend-inner-icon="mdi-email-outline"
      ></v-text-field>
      <v-text-field
        v-model="inputData.password"
        outlined
        type="password"
        label="password"
        prepend-inner-icon="mdi-lock-outline"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="login" text>ログインする</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "LoginForm",
  data: () => ({
    isSignup: false,
    inputData: {
      userName: "",
      email: "",
      password: "",
    },
  }),
  methods: {
    login() {
      console.log(this.inputData);
    },
  },
};
</script>
