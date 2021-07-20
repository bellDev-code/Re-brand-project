import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3131ffbc = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _07d58782 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _15f21a32 = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _3ba33e4a = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _bc7816c0 = () => interopDefault(import('..\\pages\\blockchain\\guarantee.vue' /* webpackChunkName: "pages/blockchain/guarantee" */))
const _f470922e = () => interopDefault(import('..\\pages\\blockchain\\record.vue' /* webpackChunkName: "pages/blockchain/record" */))
const _7ef3bdf8 = () => interopDefault(import('..\\pages\\cart\\cart.vue' /* webpackChunkName: "pages/cart/cart" */))
const _fd06f400 = () => interopDefault(import('..\\pages\\cart\\cart_copy.vue' /* webpackChunkName: "pages/cart/cart_copy" */))
const _19531c84 = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _2a406102 = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _1f1c8016 = () => interopDefault(import('..\\pages\\my-account\\checkout.vue' /* webpackChunkName: "pages/my-account/checkout" */))
const _34ef1227 = () => interopDefault(import('..\\pages\\my-account\\checkout-cart.vue' /* webpackChunkName: "pages/my-account/checkout-cart" */))
const _3ab461cb = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _6119c0e8 = () => interopDefault(import('..\\pages\\my-account\\guarantee.vue' /* webpackChunkName: "pages/my-account/guarantee" */))
const _a6ebc796 = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _f06ca7bc = () => interopDefault(import('..\\pages\\my-account\\payment_complete.vue' /* webpackChunkName: "pages/my-account/payment_complete" */))
const _9362ddd6 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _1555efa8 = () => interopDefault(import('..\\pages\\shop\\shopfilter.vue' /* webpackChunkName: "pages/shop/shopfilter" */))
const _2ed5a802 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _19f4023e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3131ffbc,
    name: "about-us"
  }, {
    path: "/faq",
    component: _07d58782,
    name: "faq"
  }, {
    path: "/my-account",
    component: _15f21a32,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _3ba33e4a,
    name: "privacy-policy"
  }, {
    path: "/blockchain/guarantee",
    component: _bc7816c0,
    name: "blockchain-guarantee"
  }, {
    path: "/blockchain/record",
    component: _f470922e,
    name: "blockchain-record"
  }, {
    path: "/cart/cart",
    component: _7ef3bdf8,
    name: "cart-cart"
  }, {
    path: "/cart/cart_copy",
    component: _fd06f400,
    name: "cart-cart_copy"
  }, {
    path: "/cart/empty-cart",
    component: _19531c84,
    name: "cart-empty-cart"
  }, {
    path: "/my-account/addresses",
    component: _2a406102,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout",
    component: _1f1c8016,
    name: "my-account-checkout"
  }, {
    path: "/my-account/checkout-cart",
    component: _34ef1227,
    name: "my-account-checkout-cart"
  }, {
    path: "/my-account/downloads",
    component: _3ab461cb,
    name: "my-account-downloads"
  }, {
    path: "/my-account/guarantee",
    component: _6119c0e8,
    name: "my-account-guarantee"
  }, {
    path: "/my-account/orders",
    component: _a6ebc796,
    name: "my-account-orders"
  }, {
    path: "/my-account/payment_complete",
    component: _f06ca7bc,
    name: "my-account-payment_complete"
  }, {
    path: "/my-account/wishlist",
    component: _9362ddd6,
    name: "my-account-wishlist"
  }, {
    path: "/shop/shopfilter",
    component: _1555efa8,
    name: "shop-shopfilter"
  }, {
    path: "/product/:slug?",
    component: _2ed5a802,
    name: "product-slug"
  }, {
    path: "/",
    component: _19f4023e,
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
