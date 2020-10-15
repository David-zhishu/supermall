import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Home')
const Categories = () => import('../views/Categories/Categories')
const Cart = () => import('../views/Cart/Cart')
const Profile = () => import('../views/Profile/Profile')
const Detail = () => import('../views/detail/Detail')

const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/categories",
    component: Categories,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/detail/:iid",
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
