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

    <!-- Checkout-Area -->
    <section id="Wishlist_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="table_desc">
              <div class="table_page table-responsive mb-0">
                <table class="mb-0">
                  <!-- Start Wishlist Table Head -->
                  <thead>
                    <tr>
                      <th class="product_remove">제거</th>
                      <th class="product_thumb">제품</th>
                      <th class="product_name">제품명</th>
                      <th class="product-price">색상</th>
                      <th class="product-price">가격</th>
                      <th class="product_stock">재고 수</th>
                      <th class="product_addcart">장바구니에 담기</th>
                    </tr>
                  </thead>
                  <!-- End Cart Table Head -->
                  <tbody v-if="productItems.length > 0">
                    <!-- Start Wishlist Single Item-->
                    <tr
                      v-for="productItem in list"
                      :key="productItem.product_id"
                    >
                      <td class="product_remove">
                        <button
                          @click="removeProductItem(index)"
                          class="bg-transparent remove-btn"
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </td>

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
                      <td class="product-price">
                        {{ productItem.product_color }}
                      </td>
                      <td class="product-price">
                        ${{ productItem.rent_price }}
                      </td>
                      <td class="product_stock">
                        <h6>{{ productItem.number_stock }} 개</h6>
                      </td>
                      <td class="product_addcart">
                        <button class="theme-btn-one btn-black-overlay btn_sm">
                          Add To Cart
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td class="border-0">No Item found!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "wishlist",

  data() {
    return {
      list: [],
      title: "Wishlist",

      // Product Items Data
      productItems: [
        {
          id: 1,
          productImg1: require("assets/img/product-image/product5.png"),
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
          productImg1: require("assets/img/product-image/product4.png"),
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
        {
          id: 3,
          productImg1: require("assets/img/product-image/product3.png"),
          productImg2: require("assets/img/product-image/product6.png"),
          productTagClass: "hot",
          productTag: "hot",
          productTitle: "White Black Line Dress",
          productColor: "White",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 50.5,
          totalPrice: 160.0,
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
          text: "Wishlist",
          to: "/my-account/wishlist",
        },
      ],
    };
  },
  mounted() {
    this.getwishList();
  },

  methods: {
    removeProductItem: function(index) {
      this.list.splice(index, 1);
    },
    async getwishList() {
      this.list = await this.$api("api/products", "get", {});
      console.log(this.list);
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
          content: "Wishlist page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>

<style></style>
