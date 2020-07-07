import Vue from 'vue'
import VueRouter from 'vue-router'
import BreedsList from '@/views/BreedsList'
import BreedDetails from '@/views/BreedDetails'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'BreedsList',
    component: BreedsList
  },
  {
    path: '/breeds/:breed',
    name: 'BreedDetails',
    component: BreedDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
