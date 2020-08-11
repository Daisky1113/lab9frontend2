<template>
  <v-card>
    <v-card-title>
      {{ titleText }}
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
      <v-btn @click="sendAuthRequest" text>{{ btnText }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
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
  computed: {
    titleText() {
      return this.isSignup ? "サインアップ" : "ログイン";
    },
    btnText() {
      return this.isSignup ? "登録する" : "ログインする";
    },
  },
  methods: {
    ...mapActions(["signup", "login"]),
    sendAuthRequest() {
      if (this.isSignup) {
        this._signup();
      } else {
        this._login();
      }
    },
    _login() {
      // ログイン用メソッドをこの中にかく
      this.login();
    },
    _signup() {
      // サインアップ用のメソッドをこの中にかく
      this.signup();
    },
  },
};
</script>
