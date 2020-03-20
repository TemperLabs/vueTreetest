import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '@/views/Users.vue'
import User from '@/components/UserListItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Users',
    component: Users
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/user/:id',
    component: User,
    props: true
  },
  {
    path: '/newuser',
    name: 'newuser',
    component: () => import(/* webpackChunkName: "about" */ '../views/newUser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
