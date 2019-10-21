import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Goodwill from '@/components/Goodwill'
import Home from '@/components/Home'
import Intuit from '@/components/Intuit'
import Malgo from '@/components/Malgo'
import Music from '@/components/Music'
import Ornet from '@/components/Ornet'
import Projects from '@/components/Projects'
import Spu from '@/components/Spu'
import Scf from '@/components/Scf'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/goodwill',
      name: 'Goodwill',
      component: Goodwill,
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/intuit',
      name: 'Intuit',
      component: Intuit
    },
    {
      path: '/malgo',
      name: 'Malgo',
      component: Malgo
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/ornet',
      name: 'Ornet',
      component: Ornet
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/scf',
      name: 'Scf',
      component: Scf
    },
    {
      path:'/spu',
      name: 'Spu',
      component: Spu
    }
  ]
})
