import { createRouter, createWebHistory } from 'vue-router'
import authRouter from '../modules/auth/router/index.js'
import isAuthenticatedGuard from '../modules/auth/router/auth-guard.js'
import productRouter from '../modules/product/router/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auth'
    },
    {
      path: '/auth',
      ...authRouter
    },
    {
      path:'/products',
      beforeEnter: [ isAuthenticatedGuard ],
      redirect:'/products/lista-productos',
      ...productRouter
    },
  ]
})

export default router