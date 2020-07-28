<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <VoteDialog />
        <VoteList />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VoteList from "../components/VoteList";
import VoteDialog from "../components/VoteDialog";
export default {
  name: "List",
  components: {
    VoteList,
    VoteDialog,
  },
};
</script>