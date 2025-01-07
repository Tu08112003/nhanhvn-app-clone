import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import DefaultLayout from '../layout/DefaultLayout.vue'
import AuthLayout from '../layout/AuthLayout.vue'
import AddBrand from '../views/AddBrand.vue'
import ProductBrand from '../views/ProductBrand.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'login',
          component: Login,
        },
        {
          path: 'signup',
          name: 'signup',
          component: Signup,
        },
      ],
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'admin',
          name: 'home',
          component: Home,
        },
      ],
    },
    {
      path: '/product',
      component: AuthLayout,
      children: [
        {
          path: 'brand',
          name: 'brand',
          component: ProductBrand,
        },
        {
          path: 'addbrand',
          name: 'addbrand',
          component: AddBrand,
        },
      ],
    },
  ],
})

export default router
