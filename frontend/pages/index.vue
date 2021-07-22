<template>
  <div class="home-page">
    <!-- Banner Area -->
    <section id="banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner_text_one">
              <h1>Live For <span>Fashion</span></h1>
              <h3>Save Up To 50%</h3>
              <!-- <nuxt-link to="/shop/shop-3" class="theme-btn-one bg-black btn_md">Shop Now</nuxt-link> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product variation -->
    <section id="product_variation_one" class="pt-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="product_variation_one_boxed img-zoom-hover">
              <img
                :src="require('@/assets/img/exhibition/vacance.png')"
                alt="img"
              />
              <div class="product_var_one_text">
                <h4 class="color_one">Vacance</h4>
                <h2>Hot</h2>
                <h4>Collection</h4>
                <nuxt-link
                  to="/shop/shopfilter"
                  class="theme-btn-one bg-black btn_sm"
                  >Shop Now</nuxt-link
                >
              </div>
            </div>
            <div class="product_variation_one_boxed img-zoom-hover">
              <img
                :src="require('@/assets/img/exhibition/summer.png')"
                alt="img"
              />
              <div class="product_var_one_text_left">
                <h4 class="color_one">Summer</h4>
                <h2>Hot</h2>
                <h4>Collection</h4>
                <nuxt-link
                  to="/shop/shopfilter"
                  class="theme-btn-one bg-black btn_sm"
                  >Shop Now</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="product_variation_one_boxed img-zoom-hover">
              <img
                :src="require('@/assets/img/exhibition/offer.png')"
                alt="img"
              />
              <div class="product_var_one_text_center">
                <h2 class="color_one">10% Offer</h2>
                <nuxt-link
                  to="/shop/shopfilter"
                  class="theme-btn-one bg-black btn_sm"
                  >Shop Now</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="product_variation_one_boxed img-zoom-hover">
              <img
                :src="require('@/assets/img/exhibition/arrivals.png')"
                alt="img"
              />
              <div class="product_var_one_text_right">
                <h2>Cool</h2>
                <h4 class="color_one">Arrivals</h4>
                <nuxt-link
                  to="/shop/shopfilter"
                  class="theme-btn-one bg-black btn_sm"
                  >Shop Now</nuxt-link
                >
              </div>
            </div>
            <div class="product_variation_one_boxed img-zoom-hover">
              <img
                :src="require('@/assets/img/exhibition/sale.png')"
                alt="img"
              />
              <div class="product_var_one_text_right">
                <h2>Cool</h2>
                <h4 class="color_one">Sale</h4>
                <nuxt-link
                  to="/shop/shopfilter"
                  class="theme-btn-one bg-black btn_sm"
                  >Shop Now</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hot Product Area -->
    <section id="hot_Product_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="center_heading">
              <h2>The Best Product</h2>
            </div>
          </div>
        </div>

        <b-tabs class="hot-product-area-tabs">
          <b-tab title="Bags" class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="productItem in list.slice(4, 8)"
              :key="productItem.product_id"
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
          </b-tab>

          <b-tab title="Watches" class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="productItem in list.slice(8, 10)"
              :key="productItem.product_id"
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
          </b-tab>
        </b-tabs>
      </div>
    </section>

    <!-- To Days Area -->
    <section id="to_days_area" class="ptb-100 slider_arrows_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="center_heading">
              <h2>ToDay's Deal</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <!-- <div class="col-lg-3 col-md-4 col-sm-6 col-12"> -->
            <carousel
              class="todays_slider"
              v-if="list.length > 0"
              :autoplay="true"
              :loop="true"
              :nav="true"
              :dots="false"
              :smartSpeed="1000"
              :margin="30"
              :responsive="{
                0: { items: 1 },
                600: { items: 2 },
                992: { items: 3 },
                1200: { items: 4 },
              }"
            >
              <ProductBox
                v-for="productItem in list"
                :key="productItem.id"
                :productId="productItem.product_id"
                :productImg1="productItem.image_main"
                :productImg2="productItem.image_main"
                productTagClass=""
                productTag=""
                :productTitle="productItem.product_name"
                :productPrice="productItem.rent_price"
                productDescription=""
              />
              <!-- <ProductBox
                v-for="productItem in productItems"
                :key="productItem.id"
                :productId="productItem.id"
                :productImg1="productItem.productImg1"
                :productImg2="productItem.productImg2"
                :productTagClass="productItem.productTagClass"
                :productTag="productItem.productTag"
                :productTitle="productItem.productTitle"
                :productPrice="productItem.productPrice"
                :productDescription="productItem.productDescription"
              /> -->
            </carousel>
          </div>
        </div>
      </div>
    </section>

    <!-- Special offer -->
    <section id="special_offer_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-lg-4 col-md-12 col-sm-12 col-12">
            <div class="offer_banner_one text-center">
              <h5>TRENDING</h5>
              <h2>New Fashion</h2>
              <p>
                Experience the world's Finest fashion Trend
              </p>
              <nuxt-link
                to="/shop/shopfilter"
                class="theme-btn-one bg-whites btn_md"
                >Shop Now</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram Arae -->
    <section><InstagramArea /></section>
  </div>
