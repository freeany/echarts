<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">119,543</div>
                <v-chart :options="searchUserOption" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">224,670</div>
                <v-chart :options="searchNumberOption" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" />
                <el-table-column prop="keyword" label="关键词" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
                <el-table-column prop="range" label="搜索占比" />
              </el-table>
              <el-pagination layout="prev, pager, next" :total="1" background />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group
                v-model="radioSelect"
                size="small"
                @change="onCategoryChange"
              >
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
const colors = [
  "#8d7fec",
  "#5085f2",
  "#f8726b",
  "#e7e702",
  "#78f283",
  "#4bc1fc",
];

const wordCloud = [
  {
    word: "北京",
    count: 8600,
    user: 2820,
  },
  {
    word: "上海",
    count: 6790,
    user: 4216,
  },
  {
    word: "广州",
    count: 6969,
    user: 1802,
  },
  {
    word: "深圳",
    count: 8784,
    user: 3129,
  },
  {
    word: "南京",
    count: 5593,
    user: 4303,
  },
  {
    word: "杭州",
    count: 5097,
    user: 2838,
  },
  {
    word: "合肥",
    count: 5535,
    user: 1387,
  },
  {
    word: "济南",
    count: 89,
    user: 14,
  },
  {
    word: "太原",
    count: 1004,
    user: 180,
  },
  {
    word: "成都",
    count: 5235,
    user: 5058,
  },
  {
    word: "重庆",
    count: 1865,
    user: 1854,
  },
  {
    word: "苏州",
    count: 2573,
    user: 1194,
  },
  {
    word: "无锡",
    count: 3940,
    user: 781,
  },
  {
    word: "常州",
    count: 8811,
    user: 2292,
  },
  {
    word: "温州",
    count: 3939,
    user: 3030,
  },
  {
    word: "哈尔滨",
    count: 9541,
    user: 7844,
  },
  {
    word: "长春",
    count: 157,
    user: 63,
  },
  {
    word: "大连",
    count: 4124,
    user: 956,
  },
  {
    word: "沈阳",
    count: 2193,
    user: 1590,
  },
  {
    word: "拉萨",
    count: 3029,
    user: 2511,
  },
  {
    word: "呼和浩特",
    count: 2716,
    user: 552,
  },
  {
    word: "武汉",
    count: 6134,
    user: 696,
  },
  {
    word: "南宁",
    count: 8024,
    user: 477,
  },
  {
    word: "必胜客",
    count: 6015,
    user: 5863,
  },
  {
    word: "肯德基",
    count: 5564,
    user: 5459,
  },
  {
    word: "麦当劳",
    count: 9164,
    user: 6260,
  },
  {
    word: "海底捞",
    count: 3316,
    user: 937,
  },
  {
    word: "美食",
    count: 9161,
    user: 2108,
  },
  {
    word: "商超",
    count: 7166,
    user: 5005,
  },
  {
    word: "水果",
    count: 6861,
    user: 4955,
  },
  {
    word: "跑腿",
    count: 8683,
    user: 3860,
  },
  {
    word: "送药",
    count: 4808,
    user: 4007,
  },
  {
    word: "烩饭",
    count: 8519,
    user: 8489,
  },
  {
    word: "面条",
    count: 4020,
    user: 401,
  },
  {
    word: "小龙虾",
    count: 7451,
    user: 6121,
  },
  {
    word: "牛肉",
    count: 1655,
    user: 458,
  },
  {
    word: "鸡腿",
    count: 6458,
    user: 2592,
  },
  {
    word: "全家桶",
    count: 3196,
    user: 2131,
  },
  {
    word: "麦乐鸡",
    count: 8084,
    user: 2569,
  },
  {
    word: "炭烤",
    count: 6625,
    user: 5153,
  },
  {
    word: "麻辣",
    count: 5886,
    user: 3343,
  },
  {
    word: "冒菜",
    count: 1296,
    user: 236,
  },
];
const data1 = {
  axisX: [
    "粉面粥店",
    "简餐便当",
    "汉堡披萨",
    "香锅冒菜",
    "小吃炸串",
    "地方菜系",
    "轻食简餐",
  ],
  data1: [12, 25, 54, 58, 30, 57, 90],
  data2: [88, 75, 46, 42, 70, 43, 10],
};
export default {
  data() {
    return {
      searchUserOption: {},
      searchNumberOption: {},
      categoryOptions: {},
      tableData: [],
      radioSelect: "品类",
    };
  },
  methods: {
    onCategoryChange() {},
    renderLineChart() {
      const createOption = (key) => {
        const data = [];
        const axis = [];
        wordCloud.forEach((item) => data.push(item[key]));
        wordCloud.forEach((item) => axis.push(item.word));
        return {
          xAxis: {
            type: "category", // value为一条直线，category可以为一个离散的数据(曲线)
            boundaryGap: false,
            data: axis,
          },
          yAxis: {
            show: false,
            // 如果发现折线顶到上面了，那么可以设置min和max
            min: 0,
            max: 10000, // 如果是数据是动态的，那么需要进行计算。
          },
          tooltip: {},
          series: [
            {
              type: "line",
              data,
              areaStyle: {
                color: "rgba(95,187,255,.5)",
              },
              // 折线图上的那条线
              lineStyle: {
                color: "rgb(95,187,255)",
              },
              // 折线图上的点
              itemStyle: {
                opacity: 0,
              },
              smooth: true,
            },
          ],
          grid: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          },
        };
      };
      this.searchUserOption = createOption("user");
      this.searchNumberOption = createOption("count");
    },
    renderPieChart() {
      const chartData = [];
      const data = data1.data1.slice(0, 6);
      const axis = data1.axisX.slice(0, 6);
      const total = data.reduce((s, i) => s + i, 0);
      data.forEach((item, index) => {
        const percent = `${((item / total) * 100).toFixed(2)}%`;
        chartData.push({
          legendname: axis[index],
          value: item,
          percent,
          itemStyle: {
            color: colors[index],
          },
          name: `${axis[index]} | ${percent}`, // legend
        });
      });
      this.categoryOptions = {
        tooltip: {
          // 定制tooltip
          formatter: function (params) {
            const str =
              params.seriesName +
              "<br />" +
              params.marker +
              params.data.legendname +
              "<br />" +
              "数量: " +
              params.data.value +
              "<br />" +
              "占比: " +
              params.data.percent;
            return str;
          },
        },
        legend: {
          type: "scroll", // 可以滑动
          orient: "vertical",
          height: 250, // legend的整体高度，当超过这个高度会产生scroll
          left: "70%",
          top: "middle",
          textStyle: {
            color: "#8c8c8c",
          },
        },
        title: [
          {
            text: "品类分布",
            textStyle: {
              fontSize: 14,
              color: "#666",
            },
          },
          // 将title放到内部
          {
            text: "累计订单量",
            subtext: "320",
            x: "34.5%", // 设置x轴的位置
            y: "42.5%", // 设置y轴的位置
            textAlign: "center", // 将title移至中间。
            textStyle: {
              fontSize: 14,
              color: "#999",
            },
            subtextStyle: {
              fontSize: 28,
              color: "#333",
            },
          },
        ],
        series: [
          {
            name: "品类分布",
            type: "pie",
            data: chartData,
            label: {
              normal: {
                show: true, // 饼图小横线出的类目名默认不显示，这里让他显示
                // position: "outter", // 默认outter
                // position: "inner",
                // 定制label
                formatter: function (params) {
                  //   console.log(params);
                  return params.data.legendname;
                },
              },
            },
            center: ["35%", "50%"],
            radius: ["45%", "60%"], // 变成了环形， 第一个表示内半径，第二个表示外半径。内半径的意思是圆心到达内圈的距离，外半径表示圆心到达外圈的距离。 环形的粗细是外半径减内半径。 百分比的意思是取画布宽高中较短的那个长度，然后取该长度的百分比作为圆的直径
            // 当label的position为outter时，会有两条横线
            labelLine: {
              normal: {
                length: 5, // 设置横线1的样式
                length2: 3, // 设置横线2的样式
                smooth: true, // 让横线变得平滑
              },
            },
            clockwise: true, // 按series中数据的顺时针进行显示。
            itemStyle: {
              borderWidth: 4, // 设置饼图每个环之间的间隔
              borderColor: "#fff",
            },
          },
        ],
      };
    },
  },
  mounted() {
    this.renderLineChart();
    this.renderPieChart();
  },
};
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;

  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;

    &:first-child {
      padding: 0 10px 0 0;
    }

    &:last-child {
      padding: 0 0 0 10px;
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;

      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }

    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;

      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;

        .chart {
          flex: 1;
          padding: 0 10px;

          .chart-title {
            color: #999;
            font-size: 14px;
          }

          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }

          .echarts {
            height: 50px;
          }
        }
      }

      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;

        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
