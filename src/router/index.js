import Vue from 'vue'
import Router from 'vue-router'
import Print from '@/components/Print'
import Paper from '@/components/Paper'
import DashBoard from '@/components/DashBoard'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: DashBoard
    }, {
        path: '/print',
        name: 'Print',
        component: Print
    }, {
        path: '/paper',
        name: 'Paper',
        component: Paper
    }, {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashBoard
    }]
})