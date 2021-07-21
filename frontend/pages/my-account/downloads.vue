<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
            <div class="container ">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="common_banner_text">
                            <h2>{{this.title}}</h2>
                            <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
                        </div>
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
              <h4>다운파일들</h4>
              <div class="table_page table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>제품</th>
                      <th>다운받은 날짜</th>
                      <th>다운상태</th>
                      <th>다운받기</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Shopnovilla - Free Real Estate PSD Template</td>
                      <td>May 10, 2018</td>
                      <td><span class="danger">다운가능</span></td>
                      <td>
                        <a href="#" class="view"
                          >내 파일 다운받기</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>Organic - ecommerce html template</td>
                      <td>Sep 11, 2018</td>
                      <td>종료</td>
                      <td>
                        <a href="#" class="view"
                          >내 파일 다운받기</a
                        >
                      </td>
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
  name: "Downloads",
  data() {
    return {
      title: "Downloads",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Downloads",
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
            "Downloads page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>

<style></style>
