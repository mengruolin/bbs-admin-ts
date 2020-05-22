import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import defaultLayout from '@/layout/Default.vue'
import store from '@/store/index'
const Home = () => import('@/views/home/Home.vue')
const Console = () => import('@/views/console/Console.vue')
const Notfound = () => import('@/layout/NotFound.vue')
const Qasons = () => import('@/views/queryConfig/qaSons/index.vue')
const Login = () => import('@/views/login/Login.vue')
const Feedback = () => import('@/views/feedBack/index.vue')

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'defaultLayout',
    component: defaultLayout,
    children: [
      {
        path: '/',
        name: 'index',
        component: Console,
      },
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
      {
        path: 'feedback',
        name: 'feedback',
        component: Feedback,
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
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit('closePageLoading');
  next();
});

export default router;
