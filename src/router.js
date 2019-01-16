import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/views/home.vue'

import ClassicalCase from '@/views/site-manager/case/ClassicalCase'
import UpdateCaseView from '@/views/site-manager/case/UpdateCaseView'

import NewsCenter from '@/views/site-manager/post/NewsCenter'
import UpdateNewsView from '@/views/site-manager/post/UpdateNewsView'

import SiteConfig from '@/views/site-manager/SiteConfig'

import UserManager from '@/views/system-preferences/UserManager.vue'
import UpdateUserView from '@/views/system-preferences/UpdateUserView.vue'

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
          path: '/site-manager/news-center/update-news',
          name: '修改文章',
          component: UpdateNewsView
        },
        {
          path: '/site-manager/site-config',
          name: '网站管理',
          component: SiteConfig
        },

        {
          path: '/system-preferences/user-manager',
          name: '用户管理',
          component: UserManager
        },
        {
          path: '/system-preferences/user-manager/update-user',
          name: '修改用户',
          component: UpdateUserView
        }

      ]
    }
  ]
})
