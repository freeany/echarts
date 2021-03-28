import Vue from 'vue'
import * as ECharts from 'echarts'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import vECharts from 'vue-echarts'

import '@/styles/index.css'


Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('v-chart', vECharts)


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
