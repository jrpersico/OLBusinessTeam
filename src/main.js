import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/master.scss'

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell } from '@fortawesome/pro-regular-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/pro-light-svg-icons'
import { faMailBulk } from '@fortawesome/pro-regular-svg-icons'
import { faMobile } from '@fortawesome/pro-regular-svg-icons'
import { faTicketAlt } from '@fortawesome/pro-regular-svg-icons'
import { faStars } from '@fortawesome/pro-regular-svg-icons'
import { faBadgePercent } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBell,faCircle,faCalendarAlt,faMailBulk,faMobile,faTicketAlt,faStars,faBadgePercent)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
