import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 全局组件
import '@/components/install';
// 全局 less
import '@/assets/less/main.less';
// 全局 svg
import '@/assets/svg/install';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
