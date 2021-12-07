import Vue from 'vue'

const App = () => import('./App.vue')

Vue.config.productionTip = false

const VueApp = new Vue({
  render: h => h(App)
})

VueApp.$mount('#app')
