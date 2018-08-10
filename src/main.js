import Vue from 'vue'
import Login from './components/login.vue'
import router from './router'
import store from './store'
import VueBlu from 'vue-blu'
import axios from 'axios'
import VueSilentbox from 'vue-silentbox'
import ElementUI from 'element-ui'
import 'vue-blu/dist/css/vue-blu.min.css'
import moment from 'moment'

if (process.env.NODE_ENV === 'development') {
    require('element-ui/lib/theme-chalk/index.css')
    Vue.use(moment)
    Vue.use(ELEMENT)
}
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

Vue.use(VueBlu)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueSilentbox)
Vue.use(require('vue-moment'))

let request = axios.create({
    baseURL: 'https://iteastyle-api.aimeow.com/',
    timeout: 1000
});

Vue.prototype.$ajax = request

new Vue({
  router,
  store,
  render: h => h(Login)
}).$mount('#app')
