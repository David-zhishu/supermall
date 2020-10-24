import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import VueLazyLoad from 'vue-lazyload'
import VuePreview from 'vue-preview'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.png')
})
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
