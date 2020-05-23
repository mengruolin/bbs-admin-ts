import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

// 全局组件
import '@/components/install'
// 全局 less
import '@/assets/less/main.less'
// 全局 svg
import '@/assets/svg/install'
// 全局fliter
import '@/filters/timeFormat'
// element ui
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
