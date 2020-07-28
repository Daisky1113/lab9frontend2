<template>
  <v-card>
    <v-tabs vertical>
      <v-tab v-for="member in membersData" :key="'tab-' + member.id">
        <v-icon left>mdi-account</v-icon>
        {{ member.name }}
      </v-tab>

      <v-tab-item v-for="member in membersData" :key="'tabItem-' + member.id">
        <v-card flat>
          <v-card-text>
            <p>Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
export default {
  name: "VoteTab",
  data: () => ({}),
  computed: {
    membersData() {
      return new Array(36).fill(null).map((el, index) => ({
        id: index + 1,
        name: "member-" + (index + 1),
      }));
    },
  },
};
</script>