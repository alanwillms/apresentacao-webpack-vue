import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ProductsPage from '@/components/ProductsPage'
import ProductForm from '@/components/ProductForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    },
    {
      path: '/produtos',
      name: 'products',
      component: ProductsPage
    },
    {
      path: '/produtos/novo',
      name: 'new_product',
      component: ProductForm
    },
    {
      path: '/produtos/:id/editar',
      name: 'edit_product',
      component: ProductForm
    }
  ]
})
