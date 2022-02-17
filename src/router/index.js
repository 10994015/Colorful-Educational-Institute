import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title:"首頁",
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Course',
    name:'Course',
    component:()=> import('../views/Course.vue')
  },
  {
    path:'/Latestnews',
    name:'Latestnews',
    component:()=> import('../views/Latestnews.vue')
  },
  {
    path:'/Latestnews/:id',
    name:'Latestnews_id',
    component:()=> import('../views/Latestnews/_id.vue')
  },
  {
    path:'/Contact',
    name:'Contact',
    component:()=> import('../views/Contact.vue')
  },
  {
    path:'/Site',
    name:'Site',
    component:()=> import('../views/Site.vue')
  },
  {
    path:'/Nurture',
    name:'Nurture',
    component:()=> import('../views/Nurture.vue')
  },
  { path: '/:pathMatch(.*)', component: NotFoundComponent }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
