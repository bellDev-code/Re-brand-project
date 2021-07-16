<template>
  <div>
    <!-- Start Header Area -->
    <header class="header-section d-none d-xl-block">
      <div class="header-wrapper">
        <div
          id="header"
          class="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden"
        >
          <div class="container">
            <div class="row">
              <div
                class="col-12 d-flex align-items-center justify-content-between"
              >
                <!-- Start Header Logo -->
                <div class="header-logo">
                  <div class="logo">
                    <nuxt-link to="/"
                      ><img :src="require('@/assets/img/logo.png')" alt="logo"
                    /></nuxt-link>
                  </div>
                </div>
                <!-- End Header Logo -->

                <!-- Start Header Main Menu -->
                <div
                  class="main-menu menu-color--black menu-hover-color--golden"
                >
                  <nav>
                    <ul>
                      <li>
                        <nuxt-link class="active main-menu-link" to="/"
                          >홈</nuxt-link
                        >
                      </li>
                      <li class="has-dropdown has-megaitem">
                        <a href="#!">상품 <i class="fa fa-angle-down"></i></a>
                        <!-- Mega Menu -->
                        <div class="mega-menu">
                          <ul class="mega-menu-inner">
                            <!-- Mega Menu Sub Link -->
                            <li class="mega-menu-item">
                              <a href="#" class="mega-menu-item-title"
                                >Shop Layouts</a
                              >
                              <ul class="mega-menu-sub">
                                <li>
                                  <nuxt-link to="/shop/shoplist"
                                    >상품 리스트</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/shop/shopfilter"
                                    >상품 검색</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/product/_slug.vue"
                                    >상품 상세</nuxt-link
                                  >
                                </li>
                              </ul>
                            </li>
                            <!-- Mega Menu Sub Link -->
                            <li class="mega-menu-item">
                              <a href="#" class="mega-menu-item-title"
                                >Other Pages</a
                              >
                              <ul class="mega-menu-sub">
                                <li>
                                  <nuxt-link to="/cart/cart"
                                    >장바구니
                                  </nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="/cart/empty-cart"
                                    >Empty Cart</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/my-account/checkout"
                                    >결제</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/my-account/wishlist"
                                    >위시리스트</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/my-account/orders"
                                    >주문확인</nuxt-link
                                  >
                                </li>
                              </ul>
                            </li>

                            <!-- Mega Menu Sub Link -->
                            <li class="mega-menu-item">
                              <div class="menu-banner">
                                <nuxt-link to="/shop" class="menu-banner-link">
                                  <img
                                    class="menu-banner-img"
                                    :src="
                                      require('@/assets/img/common/nav_banner.png')
                                    "
                                    alt="img"
                                  />
                                </nuxt-link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="has-dropdown">
                        <a href="#!">이벤트 <i class="fa fa-angle-down"></i></a>
                      </li>
                      <li class="has-dropdown">
                        <a href="#!"
                          >고객센터 <i class="fa fa-angle-down"></i
                        ></a>
                        <!-- Sub Menu -->
                        <ul class="sub-menu">
                          <li>
                            <nuxt-link to="/faq"
                              >Frequently Questions</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/privacy-policy"
                              >Privacy Policy</nuxt-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <nuxt-link to="/about-us">About Us</nuxt-link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <!-- End Header Main Menu Start -->

                <!-- Start Header Action Link -->
                <ul
                  class="header-action-link action-color--black action-hover-color--golden"
                >
                  <li>
                    <a v-b-toggle.offcanvas-wishlish class="offcanvas-toggle">
                      <i class="far fa-heart"></i>
                      <span class="item-count">{{ productItems.length }}</span>
                    </a>
                  </li>
                  <li>
                    <a v-b-toggle.offcanvas-add-cart class="offcanvas-toggle">
                      <i class="fas fa-shopping-bag"></i>
                      <span class="item-count">{{ productItems.length }}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-b-toggle.search_sidebar
                      class="search_width offcanvas-toggle"
                    >
                      <img src="~/assets/img/svg/search.svg" alt="img" />
                    </a>
                  </li>
                  <li>
                    <a
                      v-b-toggle.offcanvas-about
                      class="offacnvas offside-about offcanvas-toggle"
                      ><i class="fas fa-bars"></i
                    ></a>
                  </li>
                </ul>
                <!-- End Header Action Link -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Start Header Area -->

    <!-- ...:::: Start Offcanvas Mobile Menu Section:::... -->
    <b-sidebar
      id="offcanvas-about"
      class="offcanvas-mobile-about-section"
      backdrop
      right
    >
      <!-- Start contact Info -->
      <div class="mobile-contact-info">
        <address class="address">
          <img :src="require('@/assets/img/logo-white.png')" alt="logo" />
          <span>Address: Your address goes here.</span>
          <span>Call Us: 0123456789, 0123456789</span>
          <span>Email: demo@example.com</span>
        </address>

        <ul class="social-link">
          <li>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </li>
        </ul>

        <ul class="user-link">
          <li><nuxt-link to="/my-account/wishlist">Wishlist</nuxt-link></li>
          <li><nuxt-link to="/cart/">Cart</nuxt-link></li>
          <li><nuxt-link to="/my-account/checkout">Checkout</nuxt-link></li>
        </ul>
      </div>
      <!-- End contact Info -->
    </b-sidebar>
    <!-- ...:::: End Offcanvas Menu Section:::... -->

    <!-- Start Offcanvas Addcart Section -->
    <b-sidebar
      id="offcanvas-add-cart"
      class="offcanvas-add-cart-section"
      backdrop
      right
    >
      <div class="offcanvas-add-cart-wrapper">
        <h4 class="offcanvas-title">Shopping Cart</h4>
        <div v-if="productItems.length > 0">
          <ul class="offcanvas-cart">
            <li
              class="offcanvas-cart-item-single"
              v-for="productItem in productItems.slice(0, 4)"
              :key="productItem.id"
            >
              <div class="offcanvas-cart-item-block">
                <nuxt-link to="/product" class="offcanvas-cart-item-image-link">
                  <img
                    :src="productItem.productImg1"
                    alt="img"
                    class="offcanvas-cart-image"
                  />
                </nuxt-link>
                <div class="offcanvas-cart-item-content">
                  <nuxt-link to="/product" class="offcanvas-cart-item-link">{{
                    productItem.productTitle
                  }}</nuxt-link>
                  <div class="offcanvas-cart-item-details">
                    <span class="offcanvas-cart-item-details-quantity"
                      >{{ productItem.quantity }} x
                    </span>
                    <span class="offcanvas-cart-item-details-price"
                      >${{ productItem.productPrice }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="offcanvas-cart-item-delete text-right">
                <button
                  @click="removeProductItem(index)"
                  class="offcanvas-cart-item-delete bg-transparent remove-btn"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </li>
          </ul>

          <div class="offcanvas-cart-total-price">
            <span class="offcanvas-cart-total-price-text">Subtotal:</span>
            <span class="offcanvas-cart-total-price-value"
              >${{ CartTotal }}</span
            >
          </div>

          <ul class="offcanvas-cart-action-button">
            <li>
              <nuxt-link
                to="/cart"
                class="theme-btn-one btn-black-overlay btn_md"
                >View Cart</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/my-account/checkout"
                class="theme-btn-one btn-black-overlay btn_md"
                >Checkout</nuxt-link
              >
            </li>
          </ul>
        </div>

        <ul v-else class="offcanvas-cart">
          <li>Your cart is empty!</li>
        </ul>
      </div>
    </b-sidebar>
    <!-- End  Offcanvas Addcart Section -->

    <!-- Start Offcanvas Wishlist Sidebar Section -->
    <b-sidebar
      id="offcanvas-wishlish"
      class="offcanvas-add-cart-section"
      backdrop
      right
    >
      <div class="offcanvas-wishlist-wrapper">
        <h4 class="offcanvas-title">Wishlist</h4>

        <div v-if="productItems.length > 0">
          <ul class="offcanvas-wishlist">
            <li
              class="offcanvas-wishlist-item-single"
              v-for="productItem in productItems.slice(0, 3)"
              :key="productItem.id"
            >
              <div class="offcanvas-wishlist-item-block">
                <nuxt-link
                  to="/product"
                  class="offcanvas-wishlist-item-image-link"
                >
                  <img
                    :src="productItem.productImg1"
                    alt="img"
                    class="offcanvas-wishlist-image"
                  />
                </nuxt-link>
                <div class="offcanvas-wishlist-item-content">
                  <nuxt-link
                    to="/product"
                    class="offcanvas-wishlist-item-link"
                    >{{ productItem.productTitle }}</nuxt-link
                  >
                  <div class="offcanvas-wishlist-item-details">
                    <span class="offcanvas-wishlist-item-details-quantity"
                      >{{ productItem.quantity }} x</span
                    >
                    <span class="offcanvas-wishlist-item-details-price"
                      >${{ productItem.productPrice }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="offcanvas-wishlist-item-delete text-right">
                <button
                  @click="removeProductItem(index)"
                  class="offcanvas-wishlist-item-delete bg-transparent remove-btn"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </li>
          </ul>
          <ul class="offcanvas-wishlist-action-button">
            <li>
              <nuxt-link
                to="/my-account/wishlist"
                class="theme-btn-one btn-black-overlay btn_md"
                >View wishlist</nuxt-link
              >
            </li>
          </ul>
        </div>

        <ul v-else class="offcanvas-wishlist">
          <li>No Item in your wishlist!</li>
        </ul>
      </div>
    </b-sidebar>
    <!-- End Offcanvas Wishlist Sidebar Section -->

    <!-- Start Offcanvas Search Bar Section -->
    <b-sidebar id="search_sidebar" class="" backdrop>
      <div
        class="px-3 py-2 search-sidebar-content-wrap d-flex justify-content-center align-content-center w-100 h-100"
      >
        <form class="d-flex flex-column justify-content-center w-100">
          <input type="search" placeholder="Type keyword(s) here" />
          <button class="btn btn-lg btn-golden">Search</button>
        </form>
      </div>
    </b-sidebar>
    <!-- End Offcanvas Search Bar Section -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Mobile Menu Item Data
      menu: [
        {
          href: "/",
          title: "Home",
        },
        {
          title: "Shop",
          child: [
            {
              title: "Shop Layout",
              child: [
                {
                  href: "/shop/shoplist",
                  title: "Shop Three Grid",
                },
                {
                  href: "/shop/shopfilter",
                  title: "Shop Left Sidebar",
                },
              ],
            },
            {
              title: "Shop Pages",
              child: [
                {
                  href: "/cart/cart",
                  title: "Cart View Two",
                },
                {
                  href: "/cart/empty-cart",
                  title: "Empty Cart",
                },
                {
                  href: "/my-account/checkout",
                  title: "Checkout View One",
                },
                {
                  href: "/my-account/wishlist",
                  title: "Wishlist",
                },
              ],
            },
            {
              title: "Product Single",
              child: [
                {
                  href: "/product/product-single-2",
                  title: "Product Single Two",
                },
              ],
            },
          ],
        },

        {
          title: "Pages",
          child: [
            {
              href: "/faq",
              title: "Frequently Questions",
            },
            {
              href: "/privacy-policy",
              title: "Privacy Policy",
            },
          ],
        },
        {
          href: "/about-us",
          title: "About Us",
        },
      ],

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
          productImg1: require("assets/img/product-image/product7.png"),
          productImg2: require("assets/img/product-image/product8.png"),
          productTagClass: "",
          productTag: "",
          productTitle: "Blue Dress For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 320.0,
          quantity: 1,
        },
      ],
    };
  },

  mounted: function() {
    // Menu Js
    this.$nextTick(function() {
      window.onscroll = function() {
        myFunction();
      };

      var header = document.getElementById("header");
      var sticky = header.offsetTop;

      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    });
    // Menu End
  },

  computed: {
    // Cart Total Price
    CartTotal() {
      let total = 0;
      this.productItems.forEach((productItem) => {
        total += productItem.productPrice * productItem.quantity;
      });
      return total;
    },
  },

  methods: {
    // For Delete/Remove Product Item
    removeProductItem: function(index) {
      this.productItems.splice(index, 1);
    },
  },
};
</script>
