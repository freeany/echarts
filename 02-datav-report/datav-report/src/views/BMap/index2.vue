<template>
  <v-chart :options="options" />
</template>

<script>
// 引入百度地图的扩展, 可以在echart的options配置中写bmap属性。
// 在index.html中引入百度地图 的api才可以使用。 要引入2.0的，如果1.0和3.0的则没有办法结合使用
import "echarts/extension/bmap/bmap";
const testPoint = [
  {
    name: "海门",
    value: [121.15, 31.89, 180],
  },
  {
    name: "南京",
    value: [118.78, 32.04, 200],
  },
];
const testPoint2 = [
  {
    name: "呼和浩特",
    value: [111.834122, 40.859178, 180],
  },
  {
    name: "成都",
    value: [104.07447, 30.580238, 200],
  },
];
export default {
  data() {
    return {
      options: {},
    };
  },
  mounted() {
    this.options = {
      title: {
        text: "慕课外卖销售数据大屏",
        subtext: "销售趋势统计",
        sublink: "https://www.baidu.com",
        left: "center",
      },
      bmap: {
        key: "G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb",
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true, // 地图是否允许缩放
        mapStyle: {
          styleJson: [
            {
              featureType: "water",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "land",
              elementType: "all",
              stylers: {
                color: "#f3f3f3",
              },
            },
            {
              featureType: "railway",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "highway",
              elementType: "all",
              stylers: {
                color: "#fdfdfd",
              },
            },
            {
              featureType: "highway",
              elementType: "labels",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "arterial",
              elementType: "geometry",
              stylers: {
                color: "#fefefe",
              },
            },
            {
              featureType: "arterial",
              elementType: "geometry.fill",
              stylers: {
                color: "#fefefe",
              },
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "green",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "subway",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "manmade",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "local",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "arterial",
              elementType: "labels",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "boundary",
              elementType: "all",
              stylers: {
                color: "#fefefe",
              },
            },
            {
              featureType: "building",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "label",
              elementType: "labels.text.fill",
              stylers: {
                color: "#999999",
              },
            },
          ],
        },
      },
      tooltip: {},
      series: [
        {
          name: "销售额",
          type: "scatter",
          coordinateSystem: "bmap", // 坐标系统采用bmap
          data: testPoint, // 数据源
          symbolSize: function (val) {
            return val[2] / 10; // 定制点的大小
          },
          itemStyle: {
            color: "purple", // 修改点的颜色
          },
          label: {
            // show: true,
            show: false, // 默认不直接显示， 可以使用emphasis进行定制
            position: "right",
            // formatter: "{b}", // 定制label为name，默认是显示value， 还支持返回一个函数，函数默认传入data参数
            formatter: function (v) {
              //   console.log(v);
              return `${v.data.name}-${v.data.value[2]}`;
            },
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          encode: {
            value: 2, // 指定value的第二项为真正的value， 默认为1
          },
        },
        // 第二种图
        {
          name: "top 2",
          type: "effectScatter",
          coordinateSystem: "bmap", // 坐标系统采用bmap
          data: testPoint2, // 数据源
          symbolSize: function (val) {
            return val[2] / 10; // 定制点的大小
          },
          label: {
            show: false, // 默认不直接显示， 可以使用emphasis进行定制
            formatter: "{b}",
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          hoverAnimation: true, // 开启hover上去的动画
          rippleEffect: {
            // 改变波纹的样式
            brushType: "stroke",
          },
          itemStyle: {
            color: "purple",
            shadowBlur: 10, // 添加一些阴影
            shadownColor: "#333",
          },
          encode: {
            value: 2, // 指定value的第二项为真正的value， 默认为1
          },
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>