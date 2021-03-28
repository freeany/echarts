<template>
  <div class="total-users">
    <common-card title="累计用户数" value="2, 454, 556">
      <template>
        <!-- <div id="echarts-total-users" style="width: 100%; height: 100%"></div> -->
        <v-chart :options="getOptions()"></v-chart>
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">145.$%</span>
          <div class="increase" />
          <span class="month">月同比</span>
          <span class="emphasis">134.2%</span>
          <div class="decrease" />
        </div>
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
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        xAxis: {
          // type: "value",
          show: false,
        },
        yAxis: {
          type: "category", // 横向的了
          show: false,
        },
        series: [
          {
            type: "bar",
            stack: "总量", // 使用stack可以将两个series进行合并
            data: [20],
            barWidth: 10,
            itemStyle: {
              color: "#45c946",
            },
          },
          {
            type: "bar",
            stack: "总量", // 使用stack可以将两个series进行合并
            data: [25],
            barWidth: 10,
            itemStyle: {
              color: "#eee",
            },
          },
          {
            type: "custom",
            stack: "总量",
            data: [20], // 这个数据与第一个一致
            renderItem(params, api) {
              //   console.log(params, api);
              const value = api.value(0); // 获取这个对象中data数组的第一个元素
              // 拿到200这个位置的坐标系
              const endPoint = api.coord([value, 0]); // 传入x坐标系和y坐标系， 计算实际坐标
              // 因为此时的坐标轴是侧着的，所以y轴是0，x轴是value
              // return {   // 单个的
              //   type: "path", // 设置为path就可以传入一个svg了
              //   position: endPoint,
              //   shape: {
              //     d: "M0 767.909l512.029-511.913L1024 767.909 0 767.909z", // svg图像的内容
              //     x: 0, // 偏移量
              //     y: 0, // 偏移量
              //     width: 20,
              //     height: 20,
              //   },
              //   style: {
              //     fill: "red",
              //   },
              // };
              return {
                type: "group",
                position: endPoint,
                children: [
                  {
                    type: "path",
                    shape: {
                      d:
                        "M1024 255.996 511.971 767.909 0 255.996 1024 255.996z",
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: "cover", // 填满整个容器
                    },
                    style: {
                      fill: "#45c946",
                    },
                  },
                  {
                    type: "path",
                    shape: {
                      d: "M0 767.909l512.029-511.913L1024 767.909 0 767.909z",
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: "cover", // 填满整个容器
                    },
                    style: {
                      fill: "#45c946",
                    },
                  },
                ],
              };
            },
          },
        ],
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>

<svg t="1616844036173" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3415" width="200" height="200"><path d="" p-id="3416"></path></svg>