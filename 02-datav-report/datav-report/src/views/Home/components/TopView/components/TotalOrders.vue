<template>
  <div class="total-orders">
    <common-card title="累计订单量" value="4,804,824">
      <template>
        <!-- <div id="echarts-total-orders" style="width: 100%; height: 100%"></div> -->
        <v-chart :options="getOptions()"></v-chart>
      </template>
      <template v-slot:footer>
        <span>昨日订单量 </span>
        <span class="emphasis">800</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixins from "@/mixins/commonCardMixins.js";
export default {
  mixins: [commonCardMixins],
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: "category", // 不设置这个则配置无效, 默认是value
          show: false,
          boundaryGap: false, // 默认图表与两侧有小小的艰巨
          // 如果category的情况下设置data则要与series中的data一一对应
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "line", // 渲染的是一个折线图
            data: [
              620,
              432,
              220,
              534,
              790,
              430,
              220,
              320,
              532,
              320,
              834,
              690,
              530,
              220,
              620,
            ],
            areaStyle: {
              color: "purple",
            },
            lineStyle: {
              width: 0, // 线条
            },
            itemStyle: {
              opacity: 0,
            },
            smooth: true, // 平滑
          },
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      };
    },
  },
};
</script>
<style scoped>
</style>