</template>

<script>
import ProductBox from "~/components/product-box/ProductBox";
import Timer from "../components/widgets/Timer";
import InstagramArea from "../components/instagram/InstagramArea";
import carousel from "vue-owl-carousel";

export default {
  name: "Home",
  components: {
    ProductBox,
    Timer,
    InstagramArea,
    carousel,
  },

  created() {
    this.getProductList();
  },

  data() {
    return {
      title: "Home",
      // Product Items Data
      list: [],
      productItems: [
        {
          id: 1,
          productImg1:
            "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1587568505/476433_DTDCT_9022_001_057_0000_Light-GG.jpg",
          productImg2:
            "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1587568505/476433_DTDCT_9022_001_057_0000_Light-GG.jpg",
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
          productImg1:
            "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1587569403/476433_DTDCT_1000_001_057_0000_Light-GG.jpg",
          productImg2:
            "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1587569403/476433_DTDCT_1000_001_057_0000_Light-GG.jpg",
          productTagClass: "new",
          productTag: "new",
          productTitle: "T-Shirt Form Girls",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 130.0,
          quantity: 1,
        },
        // {
        //   id: 3,
        //   productImg1: require("assets/img/product-image/product5.png"),
        //   productImg2: require("assets/img/product-image/product6.png"),
        //   productTagClass: "hot",
        //   productTag: "hot",
        //   productTitle: "White Black Line Dress",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 50.5,
        //   totalPrice: 160.0,
        //   quantity: 1,
        // },
        // {
        //   id: 4,
        //   productImg1: require("assets/img/product-image/product7.png"),
        //   productImg2: require("assets/img/product-image/product8.png"),
        //   productTagClass: "",
        //   productTag: "",
        //   productTitle: "Blue Dress For Woman",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 738.5,
        //   totalPrice: 320.0,
        //   quantity: 1,
        // },
        // {
        //   id: 5,
        //   productImg1: require("assets/img/product-image/product9.png"),
        //   productImg2: require("assets/img/product-image/product10.png"),
        //   productTagClass: "new",
        //   productTag: "new",
        //   productTitle: "Black T-Shirt For Woman",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 99.5,
        //   totalPrice: 155.0,
        //   quantity: 1,
        // },
        // {
        //   id: 6,
        //   productImg1: require("assets/img/product-image/product11.png"),
        //   productImg2: require("assets/img/product-image/product12.png"),
        //   productTagClass: "hot",
        //   productTag: "hot",
        //   productTitle: "Blue Dress For Woman",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 738.5,
        //   totalPrice: 320.0,
        //   quantity: 1,
        // },
        // {
        //   id: 7,
        //   productImg1: require("assets/img/product-image/product13.png"),
        //   productImg2: require("assets/img/product-image/product14.png"),
        //   productTagClass: "new",
        //   productTag: "new",
        //   productTitle: "T-Shirt Form Girls",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 48.5,
        //   totalPrice: 200.0,
        //   quantity: 1,
        // },
        // {
        //   id: 8,
        //   productImg1: require("assets/img/product-image/product15.png"),
        //   productImg2: require("assets/img/product-image/product1.png"),
        //   productTagClass: "",
        //   productTag: "",
        //   productTitle: "T-Shirt Form Girls",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 738.5,
        //   totalPrice: 80.0,
        //   quantity: 1,
        // },
        // {
        //   id: 9,
        //   productImg1: require("assets/img/product-image/product2.png"),
        //   productImg2: require("assets/img/product-image/product3.png"),
        //   productTagClass: "new",
        //   productTag: "new",
        //   productTitle: "Blue Dress For Woman",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 300,
        //   totalPrice: 320.0,
        //   quantity: 1,
        // },
        // {
        //   id: 10,
        //   productImg1: require("assets/img/product-image/product4.png"),
        //   productImg2: require("assets/img/product-image/product5.png"),
        //   productTagClass: "new",
        //   productTag: "new",
        //   productTitle: "Black T-Shirt For Woman",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 738.5,
        //   totalPrice: 330.0,
        //   quantity: 1,
        // },
        // {
        //   id: 11,
        //   productImg1: require("assets/img/product-image/product6.png"),
        //   productImg2: require("assets/img/product-image/product7.png"),
        //   productTagClass: "hot",
        //   productTag: "hot",
        //   productTitle: "T-Shirt Form Girls",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 328,
        //   totalPrice: 320.0,
        //   quantity: 1,
        // },
        // {
        //   id: 12,
        //   productImg1: require("assets/img/product-image/product8.png"),
        //   productImg2: require("assets/img/product-image/product9.png"),
        //   productTagClass: "new",
        //   productTag: "new",
        //   productTitle: "T-Shirt Form Girls",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 738.5,
        //   totalPrice: 320.0,
        //   quantity: 1,
        // },
        // {
        //   id: 13,
        //   productImg1: require("assets/img/product-image/product10.png"),
        //   productImg2: require("assets/img/product-image/product11.png"),
        //   productTagClass: "new",
        //   productTag: "new",
        //   productTitle: "Blue Dress For Woman",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 738.5,
        //   totalPrice: 320.0,
        //   quantity: 1,
        // },
        // {
        //   id: 14,
        //   productImg1: require("assets/img/product-image/product12.png"),
        //   productImg2: require("assets/img/product-image/product13.png"),
        //   productTagClass: "hot",
        //   productTag: "hot",
        //   productTitle: "Black T-Shirt For Woman",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 738.5,
        //   totalPrice: 320.0,
        //   quantity: 1,
        // },
        // {
        //   id: 15,
        //   productImg1: require("assets/img/product-image/product14.png"),
        //   productImg2: require("assets/img/product-image/product15.png"),
        //   productTagClass: "new",
        //   productTag: "new",
        //   productTitle: "T-Shirt Form Girls",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 158.5,
        //   totalPrice: 320.0,
        //   quantity: 1,
        // },
        // {
        //   id: 16,
        //   productImg1: require("assets/img/product-image/product1.png"),
        //   productImg2: require("assets/img/product-image/product2.png"),
        //   productTagClass: "hot",
        //   productTag: "hot",
        //   productTitle: "White Black Line Dress",
        //   productDescription:
        //     "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
        //   productPrice: 18.5,
        //   totalPrice: 320.0,
        //   quantity: 1,
        // },
      ],
    };
  },

  methods: {
    async getProductList() {
      this.list = await this.$api("api/basket", "get", {});
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
          content: "Home page - AndShop Ecommerce Vue js, Nuxt js Template ",
        },
      ],
    };
  },
};
</script>

<style></style>
