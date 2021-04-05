import Vue from 'vue'
import * as ECharts from 'echarts'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts.js' // 如果数据大盘的地图使用v-charts进行移植，那么就不需要引入任何资源了，index.html的js 和 echarts/extension/bmap/bmap就不需要引入了。

import vECharts from 'vue-echarts'

import '@/styles/index.css'


Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('v-chart', vECharts)


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
