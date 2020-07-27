<template>
  <v-card>
    <v-card-title>ログイン</v-card-title>
    <v-card-text>
      <v-text-field outlined label="email" prepend-inner-icon="mdi-email-outline"></v-text-field>
      <v-text-field outlined type="password" label="password" prepend-inner-icon="mdi-lock-outline"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text>ログインする</v-btn>
    </v-card-actions>
  </v-card>
</template>
