import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Home')
const Categories = () => import('../views/Categories/Categories')
const Cart = () => import('../views/Cart/Cart')
const Profile = () => import('../views/Profile/Profile')

const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/Home"
  },
  {
    path: "/Home",
    component: Home,
  },
  {
    path: "/Categories",
    component: Categories,
  },
  {
    path: "/Cart",
    component: Cart,
  },
  {
    path: "/Profile",
    component: Profile,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
