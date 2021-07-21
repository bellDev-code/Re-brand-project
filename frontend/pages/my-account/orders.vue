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
              <h4>주문건</h4>
              <div class="table_page table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>주 문</th>
                      <th>날 짜</th>
                      <th>상 태</th>
                      <th>총 합</th>
                      <th>조 회</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>May 10, 2018</td>
                      <td><span class="success">배송완료</span></td>
                      <td>$25.00 for 1 item</td>
                      <td>
                        <nuxt-link to="/cart/" class="view">보기</nuxt-link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>May 10, 2018</td>
                      <td>배송중</td>
                      <td>$17.00 for 1 item</td>
                      <td>
                        <nuxt-link to="/cart/" class="view">보기</nuxt-link>
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
  name: "Orders",
  data() {
    return {
      title: "Orders",
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Orders",
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
          content: "Orders page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>

<style></style>
