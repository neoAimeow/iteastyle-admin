const menus = {
  'CONTENT MANAGER': [{
    icon: '',
    title: '基本管理',
    subMenu: [{
      icon: '',
      title: '新闻中心',
      path: '/site-manager/news-center'
    },
    {
      icon: '',
      title: '产品展示',
      path: '/site-manager/classical-case'
    },
    {
      icon: '',
      title: '网站管理',
      path: '/site-manager/site-config'
    }
    ]
  },
  {
    icon: '',
    title: '服务管理',
    subMenu: [{
      icon: '',
      title: '茶歇服务',
      path: '/site-manager/service/teaBreak'
    },
    {
      icon: '',
      title: '伴手礼',
      path: '/site-manager/service/teaGift'
    },
    {
      icon: '',
      title: 'DIY活动',
      path: '/site-manager/service/teaDIY'
    },
    {
      icon: '',
      title: '茶文化讲座',
      path: '/site-manager/service/teaLecture'
    },
    {
      icon: '',
      title: '茶艺表演',
      path: '/site-manager/service/teaPerform'
    }
    ]
  }
    // {
    //   icon: '',
    //   title: '商品管理',
    //   path: '/item-manager/item-index',
    //   subMenu: [{
    //       icon: '',
    //       title: '茶歇管理',
    //       path: '/item-manager/tea-break'
    //     },
    //     {
    //       icon: '',
    //       title: '茶礼管理',
    //       path: '/item-manager/tea-gift'
    //     },
    //     {
    //       icon: '',
    //       title: '茶点管理',
    //       path: '/item-manager/tea-dessert'
    //     },
    //     {
    //       icon: '',
    //       title: '其它管理',
    //       path: '/item-manager/tea-other'
    //     }
    //   ]
    // },
    // {
    //   icon: '',
    //   title: '订单管理',
    //   path: '',
    //   subMenu: [
    //     {
    //       icon: '',
    //       title: '订单查询',
    //       path: '/order-manager/order-query'
    //     }
    //   ]
    // }
  ],
  'Administration': [{
    icon: '',
    title: '设置',
    path: '/system-preferences/index',
    subMenu: [{
      icon: '',
      title: '用户管理',
      path: '/system-preferences/user-manager'
    },
    {
      icon: '',
      title: '信息管理',
      path: '/system-preferences/info-manager'
    },
    {
      icon: '',
      title: '操作日志',
      path: '/system-preferences/log-shower'
    }
    ]
  },
  {
    icon: '',
    title: '数据展示',
    path: '/data-shower/data-index',
    subMenu: [{
      icon: '',
      title: '小程序数据',
      path: '/data-shower/mini-program-data'
    },
    {
      icon: '',
      title: '网站数据',
      path: '/data-shower/site-data'
    }
    ]
  }
  ]
}

export default menus
