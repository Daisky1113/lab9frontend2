import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Login from '../views/Login.vue'
// import Vote from '../views/Vote.vue'
// import List from '../views/List.vue'
// import ProductInfo from '../views/ProductInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/vote',
    name: 'Vote',
    component: () => import(/* webpackChunkName: "about" */ '../views/Vote.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
  },
  {
    path: '/productInfo',
    name: 'ProductInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductInfo.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
