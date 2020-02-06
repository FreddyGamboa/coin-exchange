import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line
import "@/assets/css/tailwind.css"
import routes from '@/routes'
import { dollarFilter, percentFilter } from '@/filters'
import Chartick from 'vue-chartkick'
import Chart from 'chart.js'
import { VueSpinners } from '@saeris/vue-spinners'

//Filtros para ser utilizados en los componentes ver CoinDetail.vue
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))
Vue.config.productionTip = false

new Vue({
    router: routes,
    render: h => h(App)
}).$mount('#app')
