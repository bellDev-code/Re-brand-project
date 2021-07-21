<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container ">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Single Area -->
    <section id="product_single_one" class="ptb-100">
      <div class="container">
        <div class="row area_boxed">
          <div class="col-lg-4">
            <div class="product_single_one_img">
              <swiper
                class="swiper product-single-2-slider"
                :options="swiperOption"
              >
                <swiper-slide>
                  <img :src="product.image_main" alt="img" />
                </swiper-slide>
                <swiper-slide>
                  <img :src="product.image_main" alt="img" />
                </swiper-slide>
                <swiper-slide>
                  <img :src="product.image_main" alt="img" />
                </swiper-slide>

                <div
                  class="swiper-button-prev swiper-button-white"
                  slot="button-prev"
                ></div>
                <div
                  class="swiper-button-next swiper-button-white"
                  slot="button-next"
                ></div>
              </swiper>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="product_details_right_one">
              <div class="modal_product_content_one">
                <h3 class="mb-3" style="font-weight:bold;">
                  {{ product.product_name }}
                </h3>
                <div>
                  <div>
                    <b-button class="stock" v-b-modal.modal-sm variant="primary"
                      >현재 재고 확인</b-button
                    >
                  </div>
                  <b-modal
                    id="modal-sm"
                    size="sm"
                    title="현재 재고"
                    class="mt-5"
                  >
                    <p class="my-4">
                      현재 대여 가능한 상품: {{ product.number_stock }} 개
                    </p>
                  </b-modal>
                </div>

                <h4>{{ product.rent_price }} 원</h4>
                <p>
                  {{ product.info_material }}
                </p>
                <br />

                <div class="variable-single-item">
                  <span>Color : {{ product.product_color }}</span>
                </div>

                <div class="links_Product_areas">
                  <button
                    @click="goToPayment(product.product_id)"
                    class="theme-btn-one btn-orange-overlay btn_sm"
                  >
                    대여하기
                  </button>
                  <br />
                  <nuxt-link
                    to="/cart/cart"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    >장바구니</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="product_details_tabs">
              <b-tabs>
                <b-tab title="Detail" active id="description">
                  <div class="differences">
                    <strong>Re:brand만의 차별점!</strong>
                    블록체인 NFT를 통해 정품 인증과 대여 기록을 한 번에 확인할
                    수 있습니다.

                    <button
                      class="theme-btn-two btn-green-overlay btn_sm"
                      @click="goToGuarantee(product.product_id)"
                    >
                      정품 인증서 보기
                    </button>

                    <button
                      class="theme-btn-two btn-green-overlay btn_sm"
                      @click="goToRecord(product.product_id)"
                    >
                      대여 기록
                    </button>
                  </div>
                  <div class="product_description">
                    <!-- <p>
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem. Vestibulum ac diam sit amet quam vehicula
                      elementum sed sit amet dui. Sed porttitor lectus nibh.
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Sed porttitor lectus nibh. Donec
                      sollicitudin molestie malesuada. Vivamus magna justo,
                      lacinia eget consectetur sed, convallis at tellus.
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem.
                    </p> -->
                  </div>
                </b-tab>

                <b-tab title="Additional Information" id="additional">
                  <div class="product_additional">
                    <!-- <div> -->
                    <div>
                      <h5>제품 정보 및 설명</h5>
                      <br />
                      <div>
                        <table class="table align-middle text-center">
                          <thead>
                            <th>상품번호</th>
                            <th>브랜드</th>
                            <th>모델명</th>
                            <th>제조사</th>
                            <th>성별</th>
                            <th>소재</th>
                          </thead>
                          <tbody>
                            <td>
                              {{ product.product_id }}
                            </td>
                            <td>
                              {{ product.product_brand }}
                            </td>
                            <td>
                              {{ product.product_name }}
                            </td>
                            <td>
                              {{ product.manufacture_name }}
                            </td>
                            <td>
                              {{ product.info_gender }}
                            </td>
                            <td>
                              {{ product.info_material }}
                            </td>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <!-- <table class="info_table">
                        <tr>
                          <th>상품번호</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>브랜드</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>모델명</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>제조사</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>소재</th>
                          <td></td>
                        </tr>
                      </table>
                    </div> -->
                  </div>
                  <br /><br /><br /><br />
                  <div>
                    <h5>이용 및 배송안내</h5>
                    <br />
                    <b-card no-body>
                      <b-tabs pills card vertical>
                        <b-tab title="이용안내" active>
                          <b-card-text>
                            <ul>
                              <li>상품 사용기간은 최소 7일~최대 14일입니다.</li>
                              <li>
                                상품이 출고된 이후에는 상품 추가 및 변경이
                                불가합니다.
                              </li>
                            </ul>
                          </b-card-text></b-tab
                        >
                        <b-tab title="배송안내">
                          <b-card-text>
                            <ul>
                              <li>
                                평균 배송기간은 1~2일이며, 택배사 사정으로
                                인하여 지연될 수 있습니다.
                              </li>
                              <li>
                                배송 기간은 영업일(주말,공휴일 제외한
                                평일)입니다.
                              </li>
                              <li>
                                평일 오후 12시 이전 입금 시 당일 출고됩니다. 그
                                이후에는 익일 출고됩니다.
                              </li>
                              <li>
                                택배사 사정으로 인한 환불은 불가하오니 이점 양해
                                부탁드립니다.
                              </li>
                              <li>배송 지역 : 서울 및 경기 지역</li>
                              <li>배송비 : 무료</li>
                            </ul>
                          </b-card-text></b-tab
                        >
                      </b-tabs>
                    </b-card>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductBox from "~/components/product-box/ProductBox";
import InstagramArea from "~/components/instagram/InstagramArea";
export default {
  name: "product-single",
  components: {
    ProductBox,
    InstagramArea,
  },
  data() {
    return {
      list: [],
      productId: 0,
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
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: true,
      },
      boxTwo: "",
      // Product Items Data
      productItems: [],

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Product Single",
          to: "/product",
        },
      ],

      // Product Quanity Increment/ Decrement Data
      value: 1,
      product: {},
    };
  },
  created() {
    console.log(this.$route.params);
    this.productId = this.$route.params.slug;

    // this.product = this.productItems.filter((p) => p.id == this.productId)[0];

    // console.log(this.product);

    //this.getDetail()
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      this.product = (
        await this.$api("api/detail?product_id=" + this.productId, "get", {})
      )[0];
      console.log("productDetail", this.product);
    },
    goToGuarantee(product_id) {
      this.$router.push({
        path: "/blockchain/guarantee",
        query: { product_id: product_id },
      });
      console.log(product_id);
    },
    goToRecord(product_id) {
      this.$router.push({
        path: "/blockchain/record",
        query: { product_id: product_id },
      });
      console.log(product_id);
    },
    goToPayment(product_id) {
      this.$router.push({
        path: "/my-account/checkout",
        query: { product_id: product_id },
      });
      console.log(product_id);
    },
  },
  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Shop page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>

<style>
.info_table {
  border: 1.5px solid black;
}

.stock {
  background-color: green;
  border: none;
  border-radius: 1px;
}

/* .button {
  background-color: lightsteelblue;
} */
</style>
