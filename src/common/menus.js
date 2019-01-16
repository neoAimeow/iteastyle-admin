const menus = {
    'CONTENT MANAGER': [
        {
            icon: '',
            title: '基本管理',
            subMenu: [
                {
                    icon: '',
                    title: '新闻中心',
                    path: '/site-manager/news-center'
                },
                {
                    icon: '',
                    title: '产品展示',
                    path: '/site-manager/classical-case'
                }
            ]
        },
        {
            icon: '',
            title: '其它管理',
            subMenu: [
                {
                    icon: '',
                    title: '商品管理',
                    // path: '/site-manager/service/teaGift'
                },
                {
                    icon: '',
                    title: '订单管理',
                    // path: '/site-manager/service/teaDIY'
                },
                {
                    icon: '',
                    title: '用户信息查询',
                    // path: '/site-manager/service/teaLecture'
                }
            ]
        }
    ],
    'Administration': [
        {
            icon: '',
            title: '设置',
            path: '/system-preferences/index',
            subMenu: [{
                icon: '',
                title: '用户管理',
                path: '/system-preferences/user-manager'
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
                // path: '/data-shower/mini-program-data'
            },
                {
                    icon: '',
                    title: '网站数据',
                    // path: '/data-shower/site-data'
                }
            ]
        }
    ]
}

export default menus
