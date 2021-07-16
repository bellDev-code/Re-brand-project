import Vue from 'vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import InnerImageZoom from 'vue-inner-image-zoom'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'


Vue.use(VueAwesomeSwiper)
Vue.component('inner-image-zoom', InnerImageZoom)
Vue.use(VueSidebarMenu)