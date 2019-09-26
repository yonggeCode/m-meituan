import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MainPage from './page/MainPage'
import ChooseCity from './page/ChooseCity'
import GoodsList from './page/GoodsList'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/home',
      children:[
        {
          path: '/home',
          name: 'mainPage',
          component: MainPage,
        },
        {
          path: '/chooseCity',
          name: 'chooseCity',
          component: ChooseCity,
        },
        {
          path: '/s/:name',
          name:'goodsList',
          component:GoodsList
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
