<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <VoteList />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VoteList from "../components/VoteList";
export default {
  name: "List",
  components: {
    VoteList,
  },
};
</script>