import { wrapFunctional } from './utils'

export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as InstagramArea } from '../..\\components\\instagram\\InstagramArea.vue'
export { default as InstagramSliderItem } from '../..\\components\\instagram\\InstagramSliderItem.vue'
export { default as ProductBox } from '../..\\components\\product-box\\ProductBox.vue'
export { default as WidgetsShopSidebar } from '../..\\components\\widgets\\ShopSidebar.vue'
export { default as WidgetsTimer } from '../..\\components\\widgets\\Timer.vue'

export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyInstagramArea = import('../..\\components\\instagram\\InstagramArea.vue' /* webpackChunkName: "components/instagram-area" */).then(c => wrapFunctional(c.default || c))
export const LazyInstagramSliderItem = import('../..\\components\\instagram\\InstagramSliderItem.vue' /* webpackChunkName: "components/instagram-slider-item" */).then(c => wrapFunctional(c.default || c))
export const LazyProductBox = import('../..\\components\\product-box\\ProductBox.vue' /* webpackChunkName: "components/product-box" */).then(c => wrapFunctional(c.default || c))
export const LazyWidgetsShopSidebar = import('../..\\components\\widgets\\ShopSidebar.vue' /* webpackChunkName: "components/widgets-shop-sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyWidgetsTimer = import('../..\\components\\widgets\\Timer.vue' /* webpackChunkName: "components/widgets-timer" */).then(c => wrapFunctional(c.default || c))
