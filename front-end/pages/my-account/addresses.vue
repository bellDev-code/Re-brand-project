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
                <b-nav-item to="/my-account/account-details"
                  >Account details</b-nav-item
                >
                <b-nav-item to="/login">Logout</b-nav-item>
              </b-navbar-nav>
            </div>
          </div>
          <div class="col-sm-12 col-md-9 col-lg-9">
            <div class="dashboard_content">
              <p>
                The following addresses will be used on the checkout page by
                default.
              </p>
              <h5 class="billing-address">Billing address</h5>
              <a href="#" class="view">Edit</a>
              <p><strong>Jone Alex</strong></p>
              <address>
                Address: Your address goes here.
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
