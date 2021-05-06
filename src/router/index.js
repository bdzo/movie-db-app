import Vue from 'vue'
import VueRouter from 'vue-router'
import Toprated from '../views/Toprated'
import Upcoming from '../views/Upcoming'
import Favorites from '../views/Favorites'
import SingleMovie from '../views/SingleMovie'
import Popular from '../views/Popular.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Popular',
    component: Popular
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
  },
  {
    path: '/movie/:id',
    component: SingleMovie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
