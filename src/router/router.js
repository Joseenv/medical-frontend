import { createRouter, createWebHistory } from 'vue-router'
import ListProducts from '../views/ListProducts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list-products',
      component: ListProducts
    },
    {
      path: '/nuevo-producto',
      name: 'new-product',
      component: () => import('../views/NewProduct.vue')
    },
    {
      path: '/editar-producto/:id',
      name: 'update-product',
      component: () => import('../views/UpdateProduct.vue'),
      props: (route) => { 
        const id = Number( route.params.id )
        return isNaN( id ) ? { id: 1} : { id } 
      }
    }
  ]
})

export default router