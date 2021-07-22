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
                      ><img :src="require('@/assets/img/logoRe.png')" alt="logo"
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

                      <li class="has-dropdown">
                        <a href="#!">상품 <i class="fa fa-angle-down"></i></a>
                        <!-- Sub Menu -->
                        <ul class="sub-menu">
                          <li>
                            <nuxt-link to="/shop/shopfilter"
                              >상품 검색</nuxt-link
                            >
                          </li>
                          <!-- <li>
                            <nuxt-link to="/product/_slug.vue"
                              >상품 상세</nuxt-link
                            >
                          </li> -->
                          <!-- <li>
                            <nuxt-link to="/blockchain/record"
                              >대여 기록</nuxt-link
                            >
                          </li> -->
                        </ul>
                      </li>

                      <li class="has-dropdown">
                        <a href="#!"
                          >마이메뉴 <i class="fa fa-angle-down"></i
                        ></a>
                        <!-- Sub Menu -->
                        <ul class="sub-menu">
                          <li>
                            <nuxt-link to="/cart/cart">장바구니 </nuxt-link>
                          </li>
                          <!-- <li>
                            <nuxt-link to="/cart/empty-cart"
                              >Empty Cart</nuxt-link
                            >
                          </li> -->

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
                      <li class="has-dropdown">
                        <a href="#!"
                          >고객센터 <i class="fa fa-angle-down"></i
                        ></a>
                        <!-- Sub Menu -->
                        <ul class="sub-menu">
                          <li>
                            <nuxt-link to="/faq">자주하는 질문</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/privacy-policy"
                              >개인정보보호정책</nuxt-link
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
                    <nuxt-link to="/my-account/wishlist">
                      <i class="far fa-heart"></i>
                      <span class="item-count">{{ wishlistItems.length }}</span>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/cart/cart">
                      <i class="fas fa-shopping-bag"></i>
                      <span class="item-count">{{ cartItems.length }}</span>
                    </nuxt-link>
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
          <img :src="require('@/assets/img/logoYellow.png')" alt="logo" />
          <span>Address: 서울특별시 영등포구 양평동3가 15-1 </span>
          <span>Call Us: 0123456789, 0123456789</span>
          <span>Email: rebrand07@gmail.com</span>
        </address>

        <ul class="social-link">
          <li>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="https://www.instagram.com/rebrand_seoul/"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
        </ul>
      </div>
      <!-- End contact Info -->
    </b-sidebar>
    <!-- ...:::: End Offcanvas Menu Section:::... -->

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
          ],
        },

        {
          title: "Pages",
          child: [
            {
              href: "/faq",
              title: "FAQ",
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
      // 위시리스트랑 장바구니 DB 에 담긴 배열 정보를 담아야 위에서 카운트해서 표시
      wishlistItems: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
      cartItems: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
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
