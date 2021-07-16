import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d1cb66d0 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _1bd5c94c = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _71e31b08 = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _7b57fcd1 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _68b05ed2 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _509827fa = () => interopDefault(import('..\\pages\\cart\\cart.vue' /* webpackChunkName: "pages/cart/cart" */))
const _0e8592fa = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _6cf8f768 = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _9eba68e8 = () => interopDefault(import('..\\pages\\my-account\\checkout.vue' /* webpackChunkName: "pages/my-account/checkout" */))
const _4c10f5d6 = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _1ef8cd2b = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _47d4dc8b = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _0a88661e = () => interopDefault(import('..\\pages\\shop\\shopfilter.vue' /* webpackChunkName: "pages/shop/shopfilter" */))
const _81561878 = () => interopDefault(import('..\\pages\\shop\\shoplist.vue' /* webpackChunkName: "pages/shop/shoplist" */))
const _fc827016 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _2eeaf988 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _d1cb66d0,
    name: "about-us"
  }, {
    path: "/faq",
    component: _1bd5c94c,
    name: "faq"
  }, {
    path: "/my-account",
    component: _71e31b08,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _7b57fcd1,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _68b05ed2,
    name: "shop"
  }, {
    path: "/cart/cart",
    component: _509827fa,
    name: "cart-cart"
  }, {
    path: "/cart/empty-cart",
    component: _0e8592fa,
    name: "cart-empty-cart"
  }, {
    path: "/my-account/addresses",
    component: _6cf8f768,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout",
    component: _9eba68e8,
    name: "my-account-checkout"
  }, {
    path: "/my-account/downloads",
    component: _4c10f5d6,
    name: "my-account-downloads"
  }, {
    path: "/my-account/orders",
    component: _1ef8cd2b,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _47d4dc8b,
    name: "my-account-wishlist"
  }, {
    path: "/shop/shopfilter",
    component: _0a88661e,
    name: "shop-shopfilter"
  }, {
    path: "/shop/shoplist",
    component: _81561878,
    name: "shop-shoplist"
  }, {
    path: "/product/:slug?",
    component: _fc827016,
    name: "product-slug"
  }, {
    path: "/",
    component: _2eeaf988,
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
