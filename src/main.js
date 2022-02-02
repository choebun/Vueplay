// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import nice from './components/nice.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component("Recordlist",nice)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
