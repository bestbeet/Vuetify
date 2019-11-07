import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Information from './views/Information'

import Project from './views/Project'
import NSC from './views/NSC'
import Carousel3d from 'vue-carousel-3d'
import ACMICPC from './views/ACM-ICPC'
import Apprentice from './views/Apprentice'

Vue.use(Router,Carousel3d);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile/portfolio',
      name: 'information',
      component: Information
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/gallery/nsc',
      name: 'nsc',
      component: NSC
    },
    {
      path: '/gallery/acm-icpc',
      name: 'acm-icpc',
      component: ACMICPC
    },
    {
      path: '/gallery/apprentice',
      name: 'apprentice',
      component: Apprentice
    },
  ],



})
