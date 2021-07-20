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

    <!-- Shop Main Area -->
    <section id="shop_main_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <ShopSidebar />

          <div class="col-lg-9 text-center">
            <div class="btn-group" role="group" aria-label="...">
              <button type="button" class="btn btn-light">All</button>
              <button type="button" class="btn btn-light">Bag</button>
              <button type="button" class="btn btn-light">Shoes</button>
            </div>

            <div class="shop_Search col-lg-3">
              <form>
                <input
                  type="text"
                  class="form-control"
                  v-model="searchValue"
                  placeholder="Search..."
                />
                <button type="button" @click="searchResult">
                  <img
                    :src="require('@/assets/img/svg/search.svg')"
                    alt="img"
                  />
                </button>
              </form>
            </div>
            <div class="row">
              <div
                class="col-lg-4 col-md-4 col-sm-6 col-12"
                v-for="productItem in productItems"
                id="my-table"
                :key="productItem.id"
                :items="productItems"
                :per-page="perPage"
                :current-page="currentPage"
                small
              >
                <ProductBox
                  :productId="productItem.id"
                  :productImg1="productItem.productImg1"
                  :productImg2="productItem.productImg2"
                  :productTagClass="productItem.productTagClass"
                  :productTag="productItem.productTag"
                  :productTitle="productItem.productTitle"
                  :productPrice="productItem.productPrice"
                />
              </div>

              <div class="col-lg-12">
                <!-- pagination start -->
                <b-pagination
                  v-model="currentPage"
                  pills
                  :total-rows="rows"
                  :per-page="perPage"
                  aria-controls="my-table"
                ></b-pagination>
                <!-- pagination end -->
              </div>
            </div>
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
import ShopSidebar from "~/components/widgets/ShopSidebar";

export default {
  name: "shop-left-sidebar",
  components: {
    ProductBox,
    InstagramArea,
    ShopSidebar,
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      title: "Shop",

      // Product Items Data
      productItems: [],

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Shop",
          to: "/shop/shopfilter",
        },
      ],

      // Pagination Data
      // rows: 0,
      currentPage: 1,
      totalPage: 0,
      searchValue: "",
    };
  },
  watch: {
    currentPage() {
      this.getPageData();
    },
  },
  created() {
    this.initPage();
  },
  mounted() {
    this.getPageData();
  },
  methods: {
    searchResult() {
      console.log(this.searchValue);
    },
    initPage() {
      //총 제품 등록수 - 23
      //
      this.totalPage = 9;
      // this.totalPage = Math.ceil(totalCount / this.perPage);
      console.log(this.totalPage);
    },
    getPageData() {
      //axios 서버에 요청.  currentPage

      if (this.currentPage == 1) {
        this.productItems = [
          {
            id: 1,
            productImg1: require("assets/img/product-image/product1.png"),
            productImg2: require("assets/img/product-image/product2.png"),
            productTagClass: "best",
            productTag: "best",
            productTitle: "Black T-Shirt For Woman",
            productDescription:
              "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
            productPrice: 38.5,
          },
          {
            id: 2,
            productImg1: require("assets/img/product-image/product3.png"),
            productImg2: require("assets/img/product-image/product4.png"),
            productTagClass: "best",
            productTag: "best",
            productTitle: "T-Shirt Form Girls",
            productDescription:
              "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
            productPrice: 738.5,
          },
          {
            id: 3,
            productImg1: require("assets/img/product-image/product5.png"),
            productImg2: require("assets/img/product-image/product6.png"),
            productTagClass: "sale",
            productTag: "sale",
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
            productTagClass: "sale",
            productTag: "sale",
            productTitle: "Blue Dress For Woman",
            productDescription:
              "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
            productPrice: 738.5,
          },
        ];
      } else if (this.currentPage == 2) {
        this.productItems = [
          {
            id: 7,
            productImg1: require("assets/img/product-image/product13.png"),
            productImg2: require("assets/img/product-image/product14.png"),
            productTagClass: "sale",
            productTag: "sale",
            productTitle: "T-Shirt Form Girls",
            productDescription:
              "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
            productPrice: 48.5,
          },
          {
            id: 8,
            productImg1: require("assets/img/product-image/product15.png"),
            productImg2: require("assets/img/product-image/product1.png"),
            productTagClass: "new",
            productTag: "new",
            productTitle: "T-Shirt Form Girls",
            productDescription:
              "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
            productPrice: 738.5,
          },
          {
            id: 9,
            productImg1: require("assets/img/product-image/product2.png"),
            productImg2: require("assets/img/product-image/product3.png"),
            productTagClass: "sale",
            productTag: "sale",
            productTitle: "Blue Dress For Woman",
            productDescription:
              "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
            productPrice: 300,
          },
          {
            id: 10,
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
            id: 11,
            productImg1: require("assets/img/product-image/product15.png"),
            productImg2: require("assets/img/product-image/product1.png"),
            productTagClass: "best",
            productTag: "best",
            productTitle: "T-Shirt Form Girls",
            productDescription:
              "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
            productPrice: 738.5,
          },
          {
            id: 12,
            productImg1: require("assets/img/product-image/product2.png"),
            productImg2: require("assets/img/product-image/product3.png"),
            productTagClass: "",
            productTag: "",
            productTitle: "Blue Dress For Woman",
            productDescription:
              "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
            productPrice: 300,
          },
        ];
      }
    },
  },
  computed: {
    rows() {
      // return this.items.length;
      return this.totalPage;
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

<style></style>
