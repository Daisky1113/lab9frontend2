<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="6">
        <v-card>
          <v-card-title>ログイン</v-card-title>
          <v-card-text>
            <v-text-field outlined label="email" prepend-inner-icon="mdi-email-outline"></v-text-field>
            <v-text-field
              outlined
              type="password"
              label="password"
              prepend-inner-icon="mdi-lock-outline"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined>ログインする</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({}),
};
</script>
