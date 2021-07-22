<template>
  <div>
    <div class="product_wrappers_one">
      <div class="thumb">
        <nuxt-link :to="'/product/' + productId" class="image">
          <img :src="productImg1" alt="Product" />
          <img class="hover-image" :src="productImg2" alt="Product" />
        </nuxt-link>
        <span class="badges">
          <span :class="productTagClass">{{ productTag }}</span>
        </span>
        <!-- 원본 부분 -->
        <!-- <div class="actions">
          <nuxt-link
            to="/my-account/wishlist"
            class="action wishlist"
            title="Wishlist"
            ><i class="far fa-heart"></i
          ></nuxt-link>
        </div>
        <a
          v-b-toggle.offcanvas-add-cart
          class="add-to-cart offcanvas-toggle"
          title="Add To Cart"
          >Add To Cart</a
        >
      </div> -->
        <!-- 원본부분 -->
        <!-- 두가지 속성 다delay 속성 사용하던지, timeout 설정해야함-->
        <div class="actions">
          <b-button
            class="action wishlist"
            title="Wishlist"
            v-b-popover.leftbottom="'위시리스트에 추가되었습니다!'"
            ><i class="far fa-heart"></i
          ></b-button>
        </div>

        <b-button
          v-b-popover.top="'장바구니에 추가되었습니다!'"
          class="add-to-cart offcanvas-toggle "
          title="Product Added"
          delay
        >
          <p><strong>Add To Cart</strong></p>
        </b-button>
      </div>
      <!-- 두가지 속성 다 delay 속성 사용하던지, timeout 설정해야함-->
      <div class="content">
        <h5 class="title">
          <nuxt-link :to="'/product/' + productId">{{
            productTitle
          }}</nuxt-link>
        </h5>
        <span class="price">
          <span class="new">일 {{ productPrice }} ₩</span>
        </span>
      </div>

      <!-- Modal Area Start-->
      <div>
        <b-modal
          ref="product-details-popup"
          centered
          hide-footer
          title="Using Component Methods"
          class="product_one_modal_top"
          id="product_slider_one"
        >
          <template #modal-header="{ close }">
            <button
              type="button"
              class="close close_modal_icon"
              @click="close()"
            >
              <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
          </template>

          <div>
            <div class="row">
              <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                <div class="products_modal_sliders">
                  <swiper class="swiper" :options="swiperOption">
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product1.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product2.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product3.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product4.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product5.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product6.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product7.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                  </swiper>
                </div>
              </div>
              <div class="col-lg-7 col-md-6 col-sm-12 col-12">
                <div class="modal_product_content_one">
                  <h3>{{ productTitle }}</h3>
                  <div class="reviews_rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span>(2 Customer Review)</span>
                  </div>
                  <h4>{{ productPrice }} 원</h4>
                  <p>{{ productDescription }}</p>
                  <div class="variable-single-item">
                    <span>Color</span>
                    <div class="product-variable-color">
                      <label for="modal-product-color-red">
                        <input
                          name="modal-product-color"
                          id="modal-product-color-red"
                          class="color-select"
                          type="radio"
                          checked=""
                        />
                        <span class="product-color-red"></span>
                      </label>
                      <label for="modal-product-color-tomato">
                        <input
                          name="modal-product-color"
                          id="modal-product-color-tomato"
                          class="color-select"
                          type="radio"
                        />
                        <span class="product-color-tomato"></span>
                      </label>
                      <label for="modal-product-color-green">
                        <input
                          name="modal-product-color"
                          id="modal-product-color-green"
                          class="color-select"
                          type="radio"
                        />
                        <span class="product-color-green"></span>
                      </label>
                      <label for="modal-product-color-light-green">
                        <input
                          name="modal-product-color"
                          id="modal-product-color-light-green"
                          class="color-select"
                          type="radio"
                        />
                        <span class="product-color-light-green"></span>
                      </label>
                      <label for="modal-product-color-blue">
                        <input
                          name="modal-product-color"
                          id="modal-product-color-blue"
                          class="color-select"
                          type="radio"
                        />
                        <span class="product-color-blue"></span>
                      </label>
                      <label for="modal-product-color-light-blue">
                        <input
                          name="modal-product-color"
                          id="modal-product-color-light-blue"
                          class="color-select"
                          type="radio"
                        />
                        <span class="product-color-light-blue"></span>
                      </label>
                    </div>
                  </div>
                  <form id="product_count_form_one">
                    <div class="product_count_one">
                      <b-form-spinbutton
                        id="sb-inline"
                        v-model="value"
                        inline
                        class="border-0"
                      ></b-form-spinbutton>
                      <nuxt-link
                        to="/cart"
                        class="theme-btn-one btn-black-overlay btn_sm"
                        >Add To Cart</nuxt-link
                      >
                    </div>
                  </form>
                  <div class="modal_share_icons_one">
                    <h4>SHARE THIS PRODUCT</h4>
                    <div class="posted_icons_one">
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                      <a href="#!"><i class="fab fa-instagram"></i></a>
                      <a href="#!"><i class="fab fa-twitter"></i></a>
                      <a href="#!"><i class="fab fa-linkedin-in"></i></a>
                      <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                      <a href="#!"><i class="fab fa-pinterest-p"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
      </div>
      <!-- Modal Area End-->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductBox",
  props: {
    productId: Number,
    productImg1: String,
    productImg2: String,
    productTagClass: String,
    productTag: String,
    productTitle: String,
    productDescription: String,
    productPrice: Number,
    totalPrice: Number,
  },

  data() {
    return {
      // Product details Popup slider
      swiperOption: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        mousewheel: true,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: true,
      },

      // Product Quanity Increment/ Decrement Data
      value: 1,
    };
  },

  methods: {
    // Product details Popup id Methods
    toggleModal() {
      this.$refs["product-details-popup"].toggle("#toggle-btn");
    },
  },
};
</script>

<style></style>
