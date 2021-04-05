<template>
  <v-chart :options="options"></v-chart>
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
          data: [0.38],
          radius: "80%",
          amplitude: "8%", // 波纹的振幅
          color: ["#999"], // 波纹的颜色
          label: {
            formatter: function (param) {
              return Math.floor(param.value * 100) + "%";
            },
            fontSize: 36,
            color: "#999",
            fontWeight: "normal",
            position: ["50%", "50%"],
            insideColor: "#fff", // 重叠的部分
          },
          outline: {
            borderDistance: 0,
            itemStyle: {
              borderWidth: 1,
              borderColor: "#aaa4a4",
              color: "none",
              shadowBlur: 0,
              shadowColor: "#fff",
            },
          },
          backgroundStyle: {
            color: "#fff",
          },
          itemStyle: {
            shadowBlur: 0,
            shadowColor: "#fff",
          },
        },
      ],
    };
    this.getColor();
  },
  methods: {
    getColor() {
      const series = this.options.series[0];
      const value = series.data[0];
      const color =
        value > 0 && value <= 0.5
          ? "rgba(97,216,0,.7)"
          : value > 0.5 && value <= 0.8
          ? "rgba(204,178,26,.7)"
          : value > 0.8
          ? "rgba(241,47,28,.7)"
          : "#c7c7cb";
      series.color = [color];
    },
  },
};
</script>
<style scoped>
</style>