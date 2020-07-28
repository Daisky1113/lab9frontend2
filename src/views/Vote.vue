<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <VoteDialog />
        <VoteTab />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VoteTab from "../components/VoteTab";
import VoteDialog from "../components/VoteDialog";
export default {
  name: "Vote",
  components: {
    VoteTab,
    VoteDialog,
  },
};
</script>