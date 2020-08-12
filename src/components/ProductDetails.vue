<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="2">
          <v-avatar size="128">
            <v-img
              src="https://2.bp.blogspot.com/-Lm75_V4O7JY/V3x2OZbmIFI/AAAAAAAA8II/fzLckySfqnk0k7P-_YkSF8aDEBuUBodpQCLcB/s800/job_programmer.png"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="10">
          <p class="mb-4">created by {{ productData.productOwner }}</p>
          <h1 class="mb-4">{{ productData.productName }}</h1>
          <div class="mb-12 tec-topix">
            <v-chip
              v-for="(chip, index) in chips"
              :key="`chip-${index}`"
              class="mt-2 mr-2"
            >{{ chip }}</v-chip>
          </div>
          <div class="mb-12 tec-detail">
            <h2 class="mb-4">技術的こだわり</h2>
            <p>{{ productData.tecDetail }}</p>
          </div>
          <div class="mb-12 service-detail">
            <h2 class="mb-4">サービス的こだわり</h2>
            <p>{{ productData.serviceDetail }}</p>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <slot name="btnArea"></slot>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "ProductDetails",
  props: {
    productData: Object,
    productOwner: String,
    productName: String,
    tecTopix: String,
    tecDetail: String,
    serviceDetail: String,
  },
  computed: {
    chips() {
      return this.productData.tecTopix.split(",");
    },
  },
};
</script>