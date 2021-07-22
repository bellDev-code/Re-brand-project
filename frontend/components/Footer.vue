<template>
  <div>
    <!-- footer Area -->
    <footer id="footer_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="footer_left_side">
              <nuxt-link to="/"
                ><img
                  :src="require('@/assets/img/logo modification.png')"
                  alt="logo"
              /></nuxt-link>
              <p>
                No. 1 luxury rental platform in Korea.
                <br />We will accompany you until the day <br />when everyone
                can be happy.
              </p>
              <div class="footer_left_side_icon">
                <ul>
                  <li>
                    <a href="#!"><i class="fab fa-facebook-f"></i></a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/rebrand_seoul/"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 col-12">
            <div class="footer_one_widget">
              <h3>INFORMATION</h3>
              <ul>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
                <li>
                  <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
                </li>
                <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-12 col-12">
            <div class="footer_one_widget">
              <!-- <h3>Your Account</h3>
              <ul>
                <li><nuxt-link to="/cart/cart">Cart</nuxt-link></li>
                <li><nuxt-link to="/cart/empty-cart">Empty Cart</nuxt-link></li>
                <li>
                  <nuxt-link to="/my-account/checkout">Checkout</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/my-account/wishlist">Wishlist</nuxt-link>
                </li>
              </ul> -->
            </div>
          </div>
          <div class="col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="footer_one_widget">
              <h3>NEWSLETTER</h3>
              <div id="mc_embed_signup" class="subscribe-form">
                <form>
                  <div class="mc-form">
                    <input
                      class="form-control"
                      type="email"
                      required=""
                      placeholder="Your Mail*"
                      name="EMAIL"
                      value=""
                    />
                    <div class="clear">
                      <button
                        class="theme-btn-one btn_md"
                        type="button"
                        name="subscribe"
                      >
                        <i class="icon-cursor"></i> Send Mail
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- CopyRight Area -->
    <section id="copyright_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="copyright_left">
              <h6>© CopyRight 2021 <span>Rebrand</span></h6>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="copyright_right">
              <img
                :src="require('@/assets/img/common/payment.png')"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
