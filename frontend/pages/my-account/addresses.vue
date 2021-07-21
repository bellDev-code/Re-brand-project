<template>
  <div>
    <!-- Banner Area -->
    <section id="banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner_text_one"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- My Account-Area -->
    <section id="my-account_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3 col-lg-3">
            <!-- Nav tabs -->
            <div class="dashboard_tab_button">
              <b-navbar-nav>
                <b-nav-item to="/my-account">대시보드</b-nav-item>
                <b-nav-item to="/my-account/orders">주문확인</b-nav-item>
                <b-nav-item to="/my-account/downloads">다운파일들</b-nav-item>
                <b-nav-item to="/my-account/addresses">주소지확인</b-nav-item>
              </b-navbar-nav>
            </div>
          </div>
          <div class="col-sm-12 col-md-9 col-lg-9">
            <div class="dashboard_content">
              <p>
                본 주소지는 결제 페이지 기본값으로 설정됩니다.
              </p>
              <h5 class="billing-address">받을 주소지</h5>
              <a href="#" class="view">변경</a>
              <p><strong>홍 길 동</strong></p>
              <address>
                주소: 내 주소지 받는 곳
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Addresses",
  data() {
    return {
      title: "Address",
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Addresses",
        },
      ],
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
          content:
            "Addresses page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>

<style></style>
