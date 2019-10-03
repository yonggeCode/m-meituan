import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'mainPage',
          component: () => import('./page/MainPage'),
        },
        {
          path: '/chooseCity',
          name: 'chooseCity',
          component: () => import('./page/ChooseCity')
        },
        {
          path: '/s/:name',
          name: 'goodsList',
          component: () => import('./page/GoodsList')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./page/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./page/Register')
    },
  ]
})
