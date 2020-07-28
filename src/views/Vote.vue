<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <VoteTab />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VoteTab from "../components/VoteTab";

export default {
  name: "Vote",
  components: {
    VoteTab,
  },
};
</script>