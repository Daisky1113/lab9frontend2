<template>
  <v-row justify="center">
    <v-dialog v-model="isDialogActive" persistent max-width="360px">
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
          <v-btn color="blue darken-1" text @click="closeDialog">Close</v-btn>
          <v-btn color="blue darken-1" text @click="sendData">投票する</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    tecPoint: Number,
    servicePoint: Number,
  },
  computed: {
    isDialogActive() {
      return this.$store.state.UI.dialog;
    },
    inputData() {
      return {
        tecPoint: this.tecPoint,
        servicePoint: this.servicePoint,
      };
    },
  },
  data: () => ({}),
  methods: {
    closeDialog() {
      this.$store.commit("closeDialog");
    },
    sendData() {
      console.log(this.inputData);
      this.closeDialog();
    },
  },
};
</script>