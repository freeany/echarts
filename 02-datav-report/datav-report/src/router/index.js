import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import BMap from '../views/BMap'
import BMap2 from '../views/BMap/index2'
import LiquidFill from '../views/LiquidFill'
import WorldCloud from '../views/WorldCloud'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/bmap',
        name: 'bmap',
        component: BMap
    },
    {
        path: '/bmap2',
        name: 'bmap2',
        component: BMap2
    },
    {
        path: '/liquidfill',
        name: 'LiquidFill',
        component: LiquidFill
    },
    {
        path: '/worldcloud',
        name: 'WorldCloud',
        component: WorldCloud
    }
]

const router = new VueRouter({
    routes
})

export default router
