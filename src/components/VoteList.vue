<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">id</th>
          <th class="text-center">Name</th>
          <th class="text-center">
            技術点
            <v-btn @click="sortMembersData('tecPoint')" icon>
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </th>
          <th class="text-center">
            サービス点
            <v-btn @click="sortMembersData('servicePoint')" icon>
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </th>
          <th class="text-center">
            総合点
            <v-btn @click="sortMembersData('totalPoint')" icon>
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in membersDataWithTotalPoint" :key="`tr-${member.id}`">
          <td class="text-center">{{ member.id }}</td>
          <td class="text-center">{{ member.name }}</td>
          <td class="text-center">{{ member.tecPoint | pointToChars }}</td>
          <td class="text-center">{{ member.servicePoint | pointToChars}}</td>
          <td class="text-center">{{ member.totalPoint }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  computed: {
    membersDataWithTotalPoint() {
      return this.membersData.map((member) => {
        member.totalPoint = (member.tecPoint + member.servicePoint) / 2;
        return member;
      });
    },
  },
  filters: {
    pointToChars: (point) => ["S", "A", "B", "C", "D"][point - 1],
  },
  data: () => ({
    membersData: new Array(36).fill(null).map((el, index) => ({
      id: index + 1,
      name: `member-${index + 1}`,
      tecPoint: Math.ceil(Math.random() * 5),
      servicePoint: Math.ceil(Math.random() * 5),
    })),
  }),
  methods: {
    sortMembersData(sortType) {
      this.membersData.sort((a, b) => {
        return a[sortType] > b[sortType] ? -1 : 1;
      });
    },
  },
};
</script>