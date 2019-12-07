import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/components/install.ts';
import '@/assets/less/main.less';
// import * as echarts from 'echarts';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
