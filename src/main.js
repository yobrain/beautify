import '@/plugins/vue-composition-api'
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false
Vue.component('apexchart', VueApexCharts)
new Vue({
  router,
  vuetify,
  VueApexCharts,
  render: h => h(App),
}).$mount('#app')
