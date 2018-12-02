import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/views/home.vue'

import ClassicalCase from '@/views/site-manager/case/ClassicalCase'
import CreateCaseView from '@/views/site-manager/case/CreateCaseView'
import UpdateCaseView from '@/views/site-manager/case/UpdateCaseView'

import NewsCenter from '@/views/site-manager/post/NewsCenter'
import CreateNewsView from '@/views/site-manager/post/CreateNewsView'
import UpdateNewsView from '@/views/site-manager/post/UpdateNewsView'

import SiteConfig from '@/views/site-manager/SiteConfig'

import OrderQuery from '@/views/order-manager/OrderQuery'

import InfoManager from '@/views/system-preferences/InfoManager.vue'
import UserManager from '@/views/system-preferences/UserManager.vue'
import CreateUserView from '@/views/system-preferences/CreateUserView.vue'
import UpdateUserView from '@/views/system-preferences/UpdateUserView.vue'
import LogShower from '@/views/system-preferences/LogShower.vue'

import MiniProgramData from '@/views/data-shower/MiniProgramData.vue'
import SiteData from '@/views/data-shower/SiteData.vue'

import TeaBreak from '@/views/item-manager/TeaBreak.vue'
import TeaDessert from '@/views/item-manager/TeaDessert.vue'
import TeaGift from '@/views/item-manager/TeaGift.vue'
import TeaOther from '@/views/item-manager/TeaOther.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/site-manager/classical-case',
          name: '经典案例',
          component: ClassicalCase
        },
    
        {
          path: '/site-manager/classical-case/create-case',
          name: '新增案例',
          component: CreateCaseView
        },
    
        {
          path: '/site-manager/classical-case/update-case',
          name: '修改案例',
          component: UpdateCaseView
        },
        {
          path: '/site-manager/news-center',
          name: '新闻中心',
          component: NewsCenter
        },
        {
          path: '/site-manager/news-center/create-news',
          name: '新建文章',
          component: CreateNewsView
        },
        {
          path: '/site-manager/news-center/update-news',
          name: '修改文章',
          component: UpdateNewsView
        },
        {
          path: '/order-manager/order-query',
          name: '订单查询',
          component: OrderQuery
        },
        {
          path: '/site-manager/site-config',
          name: '网站管理',
          component: SiteConfig
        },
    
        {
          path: '/system-preferences/info-manager',
          name: '信息管理',
          component: InfoManager
        },
        {
          path: '/system-preferences/user-manager',
          name: '用户管理',
          component: UserManager
        },
        {
          path: '/system-preferences/user-manager/create-user',
          name: '创建用户',
          component: CreateUserView
        },
        {
          path: '/system-preferences/user-manager/update-user',
          name: '修改用户',
          component: UpdateUserView
        },
    
        {
          path: '/data-shower/mini-program-data',
          name: '小程序数据',
          component: MiniProgramData
        },
        {
          path: '/data-shower/site-data',
          name: '网站数据',
          component: SiteData
        },
        {
          path: '/item-manager/tea-break',
          name: '茶歇管理',
          component: TeaBreak
        },
        {
          path: '/item-manager/tea-dessert',
          name: '茶点管理',
          component: TeaDessert
        },
        {
          path: '/item-manager/tea-gift',
          name: '茶礼管理',
          component: TeaGift
        },
        {
          path: '/item-manager/tea-other',
          name: '其它管理',
          component: TeaOther
        },
        {
          path: '/system-preferences/log-shower',
          name: '操作日志',
          component: LogShower
        }
      ]
    }
  ]
})
