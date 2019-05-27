import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Information from './views/Information'
import Contact from './views/Contact'
import Project from './views/Project'
import NSC from './views/NSC'
import Carousel3d from 'vue-carousel-3d'
import ACMICPC from './views/ACM-ICPC'
import Apprentice from './views/Apprentice'
import Skill from './views/Skill'

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
      path: '/profile/information',
      name: 'information',
      component: Information
    },
    {
      path: '/profile/skill',
      name: 'skill',
      component: Skill
    },
    {
      path: '/profile/contacts',
      name: 'contact',
      component: Contact
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

  ]
})
