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

import TeaBreakService from '@/views/site-manager/service/TeaBreakService.vue'
import TeaGiftService from '@/views/site-manager/service/TeaGiftService.vue'

import TeaDIYService from '@/views/site-manager/service/TeaDIY/TeaDIYService.vue'
import CreateTeaDIYService from '@/views/site-manager/service/TeaDIY/CreateTeaDIYService.vue'
import UpdateTeaDIYService from '@/views/site-manager/service/TeaDIY/UpdateTeaDIYService.vue'

import CreateTeaLectureService from '@/views/site-manager/service/Lecture/CreateTeaLectureService.vue'
import UpdateTeaLectureService from '@/views/site-manager/service/Lecture/UpdateTeaLectureService.vue'
import TeaLectureService from '@/views/site-manager/service/Lecture/TeaLectureService.vue'

import CreateTeaPerformService from '@/views/site-manager/service/Perform/CreateTeaPerformService.vue'
import UpdateTeaPerformService from '@/views/site-manager/service/Perform/UpdateTeaPerformService.vue'
import TeaPerformService from '@/views/site-manager/service/Perform/TeaPerformService.vue'

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
          path: '/site-manager/service/teaBreak',
          name: '茶歇服务',
          component: TeaBreakService
        },
        {
          path: '/site-manager/service/teaGift',
          name: '伴手礼',
          component: TeaGiftService
        },
        {
          path: '/site-manager/service/teaDIY',
          name: 'DIY活动',
          component: TeaDIYService
        },
        {
          path: '/site-manager/service/createTeaDIY',
          name: '创建DIY活动',
          component: CreateTeaDIYService
        },
        {
          path: '/site-manager/service/updateTeaDIY',
          name: '修改DIY活动',
          component: UpdateTeaDIYService
        },
        {
          path: '/site-manager/service/teaLecture',
          name: '茶文化讲座',
          component: TeaLectureService
        },
        {
          path: '/site-manager/service/createTeaLecture',
          name: '创建茶文化讲座',
          component: CreateTeaLectureService
        },
        {
          path: '/site-manager/service/updateTeaLecture',
          name: '修改茶文化讲座',
          component: UpdateTeaLectureService
        },
        {
          path: '/site-manager/service/teaPerform',
          name: '茶艺表演',
          component: TeaPerformService
        },
        {
          path: '/site-manager/service/createTeaPerform',
          name: '创建茶艺表演',
          component: CreateTeaPerformService
        },
        {
          path: '/site-manager/service/updateTeaPerform',
          name: '修改茶艺表演',
          component: UpdateTeaPerformService
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
