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

    <!--Empty Cart-Area -->
    <section id="empty_cart_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 col-12"
          >
            <div class="empaty_cart_area">
              <input
                type="image"
                src="https://cdn1.iconfinder.com/data/icons/feather-2/24/check-circle-256.png"
                alt="img"
              />
              <h2>결제가 완료되었습니다!</h2>
              <h3>정성을 다해 상품을 준비하겠습니다</h3>
              <nuxt-link to="/" class="btn btn-black-overlay btn_md"
                >계속 살펴보기</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "empty-cart",

  data() {
    return {
      title: "Empty Cart",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Empty Cart",
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
            "Empty Cart page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>

<style></style>
