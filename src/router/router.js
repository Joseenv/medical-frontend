import { createRouter, createWebHistory } from 'vue-router'
import authRouter from '../modules/auth/router/index.js'
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
      redirect:'/products/lista-productos',
      ...productRouter
    },
    // {
    //   path: '/',
    //   name: 'list-products',
    //   component: ListProducts
    // },
    // {
    //   path: '/nuevo-producto',
    //   name: 'new-product',
    //   component: () => import('../views/NewProduct.vue')
    // },
    // {
    //   path: '/editar-producto/:id',
    //   name: 'update-product',
    //   component: () => import('../views/UpdateProduct.vue'),
    //   props: (route) => { 
    //     const id = Number( route.params.id )
    //     return isNaN( id ) ? { id: 1} : { id } 
    //   }
    // }
  ]
})

export default router