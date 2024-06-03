import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component:() => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.addRoute({ path: '/Sign', name: 'SignUp', component:()=> import('../views/SignUp.vue') })
router.addRoute({ path: '/Log', name: 'LogIn', component:()=> import('../views/LogIn.vue') })
router.addRoute({ path:'/Cards', name:'Cards', component:()=> import('../views/Cards.vue')})
router.addRoute({ path:'/Post', name:'Post', component:()=> import('../views/Post.vue')})
export default router
