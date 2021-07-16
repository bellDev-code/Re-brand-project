import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  InstagramArea: () => import('../..\\components\\instagram\\InstagramArea.vue' /* webpackChunkName: "components/instagram-area" */).then(c => wrapFunctional(c.default || c)),
  InstagramSliderItem: () => import('../..\\components\\instagram\\InstagramSliderItem.vue' /* webpackChunkName: "components/instagram-slider-item" */).then(c => wrapFunctional(c.default || c)),
  ProductBox: () => import('../..\\components\\product-box\\ProductBox.vue' /* webpackChunkName: "components/product-box" */).then(c => wrapFunctional(c.default || c)),
  WidgetsShopSidebar: () => import('../..\\components\\widgets\\ShopSidebar.vue' /* webpackChunkName: "components/widgets-shop-sidebar" */).then(c => wrapFunctional(c.default || c)),
  WidgetsTimer: () => import('../..\\components\\widgets\\Timer.vue' /* webpackChunkName: "components/widgets-timer" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
