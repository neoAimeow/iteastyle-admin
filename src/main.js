import Vue from 'vue'
//import Login from './components/login.vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueBlu from 'vue-blu'
import VueSilentbox from 'vue-silentbox'
import ElementUI from 'element-ui'
import 'vue-blu/dist/css/vue-blu.min.css'
import moment from 'moment'
import {request} from './common/util.js'
import _ from 'lodash'
Vue.prototype._ = _

if (process.env.NODE_ENV === 'development') {
    require('element-ui/lib/theme-chalk/index.css')
    Vue.use(ELEMENT)
}

Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

Vue.use(VueBlu)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueSilentbox)

Vue.prototype.$ajax = request

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
