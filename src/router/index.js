import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Toprated from '../views/Toprated'
import Upcoming from '../views/Upcoming'
import Favorites from '../views/Favorites'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/toprated',
    name: 'Toprated',
    component: Toprated
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: Upcoming
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
