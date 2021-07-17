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
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/product4.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/product5.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/product6.png')"
                    alt="img"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    :src="require('@/assets/img/product-image/product7.png')"
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
                <h3 v-if="this.$route.params.slug">
                  {{ this.$route.params.slug }}
                </h3>
                <h3 v-else>Black fashion handbag JI9023</h3>

                <div class="reviews_rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span>(2 Customer Review)</span>
                </div>
                <h4>$317.76 <del>$456.43</del></h4>
                <p>
                  Standard dummy text ever since the 1500s, standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen.
                </p>
                   <div class="customs_selects">
                  <select name="product" class="customs_sel_box">
                    <option value="color">Colors</option>
                    <option value="white">White</option>
                    <option value="beige">Beige</option>
                    <option value="black">Black</option>
                  </select>
                </div>
                </form>
                <div class="links_Product_areas">
                  <ul>
                    <li>
                      <nuxt-link
                        to="/my-account/wishlist"
                        class="action wishlist"
                        title="Wishlist"
                        ><i class="far fa-heart"></i>Add To Wishlist</nuxt-link
                      >
                    </li>
                  </ul>
                  <nuxt-link
                    to="/cart/cart"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    >Add To Cart</nuxt-link
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
                    <ul>
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
                    </p>
                  </div>
                </b-tab>

                <b-tab title="Additional Information" id="additional">
                  <div class="product_additional">
                  <div>
                    <h5>제품 정보 및 설명</h5>
                    <table class="info_table">
                 <tr>
                   <th>상품번호</th>
                   <td></td>
                   <td></td>
                 </tr>
                 <tr>
                   <th>브랜드</th>
                   <td></td>
                   <td></td>
                 </tr>
                   <tr>
                   <th>제조사</th>
                   <td></td>
                   <td></td>
                 </tr>
                   <tr>
                   <th>모델명</th>
                   <td></td>
                   <td></td>
                 </tr>
                   <tr>
                   <th>성별</th>
                   <td></td>
                   <td></td>
                 </tr>
                    <tr>
                   <th>소재</th>
                   <td></td>
                   <td></td>
                 </tr>
                 </table>
                  </div>
                  </div>
                 <br><br><br><br>
                 <div>
                   <h5>이용 및 배송안내</h5>
  <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="이용안내" active>
        <b-card-text>
           <ul>
                      <li>상품 사용기간은 최소 7일~최대 14일입니다.</li>
                      <li>상품이 출고된 이후에는 상품 추가 및 변경이 불가합니다.</li>
                      
                    </ul>
        </b-card-text></b-tab>
      <b-tab title="배송안내">
        <b-card-text>
           <ul>
                       <li>평균 배송기간은 1~2일이며, 택배사 사정으로 인하여 지연될 수 있습니다. </li>
                      <li>배송 기간은 영업일(주말,공휴일 제외한 평일)입니다.</li>
                      <li>평일 오후 12시 이전 입금 시 당일 출고됩니다. 그 이후에는 익일 출고됩니다.</li>
                      <li>택배사 사정으로 인한 환불은 불가하오니 이점 양해 부탁드립니다.</li>
                      <li>배송 지역 : 서울 및 경기 지역</li>
                      <li>배송비 : 무료</li>
                    </ul>
        </b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
                </b-tab>
            

                <b-tab title="Reviews" id="review">
                  <div class="product_reviews">
                    <ul>
                      <li class="media">
                        <!-- <div class="media-img">
                          <img
                            :src="require('@/assets/img/user/user1.png')"
                            alt="img"
                          />
                        </div> -->
                        <div class="media-body">
                          <div class="media-header">
                            <div class="media-name">
                              <h4>Sara Anela</h4>
                              <p>5 days ago</p>
                            </div>
                            <div class="post-share">
                              <a href="#!" class="replay">답변</a>
                              
                            </div>
                          </div>
                          <div class="media-pragraph">
                            <div class="product_review_strat">
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque Praesent sapien massa,
                              convallis a pellentesque nec, egestas non nisi.
                              Cras ultricies ligula sed magna dictum porta.
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Vivamus magna justo.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="media">
                      
                        <div class="media-body">
                          <div class="media-header">
                            <div class="media-name">
                              <h4>Sara Anela</h4>
                              <p>5 days ago</p>
                            </div>
                            <div class="post-share">
                              <a href="#!" class="replay">답변</a>
                              
                            </div>
                          </div>
                          <div class="media-pragraph">
                            <div class="product_review_strat">
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque Praesent sapien massa,
                              convallis a pellentesque nec, egestas non nisi.
                              Cras ultricies ligula sed magna dictum porta.
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Vivamus magna justo.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body">
                          <div class="media-header">
                            <div class="media-name">
                              <h4>Sara Anela</h4>
                              <p>5 days ago</p>
                            </div>
                            <div class="post-share">
                              <a href="#!" class="replay">답변</a>
                              
                            </div>
                          </div>
                          <div class="media-pragraph">
                            <div class="product_review_strat">
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque Praesent sapien massa,
                              convallis a pellentesque nec, egestas non nisi.
                              Cras ultricies ligula sed magna dictum porta.
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Vivamus magna justo.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
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
              <h2>You Might Also Like</h2>
              <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
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
    return  {
      title: this.$route.params.slug,
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
    };
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

</style>
