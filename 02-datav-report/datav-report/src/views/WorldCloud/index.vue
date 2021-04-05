<template>
  <v-chart :options="options"></v-chart>
</template>

<script>
import "echarts-wordcloud";
export default {
  data() {
    return {
      options: {
        series: [
          {
            type: "wordCloud",
            left: 20,
            top: "center",
            textStyle: {
              normal: {
                fontFamily: "sans-serif",
                fontWeight: "bold",
                color: function () {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                    ].join(",") +
                    ")"
                  );
                },
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },

            data: [
              {
                name: "宇宙",
                value: 380,
              },
              {
                name: "银河系",
                value: 280,
              },
              {
                name: "风河系",
                value: 320,
              },
              {
                name: "太阳系",
                value: 180,
              },
              {
                name: "天马系",
                value: 230,
              },
              {
                name: "仙女系",
                value: 120,
              },
              {
                name: "地球",
                value: 80,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
</style>