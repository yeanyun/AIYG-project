import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UpLoad from "@/views/UpLoad";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/UpLoad',
    name: 'upload',
    component: UpLoad
  },
]

const router = new VueRouter({
  routes
})

export default router
