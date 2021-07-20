import Vue from "vue";
import Router from "vue-router";
import { normalizeURL, decode } from "ufo";
import { interopDefault } from "./utils";
import scrollBehavior from "./router.scrollBehavior.js";

const _64941503 = () =>
  interopDefault(
    import("..\\pages\\about-us.vue" /* webpackChunkName: "pages/about-us" */)
  );
const _7bd52a01 = () =>
  interopDefault(
    import("..\\pages\\faq.vue" /* webpackChunkName: "pages/faq" */)
  );
const _e6701b1e = () =>
  interopDefault(
    import(
      "..\\pages\\my-account\\index.vue" /* webpackChunkName: "pages/my-account/index" */
    )
  );
const _f6d2ee08 = () =>
  interopDefault(
    import(
      "..\\pages\\privacy-policy.vue" /* webpackChunkName: "pages/privacy-policy" */
    )
  );
const _e534d542 = () =>
  interopDefault(
    import(
      "..\\pages\\blockchain\\guarantee.vue" /* webpackChunkName: "pages/blockchain/guarantee" */
    )
  );
const _2ca632ec = () =>
  interopDefault(
    import(
      "..\\pages\\blockchain\\record.vue" /* webpackChunkName: "pages/blockchain/record" */
    )
  );
const _b27cfcb6 = () =>
  interopDefault(
    import(
      "..\\pages\\cart\\cart.vue" /* webpackChunkName: "pages/cart/cart" */
    )
  );
const _2c1961ff = () =>
  interopDefault(
    import(
      "..\\pages\\cart\\cart_copy.vue" /* webpackChunkName: "pages/cart/cart_copy" */
    )
  );
const _7b5c7f36 = () =>
  interopDefault(
    import(
      "..\\pages\\cart\\empty-cart.vue" /* webpackChunkName: "pages/cart/empty-cart" */
    )
  );
const _15e201c1 = () =>
  interopDefault(
    import(
      "..\\pages\\my-account\\addresses.vue" /* webpackChunkName: "pages/my-account/addresses" */
    )
  );
const _1e744b77 = () =>
  interopDefault(
    import(
      "..\\pages\\my-account\\checkout.vue" /* webpackChunkName: "pages/my-account/checkout" */
    )
  );
const _41443b66 = () =>
  interopDefault(
    import(
      "..\\pages\\my-account\\checkout-cart.vue" /* webpackChunkName: "pages/my-account/checkout-cart" */
    )
  );
const _2656028a = () =>
  interopDefault(
    import(
      "..\\pages\\my-account\\downloads.vue" /* webpackChunkName: "pages/my-account/downloads" */
    )
  );
const _4cbb61a7 = () =>
  interopDefault(
    import(
      "..\\pages\\my-account\\guarantee.vue" /* webpackChunkName: "pages/my-account/guarantee" */
    )
  );
const _106f4bd6 = () =>
  interopDefault(
    import(
      "..\\pages\\my-account\\orders.vue" /* webpackChunkName: "pages/my-account/orders" */
    )
  );
const _9bd6f2fa = () =>
  interopDefault(
    import(
      "..\\pages\\my-account\\payment_complete.vue" /* webpackChunkName: "pages/my-account/payment_complete" */
    )
  );
const _94b34714 = () =>
  interopDefault(
    import(
      "..\\pages\\my-account\\wishlist.vue" /* webpackChunkName: "pages/my-account/wishlist" */
    )
  );
const _8356d8ee = () =>
  interopDefault(
    import(
      "..\\pages\\shop\\shopfilter.vue" /* webpackChunkName: "pages/shop/shopfilter" */
    )
  );
const _ea0557c0 = () =>
  interopDefault(
    import(
      "..\\pages\\product\\_slug.vue" /* webpackChunkName: "pages/product/_slug" */
    )
  );
const _e6d5fe06 = () =>
  interopDefault(
    import("..\\pages\\index.vue" /* webpackChunkName: "pages/index" */)
  );

const emptyFn = () => {};

Vue.use(Router);

export const routerOptions = {
  mode: "history",
  base: "/",
  linkActiveClass: "nuxt-link-active",
  linkExactActiveClass: "nuxt-link-exact-active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },

  routes: [
    {
      path: "/about-us",
      component: _64941503,
      name: "about-us",
    },
    {
      path: "/faq",
      component: _7bd52a01,
      name: "faq",
    },
    {
      path: "/my-account",
      component: _e6701b1e,
      name: "my-account",
    },
    {
      path: "/privacy-policy",
      component: _f6d2ee08,
      name: "privacy-policy",
    },
    {
      path: "/blockchain/guarantee",
      component: _e534d542,
      name: "blockchain-guarantee",
    },
    {
      path: "/blockchain/record",
      component: _2ca632ec,
      name: "blockchain-record",
    },
    {
      path: "/cart/cart",
      component: _b27cfcb6,
      name: "cart-cart",
    },
    {
      path: "/cart/cart_copy",
      component: _2c1961ff,
      name: "cart-cart_copy",
    },
    {
      path: "/cart/empty-cart",
      component: _7b5c7f36,
      name: "cart-empty-cart",
    },
    {
      path: "/my-account/addresses",
      component: _15e201c1,
      name: "my-account-addresses",
    },
    {
      path: "/my-account/checkout",
      component: _1e744b77,
      name: "my-account-checkout",
    },
    {
      path: "/my-account/checkout-cart",
      component: _41443b66,
      name: "my-account-checkout-cart",
    },
    {
      path: "/my-account/downloads",
      component: _2656028a,
      name: "my-account-downloads",
    },
    {
      path: "/my-account/guarantee",
      component: _4cbb61a7,
      name: "my-account-guarantee",
    },
    {
      path: "/my-account/orders",
      component: _106f4bd6,
      name: "my-account-orders",
    },
    {
      path: "/my-account/payment_complete",
      component: _9bd6f2fa,
      name: "my-account-payment_complete",
    },
    {
      path: "/my-account/wishlist",
      component: _94b34714,
      name: "my-account-wishlist",
    },
    {
      path: "/shop/shopfilter",
      component: _8356d8ee,
      name: "shop-shopfilter",
    },
    {
      path: "/product/:slug?",
      component: _ea0557c0,
      name: "product-slug",
    },
    {
      path: "/",
      component: _e6d5fe06,
      name: "index",
    },
  ],

  fallback: false,
};

export function createRouter(ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base;
  const router = new Router({ ...routerOptions, base });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === "string") {
      to = normalizeURL(to);
    }
    return resolve(to, current, append);
  };

  return router;
}
