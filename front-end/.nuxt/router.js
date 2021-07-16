import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e4149b0 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _aab43e88 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _3068c5ec = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _43c8413e = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _2b6a0642 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _2553d28a = () => interopDefault(import('..\\pages\\cart\\cart.vue' /* webpackChunkName: "pages/cart/cart" */))
const _6049dcec = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _e4b2c088 = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _9212fbc8 = () => interopDefault(import('..\\pages\\my-account\\checkout.vue' /* webpackChunkName: "pages/my-account/checkout" */))
const _c3cabef6 = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _3e2e308a = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _4e28931b = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _684436a4 = () => interopDefault(import('..\\pages\\shop\\shopfilter.vue' /* webpackChunkName: "pages/shop/shopfilter" */))
const _2218d654 = () => interopDefault(import('..\\pages\\shop\\shoplist.vue' /* webpackChunkName: "pages/shop/shoplist" */))
const _36faaaf6 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _4a12f4f8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6e4149b0,
    name: "about-us"
  }, {
    path: "/faq",
    component: _aab43e88,
    name: "faq"
  }, {
    path: "/my-account",
    component: _3068c5ec,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _43c8413e,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _2b6a0642,
    name: "shop"
  }, {
    path: "/cart/cart",
    component: _2553d28a,
    name: "cart-cart"
  }, {
    path: "/cart/empty-cart",
    component: _6049dcec,
    name: "cart-empty-cart"
  }, {
    path: "/my-account/addresses",
    component: _e4b2c088,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout",
    component: _9212fbc8,
    name: "my-account-checkout"
  }, {
    path: "/my-account/downloads",
    component: _c3cabef6,
    name: "my-account-downloads"
  }, {
    path: "/my-account/orders",
    component: _3e2e308a,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _4e28931b,
    name: "my-account-wishlist"
  }, {
    path: "/shop/shopfilter",
    component: _684436a4,
    name: "shop-shopfilter"
  }, {
    path: "/shop/shoplist",
    component: _2218d654,
    name: "shop-shoplist"
  }, {
    path: "/product/:slug?",
    component: _36faaaf6,
    name: "product-slug"
  }, {
    path: "/",
    component: _4a12f4f8,
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
