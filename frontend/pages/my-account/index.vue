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
              <h4>대시보드</h4>
              <p>
                대시보드에서 쉽게 조회하여 관리할 수 있습니다.
                <nuxt-link to="/my-account/orders">최근 주문들</nuxt-link>,
                
                <nuxt-link to="/my-account/addresses"
                  >배송 및 청구한 주소</nuxt-link
                >확인하기
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      title: "My Account",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Dashboard",
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
            "My Account page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>

<style></style>
