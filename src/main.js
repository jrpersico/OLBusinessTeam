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

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell } from '@fortawesome/pro-duotone-svg-icons'
import { faCalendarAlt } from '@fortawesome/pro-duotone-svg-icons'
import { faMailBulk } from '@fortawesome/pro-duotone-svg-icons'
import { faMobile } from '@fortawesome/pro-duotone-svg-icons'
import { faTicketAlt } from '@fortawesome/pro-duotone-svg-icons'
import { faStars } from '@fortawesome/pro-duotone-svg-icons'
import { faBadgePercent } from '@fortawesome/pro-duotone-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/pro-duotone-svg-icons'
import { faCircle } from '@fortawesome/pro-duotone-svg-icons'
import { faUserCircle } from '@fortawesome/pro-duotone-svg-icons'
import { faSearch } from '@fortawesome/pro-duotone-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faLoveseat } from '@fortawesome/pro-duotone-svg-icons'

library.add(faBell,faCalendarAlt,faMailBulk,faMobile,faTicketAlt,faStars,faBadgePercent,faArrowAltCircleRight,faCircle,faLinkedin,faFacebookSquare,faTwitterSquare,faUserCircle,faSearch,faLoveseat)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.use(require('vue-moment'))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
