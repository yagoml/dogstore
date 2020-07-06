import Vue from 'vue'
import VueRouter from 'vue-router'
import BreedsList from '@/components/BreedsList'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'BreedsList',
    component: BreedsList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
