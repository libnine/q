import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Home from '@/components/Home'
import Music from '@/components/Music'
import Projects from '@/components/Projects'
import Spu from '@/components/Spu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path:'/spu',
      name: 'Spu',
      component: Spu
    }
  ]
})
