<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container ">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>Shop</h2>
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
                  <img
                    :src="require('@/assets/img/product-image/product1.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/product2.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/product3.png')"
                    alt="img"
                  />
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
                <h3 v-if="product.id">
                  {{ product.productTitle }}
                </h3>
                <div>
                  <div>
                    <b-button
                      class="stock"
                      size="sm"
                      v-b-modal.modal-sm
                      variant="primary"
                      >현재 재고 확인</b-button
                    >
                  </div>
                  <b-modal id="modal-sm" size="sm" title="현재 재고">
                    <p class="my-4">대여 가능한 상품:</p>
                  </b-modal>
                </div>

                <!-- <div class="reviews_rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span>(2 Customer Review)</span>
                </div> -->
                <h4>${{ product.productPrice }}</h4>
                <p>
                  {{ product.productDescription }}
                </p>

                <div class="product-variable-color">
                  <label for="modal-product-color-bisque">
                    <input
                      name="modal-product-color"
                      id="modal-product-color-bisque"
                      class="color-select"
                    />
                    <span class="product-color-bisque"></span>
                  </label>
                </div>

                <!-- <div class="customs_selects">
                  <select name="product" class="customs_sel_box">
                    <option value="color">Colors</option>
                    <option value="white">White</option>
                    <option value="beige">Beige</option>
                    <option value="black">Black</option>
                  </select>
                </div> -->

                <div class="links_Product_areas">
                  <ul>
                    <li>
                      <nuxt-link
                        to="/my-account/wishlist"
                        class="action wishlist"
                        title="Wishlist"
                        ><i class="far fa-heart"></i>위시리스트</nuxt-link
                      >
                    </li>
                  </ul>
                  <nuxt-link
                    to="/my-account/checkout"
                    class="theme-btn-one btn-orange-overlay btn_sm"
                    >구매하기</nuxt-link
                  >
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

                    <nuxt-link
                      to="/blockchain/guarantee"
                      class="theme-btn-two btn-green-overlay btn_sm"
                      >정품 인증서 보기</nuxt-link
                    >
                    <nuxt-link
                      to="/blockchain/record"
                      class="theme-btn-two btn-green-overlay btn_sm"
                      >대여기록</nuxt-link
                    >
                  </div>
                  <div class="product_description">
                    <p>
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem. Vestibulum ac diam sit amet quam vehicula
                      elementum sed sit amet dui. Sed porttitor lectus nibh.
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Sed porttitor lectus nibh. Donec
                      sollicitudin molestie malesuada. Vivamus magna justo,
                      lacinia eget consectetur sed, convallis at tellus.
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem.
                    </p>
                    <!-- <ul>
                      <li>Vivamus magna justo, lacinia eget consectetur sed</li>
                      <li>Curabitur aliquet quam id dui posuere blandit</li>
                      <li>
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar
                      </li>
                    </ul>
                    <p>
                      Donec sollicitudin molestie malesuada. Cras ultricies
                      ligula sed magna dictum porta. Mauris blandit aliquet
                      elit, eget tincidunt nibh pulvinar a. Nulla porttitor
                      accumsan tincidunt. Cras ultricies ligula sed magna dictum
                      porta. Curabitur arcu erat, accumsan id imperdiet et,
                      Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. porttitor at
                      sem. Quisque velit nisi, pretium ut lacinia in, elementum
                      id enim.
                    </p> -->
                    <!-- <div class="differences"> 
                      <strong>Re:brand만의 차별점!</strong>
                    블록체인 NFT를 통해 정품 인증과 대여 기록을 
                    한 번에 확인할 수 있습니다.
                    
                    <nuxt-link to="/blockchain/guarantee" class="theme-btn-two btn-green-overlay btn_sm">정품 인증서 보기</nuxt-link>
                    <nuxt-link to="/blockchain/record" class="theme-btn-two btn-green-overlay btn_sm">대여기록</nuxt-link>
      
                    </div> -->
                  </div>
                </b-tab>

                <b-tab title="Additional Information" id="additional">
                  <div class="product_additional">
                    <!-- <div> -->
                    <div>
                      <h5>제품 정보 및 설명</h5>
                      <div>
                        <b-table :items="items" class="info_table"></b-table>
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
                    <b-card no-body>
                      <b-tabs pills card vertical>
                        <b-tab title="이용안내" active class="button">
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
                        <b-tab title="배송안내" class="button">
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

    <!-- Related Product -->
    <section id="related_product" class="pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="center_heading">
              <h2>Recommended products</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-12"
            v-for="productItem in productItems"
            :key="productItem.id"
          >
            <ProductBox
              :productImg1="productItem.productImg1"
              :productImg2="productItem.productImg2"
              :productTagClass="productItem.productTagClass"
              :productTag="productItem.productTag"
              :productTitle="productItem.productTitle"
              :productPrice="productItem.productPrice"
              :productDescription="productItem.productDescription"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram Arae -->
    <InstagramArea />
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
      // Product Items Data
      productItems: [
        {
          id: 1,
          productImg1: require("assets/img/product-image/product1.png"),
          productImg2: require("assets/img/product-image/product2.png"),
          productTagClass: "",
          productTag: "",
          productTitle: "Black T-Shirt For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 38.5,
        },
        {
          id: 2,
          productImg1: require("assets/img/product-image/product3.png"),
          productImg2: require("assets/img/product-image/product4.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "T-Shirt Form Girls",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
        },
        {
          id: 3,
          productImg1: require("assets/img/product-image/product5.png"),
          productImg2: require("assets/img/product-image/product6.png"),
          productTagClass: "hot",
          productTag: "hot",
          productTitle: "White Black Line Dress",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 50.5,
        },
        {
          id: 4,
          productImg1: require("assets/img/product-image/product7.png"),
          productImg2: require("assets/img/product-image/product8.png"),
          productTagClass: "",
          productTag: "",
          productTitle: "Blue Dress For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
        },
        {
          id: 5,
          productImg1: require("assets/img/product-image/product9.png"),
          productImg2: require("assets/img/product-image/product10.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "Black T-Shirt For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 99.5,
        },
        {
          id: 6,
          productImg1: require("assets/img/product-image/product11.png"),
          productImg2: require("assets/img/product-image/product12.png"),
          productTagClass: "hot",
          productTag: "hot",
          productTitle: "Blue Dress For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
        },
        {
          id: 7,
          productImg1: require("assets/img/product-image/product13.png"),
          productImg2: require("assets/img/product-image/product14.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "T-Shirt Form Girls",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 48.5,
        },
        {
          id: 8,
          productImg1: require("assets/img/product-image/product15.png"),
          productImg2: require("assets/img/product-image/product1.png"),
          productTagClass: "",
          productTag: "",
          productTitle: "T-Shirt Form Girls",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
        },
        {
          id: 9,
          productImg1: require("assets/img/product-image/product2.png"),
          productImg2: require("assets/img/product-image/product3.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "Blue Dress For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 300,
        },
      ],

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

      items: [
        {
          상품번호: "M58569",
          브랜드: "Louis Vuitton",
          모델명: "Twist PM",
          제조사: "Louis Vuitton Malletier",
          성별: "Women",
          소재: "Printed&tufted Taurillon leather",
        },
      ],
    };
  },
  created() {
    this.productId = this.$route.params.slug;
    console.log(this.productId);
    this.product = this.productItems.filter((p) => p.id == this.productId)[0];

    console.log(this.product);

    //this.getDetail()
  },
  methods: {
    async getDetail() {
      //axios.
      //this.product = (await $api('/api/productDetail', 'post', {param: [this.productId]}))[0];
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
th {
  width: 300px;
}

th,
td {
  text-align: center;
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
