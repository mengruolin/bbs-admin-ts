import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import defaultLayout from '@/layout/Default.vue';
import store from '@/store/index.ts';
const Home = () => import('@/views/home/Home.vue');
const Console = () => import('@/views/console/Console.vue');
const Notfound = () => import('@/layout/NotFound.vue');
const Qasons = () => import('@/views/qaConfig/qaSons/QaSons.vue');
const Login = () => import('@/views/login/Login.vue');

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'defaultLayout',
    component: defaultLayout,
    children: [
      {
        path: '/console',
        name: 'console',
        component: Console,
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/qaSons',
        name: 'qaSons',
        component: Qasons,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '*',
    name: 'Notfound',
    component: Notfound,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit('closePageLoading');
  next();
});

export default router;
