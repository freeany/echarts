<template>
  <v-chart :options="options"></v-chart>
  <!-- <div id="container"></div> -->
</template>

<script>
// 安装echarts-liquidfill
import "echarts-liquidfill";
export default {
  data() {
    return {
      options: {},
    };
  },
  mounted() {
    const data = [0.68, 0.5, 0.4, 0.3];
    this.options = {
      series: [
        {
          type: "liquidFill",
          data: [0.6],
        },
      ],
    };
  },
};
</script>
<style scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>