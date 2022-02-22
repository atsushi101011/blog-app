import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue' // 追加

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',    // 追加
    name: 'blogs',
    component: Blogs
  }
]

const router = new VueRouter({
  routes
})

export default router