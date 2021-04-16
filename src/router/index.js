import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Popular from '../components/Popular.vue'
import Toprated from '../components/Toprated'
import Upcoming from '../components/Upcoming'
import Favorites from '../components/Favorites'
import singleMovie from '../components/singleMovie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
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
    component: singleMovie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
