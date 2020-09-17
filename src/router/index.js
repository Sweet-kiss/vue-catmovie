import Vue from 'vue'
import Router from 'vue-router'
import HomeWrap from '@/components/homeWrap/homeWrap'
import '@/assets/reset.css'
import WellReceived from '@/components/wellReceived/wellReceived'
import Cinema from '@/components/cinema/cinema'
import ClassicMovies from '@/components/classicMovies/classicMovies'
import axios from 'axios'

Vue.prototype.$axios = axios;

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homewrap',
      component: HomeWrap,
      redirect: '/wellReceived',
      children: [
        {
        	path: 'wellReceived',
        	component: WellReceived 
        },
        {
        	path: 'cinema',
        	component: Cinema
        },
        {
        	path: 'classicMovies',
        	component: ClassicMovies
        }
      ]
    }
  ]
})
