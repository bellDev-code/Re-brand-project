import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _27a8a5fe = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _6a7be97a = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _db8aae9c = () => interopDefault(import('../pages/my-account/index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _084faa7a = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _7596dc5c = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _0c18cc9c = () => interopDefault(import('../pages/cart/cart.vue' /* webpackChunkName: "pages/cart/cart" */))
const _21acb61c = () => interopDefault(import('../pages/cart/empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _1a9daf82 = () => interopDefault(import('../pages/my-account/addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _1e9b6196 = () => interopDefault(import('../pages/my-account/checkout.vue' /* webpackChunkName: "pages/my-account/checkout" */))
const _2b11b04b = () => interopDefault(import('../pages/my-account/downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _8d594496 = () => interopDefault(import('../pages/my-account/orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _94651ad6 = () => interopDefault(import('../pages/my-account/wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _56a4ced4 = () => interopDefault(import('../pages/shop/shopfilter.vue' /* webpackChunkName: "pages/shop/shopfilter" */))
const _0c7fdc0c = () => interopDefault(import('../pages/shop/shoplist.vue' /* webpackChunkName: "pages/shop/shoplist" */))
const _f3b17352 = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _5862cc82 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _27a8a5fe,
    name: "about-us"
  }, {
    path: "/faq",
    component: _6a7be97a,
    name: "faq"
  }, {
    path: "/my-account",
    component: _db8aae9c,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _084faa7a,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _7596dc5c,
    name: "shop"
  }, {
    path: "/cart/cart",
    component: _0c18cc9c,
    name: "cart-cart"
  }, {
    path: "/cart/empty-cart",
    component: _21acb61c,
    name: "cart-empty-cart"
  }, {
    path: "/my-account/addresses",
    component: _1a9daf82,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout",
    component: _1e9b6196,
    name: "my-account-checkout"
  }, {
    path: "/my-account/downloads",
    component: _2b11b04b,
    name: "my-account-downloads"
  }, {
    path: "/my-account/orders",
    component: _8d594496,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _94651ad6,
    name: "my-account-wishlist"
  }, {
    path: "/shop/shopfilter",
    component: _56a4ced4,
    name: "shop-shopfilter"
  }, {
    path: "/shop/shoplist",
    component: _0c7fdc0c,
    name: "shop-shoplist"
  }, {
    path: "/product/:slug?",
    component: _f3b17352,
    name: "product-slug"
  }, {
    path: "/",
    component: _5862cc82,
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
