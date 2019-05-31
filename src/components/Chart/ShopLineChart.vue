<template>
  <line-chart :chart-data="datacollection" :width="width" :height="height"></line-chart>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
  components: {
    LineChart
  },
  props: {
    datasets: Array,
    labels: Array,
    width: Number,
    height: Number
  },
  data() {
    return {
      datacollection: {
        labels: this.labels,
        datasets: this.datasets
      }
    };
  }
};
</script>
