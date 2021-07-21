import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _679864b6 = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _84d6d324 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _bd3a4932 = () => interopDefault(import('../pages/my-account/index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _3ddf066f = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _d9dd5636 = () => interopDefault(import('../pages/blockchain/guarantee.vue' /* webpackChunkName: "pages/blockchain/guarantee" */))
const _6266c4c4 = () => interopDefault(import('../pages/blockchain/record.vue' /* webpackChunkName: "pages/blockchain/record" */))
const _0379e8f2 = () => interopDefault(import('../pages/cart/cart.vue' /* webpackChunkName: "pages/cart/cart" */))
const _c3ee4e72 = () => interopDefault(import('../pages/cart/empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _20537fb7 = () => interopDefault(import('../pages/my-account/addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _14ff927e = () => interopDefault(import('../pages/my-account/checkout.vue' /* webpackChunkName: "pages/my-account/checkout" */))
const _cb8c6348 = () => interopDefault(import('../pages/my-account/checkout-cart.vue' /* webpackChunkName: "pages/my-account/checkout-cart" */))
const _30c78080 = () => interopDefault(import('../pages/my-account/downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _e19cfcc0 = () => interopDefault(import('../pages/my-account/orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _0864f066 = () => interopDefault(import('../pages/my-account/payment_complete.vue' /* webpackChunkName: "pages/my-account/payment_complete" */))
const _e69b7080 = () => interopDefault(import('../pages/my-account/wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _59fe1d02 = () => interopDefault(import('../pages/shop/shopfilter.vue' /* webpackChunkName: "pages/shop/shopfilter" */))
const _6c1bd07c = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _5c2b062a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _679864b6,
    name: "about-us"
  }, {
    path: "/faq",
    component: _84d6d324,
    name: "faq"
  }, {
    path: "/my-account",
    component: _bd3a4932,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _3ddf066f,
    name: "privacy-policy"
  }, {
    path: "/blockchain/guarantee",
    component: _d9dd5636,
    name: "blockchain-guarantee"
  }, {
    path: "/blockchain/record",
    component: _6266c4c4,
    name: "blockchain-record"
  }, {
    path: "/cart/cart",
    component: _0379e8f2,
    name: "cart-cart"
  }, {
    path: "/cart/empty-cart",
    component: _c3ee4e72,
    name: "cart-empty-cart"
  }, {
    path: "/my-account/addresses",
    component: _20537fb7,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout",
    component: _14ff927e,
    name: "my-account-checkout"
  }, {
    path: "/my-account/checkout-cart",
    component: _cb8c6348,
    name: "my-account-checkout-cart"
  }, {
    path: "/my-account/downloads",
    component: _30c78080,
    name: "my-account-downloads"
  }, {
    path: "/my-account/orders",
    component: _e19cfcc0,
    name: "my-account-orders"
  }, {
    path: "/my-account/payment_complete",
    component: _0864f066,
    name: "my-account-payment_complete"
  }, {
    path: "/my-account/wishlist",
    component: _e69b7080,
    name: "my-account-wishlist"
  }, {
    path: "/shop/shopfilter",
    component: _59fe1d02,
    name: "shop-shopfilter"
  }, {
    path: "/product/:slug?",
    component: _6c1bd07c,
    name: "product-slug"
  }, {
    path: "/",
    component: _5c2b062a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
