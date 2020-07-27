<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="6">
        <v-card>
          <v-card-title>Hello</v-card-title>
          <v-card-subtitle>world</v-card-subtitle>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-text>
          <v-card-actions>
            <v-btn>lorem</v-btn>
            <v-btn outlined>ipsum</v-btn>
            <v-btn rounded>dolor</v-btn>
            <v-btn tile>sit</v-btn>
            <v-btn text>amet</v-btn>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
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
