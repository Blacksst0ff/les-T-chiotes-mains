import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import Product from './views/Product.vue'
import Cart from './views/Cart.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/boutique',
      name: 'shop',
      component: Shop
    },
    {
      path: '/produit/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/panier',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})