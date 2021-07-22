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

    <!-- Cart-Area -->
    <section id="cart_area_two" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="table_desc">
              <div class="table_page table-responsive">
                <table>
                  <!-- Start Cart Table Head -->
                  <thead>
                    <tr>
                      <th class="product_thumb">제품</th>
                      <th class="product_name">제품명</th>
                      <!-- <th class="product-price">가격</th> -->
                      <th class="product_quantity">색상</th>
                      <th class="product_total">가격</th>
                      <th class="product_remove">제거</th>
                    </tr>
                  </thead>
                  <!-- End Cart Table Head -->
                  <tbody v-if="productItems.length > 0">
                    <!-- Start Cart Single Item-->

                    <tr
                      v-for="productItem in list"
                      :key="productItem.basket_id"
                    >
                      <td class="product_thumb">
                        <nuxt-link to="/product">
                          <img :src="productItem.image_main" alt="img" />
                        </nuxt-link>
                      </td>
                      <td class="product_name">
                        <nuxt-link to="/product">{{
                          productItem.product_name
                        }}</nuxt-link>
                      </td>
                      <!-- <td class="product-price">
                        ${{ productItem.productPrice }}
                      </td> -->
                      <td class="product_quantity">
                        <div>
                          {{ productItem.product_color }}
                        </div>
                      </td>
                      <td class="product_total">
                        {{ productItem.rent_price }} 원
                      </td>

                      <td class="product_remove">
                        <button
                          @click="removeProductItem(index)"
                          class="bg-transparent remove-btn"
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                    <!-- End Cart Single Item-->
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td class="border-0">No Item found!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- <div class="cart_submit">
                <button
                  class="theme-btn-one btn-black-overlay btn_sm"
                  type="submit"
                >
                  update cart
                </button>
              </div> -->
            </div>
            <!-- <div class="coupon_inner_two">
              <input class="mb-2" placeholder="Coupon code" type="text" />
              <button
                type="submit"
                class="theme-btn-one btn-black-overlay btn_sm"
              >
                Apply coupon
              </button>
            </div> -->
          </div>
          <div class="col-lg-12 col-md-12">
            <div
              class="coupon_code right"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3>Cart Price</h3>

              <div class="coupon_inner">
                <div class="cart_subtotal">
                  <p>합계</p>
                  <p class="cart_amount">{{ sumTotalPrice }} 원</p>
                </div>
                <div class="cart_subtotal ">
                  <p>배송비</p>
                  <p class="cart_amount">Free</p>
                </div>

                <div class="cart_subtotal">
                  <p>총계</p>
                  <p class="cart_amount">{{ sumTotalPrice }} 원</p>
                </div>
                <div class="checkout_btn">
                  <nuxt-link
                    to="/"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    >Back to Main</nuxt-link
                  >
                  <nuxt-link
                    to="/my-account/checkout-cart"
                    class="theme-btn-one btn-black-overlay btn_sm"
                  >
                    Proceed to Checkout
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Product -->
    <section id="related_product" class="pb-100">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-12"
            v-for="productItem in list.slice(0, 4)"
            :key="productItem.id"
          >
            <ProductBox
              :key="productItem.id"
              :productId="productItem.product_id"
              :productImg1="productItem.image_main"
              :productImg2="productItem.image_main"
              :productTagClass="productItem.productTagClass"
              :productTag="productItem.productTag"
              :productTitle="productItem.product_name"
              :productPrice="productItem.rent_price"
              :productDescription="productItem.productDescription"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- related Product end -->
  </div>
</template>

<script>
export default {
  name: "cart",

  data() {
    return {
      title: "Cart",
      i: 0,
      sumtotal: 0,
      list: [],
      // Product Items Data
      productItems: [
        {
          id: 1,
          productImg1: require("assets/img/product-image/product1.png"),
          productImg2: require("assets/img/product-image/product2.png"),
          productTagClass: "",
          productTag: "",
          productTitle: "Black T-Shirt For Woman",
          productColor: "Black",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 38.5,
          totalPrice: 180.0,
          quantity: 1,
        },
        {
          id: 2,
          productImg1: require("assets/img/product-image/product2.png"),
          productImg2: require("assets/img/product-image/product4.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "T-Shirt Form Girls",
          productColor: "White",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 130.0,
          quantity: 1,
        },
      ],

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Cart",
          to: "/cart",
        },
      ],

      relatedItems: [
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
          totalPrice: 180.0,
          quantity: 1,
        },
        {
          id: 2,
          productImg1: require("assets/img/product-image/product2.png"),
          productImg2: require("assets/img/product-image/product4.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "T-Shirt Form Girls",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 130.0,
          quantity: 1,
        },
        {
          id: 3,
          productImg1: require("assets/img/product-image/product4.png"),
          productImg2: require("assets/img/product-image/product6.png"),
          productTagClass: "hot",
          productTag: "hot",
          productTitle: "White Black Line Dress",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 50.5,
          totalPrice: 160.0,
          quantity: 1,
        },
        {
          id: 4,
          productImg1: require("assets/img/product-image/product1.png"),
          productImg2: require("assets/img/product-image/product2.png"),
          productTagClass: "",
          productTag: "",
          productTitle: "Blue Dress For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 317.76,
          totalPrice: 180.0,
          quantity: 1,
        },
      ],

      // Product Quanity Increment/ Decrement Data
      quantity: 1,
    };
  },
  mounted() {
    this.getBasket();
  },
  methods: {
    removeProductItem: function(index) {
      this.list.splice(index, 1);
    },

    async getBasket() {
      this.list = await this.$api("api/basket", "get", {});
      console.log(this.list);
    },
  },
  computed: {
    sumTotalPrice() {
      for (var product of this.list) {
        this.sumtotal += parseFloat(product.rent_price);
        console.log(product);
        console.log(this.sumtotal);
      }

      return this.sumtotal;
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
          content: "Cart page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>

<style></style>
