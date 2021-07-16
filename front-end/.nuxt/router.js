import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bf2c582e = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _c29d994a = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _66f8d36a = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _337f0362 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _32f76c3e = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _44231f0b = () => interopDefault(import('..\\pages\\cart\\cart.vue' /* webpackChunkName: "pages/cart/cart" */))
const _5905394b = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _0514289b = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _69563d46 = () => interopDefault(import('..\\pages\\my-account\\checkout.vue' /* webpackChunkName: "pages/my-account/checkout" */))
const _15882964 = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _6fafb988 = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _6286f25c = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _55080c6f = () => interopDefault(import('..\\pages\\shop\\shopfilter.vue' /* webpackChunkName: "pages/shop/shopfilter" */))
const _777bfa55 = () => interopDefault(import('..\\pages\\shop\\shoplist.vue' /* webpackChunkName: "pages/shop/shoplist" */))
const _39e5ce86 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _68941bd7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _bf2c582e,
    name: "about-us"
  }, {
    path: "/faq",
    component: _c29d994a,
    name: "faq"
  }, {
    path: "/my-account",
    component: _66f8d36a,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _337f0362,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _32f76c3e,
    name: "shop"
  }, {
    path: "/cart/cart",
    component: _44231f0b,
    name: "cart-cart"
  }, {
    path: "/cart/empty-cart",
    component: _5905394b,
    name: "cart-empty-cart"
  }, {
    path: "/my-account/addresses",
    component: _0514289b,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout",
    component: _69563d46,
    name: "my-account-checkout"
  }, {
    path: "/my-account/downloads",
    component: _15882964,
    name: "my-account-downloads"
  }, {
    path: "/my-account/orders",
    component: _6fafb988,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _6286f25c,
    name: "my-account-wishlist"
  }, {
    path: "/shop/shopfilter",
    component: _55080c6f,
    name: "shop-shopfilter"
  }, {
    path: "/shop/shoplist",
    component: _777bfa55,
    name: "shop-shoplist"
  }, {
    path: "/product/:slug?",
    component: _39e5ce86,
    name: "product-slug"
  }, {
    path: "/",
    component: _68941bd7,
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
