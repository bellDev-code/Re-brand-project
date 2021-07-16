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

    <!-- My Account-Area -->
    <section id="my-account_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3 col-lg-3">
            <!-- Nav tabs -->
            <div class="dashboard_tab_button">
              <b-navbar-nav>
                <b-nav-item to="/my-account">Dashboard</b-nav-item>
                <b-nav-item to="/my-account/orders">Orders</b-nav-item>
                <b-nav-item to="/my-account/downloads">Downloads</b-nav-item>
                <b-nav-item to="/my-account/addresses">Addresses</b-nav-item>
              </b-navbar-nav>
            </div>
          </div>
          <div class="col-sm-12 col-md-9 col-lg-9">
            <div class="dashboard_content">
              <h4>Downloads</h4>
              <div class="table_page table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Downloads</th>
                      <th>Expires</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Shopnovilla - Free Real Estate PSD Template</td>
                      <td>May 10, 2018</td>
                      <td><span class="danger">Expired</span></td>
                      <td>
                        <a href="#" class="view"
                          >Click Here To Download Your File</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>Organic - ecommerce html template</td>
                      <td>Sep 11, 2018</td>
                      <td>Never</td>
                      <td>
                        <a href="#" class="view"
                          >Click Here To Download Your File</a
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
