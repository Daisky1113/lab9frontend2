<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="360px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">投票フォーム</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <p class="subtitle">技術点</p>
              <v-radio-group row v-model="inputData.tecPoint">
                <v-radio
                  v-for="(n,index) in 'SABCD'.split('')"
                  :key="'tec-' + n"
                  :label="n"
                  :value="index + 1"
                ></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12">
              <p class="subtitle">サービス点</p>
              <v-radio-group row v-model="inputData.servicePoint">
                <v-radio
                  v-for="(n,index) in 'SABCD'.split('')"
                  :key="'service-' + n"
                  :label="n"
                  :value="index + 1"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="sendData">投票する</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  computed: {
    inputData() {
      return {
        tecPoint: 0,
        servicePoint: 0,
      };
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    sendData() {
      console.log(this.inputData);
      this.dialog = false;
    },
  },
};
</script>