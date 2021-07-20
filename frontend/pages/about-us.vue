<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container">
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

    <!-- About-Top -->
    <section id="about-top" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="about_top_img">
              <img src="~/assets/img/common/img-about.jpg" alt="img" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="about_top_left_content">
              <h2>Re:brand</h2>
              <br />
              <h3>We provide beauty.</h3>
              <h4>
                모든 사람은 아름다워질 수 있고, 아름다워질 자격이 있다.
              </h4>
              <br /><br />
              <strong>
                RE:brand는 명품 대여 쇼핑의 새로운 문화를 창조할
                것입니다</strong
              >
              <br />
              <p>
                Re:brand는 선별된 국외 브랜드 공식 전개사 또는 최상위 공급업체
                계약을 통해 <br />국내에서 가장 많은 브랜드의 상품을 취급하는
                명품 대여 플랫폼 기업입니다. <br />Re:brand의 최적화된 유통
                시스템으로 밀라노 패션위크에서 선보인 <br />동일한 상품을
                일주일만에 한국에서도 만나보실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About progressbar -->
    <section id="about_progressbar" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about_progressbar_content">
              <h2>Functionality meets perfection</h2>
              <p>
                In today’s day and age, one cannot underestimate the importance
                of design, the art of creating striking visuals to move and
                captivate your audience. And as the world becomes more and more
                digitized with each passing second, the importance of graphic
                design has been rocketed to the top.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="custom-progress m-t-40">
              <!-- Progressbar Item  -->
              <div class="progress-bar-item skill-progressbar">
                <h6 class="skill-name font--semi-bold m-b-15">UI/UX</h6>
                <div class="progress">
                  <div
                    class="progress-bar line-progressbar active"
                    role="progressbar"
                    aria-valuenow="45"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 80%"
                  ></div>
                </div>
              </div>

              <!-- Progressbar Item  -->
              <div class="progress-bar-item skill-progressbar">
                <h6 class="skill-name font--semi-bold m-b-15">Ideas</h6>
                <div class="progress">
                  <div
                    class="progress-bar line-progressbar active"
                    role="progressbar"
                    aria-valuenow="45"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 70%"
                  ></div>
                </div>
              </div>

              <!-- Progressbar Item  -->
              <div class="progress-bar-item skill-progressbar">
                <h6 class="skill-name font--semi-bold m-b-15">Design</h6>
                <div class="progress">
                  <div
                    class="progress-bar line-progressbar active"
                    role="progressbar"
                    aria-valuenow="45"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 90%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Promo -->
    <section id="service_promo_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="service_promo_single_item">
              <div class="service_prom_image">
                <img src="~/assets/img/icon/icon_about1.jpg" alt="img" />
              </div>
              <div class="service_prom_content">
                <h3>Creative Always</h3>
                <p>
                  Stay creative with Billey and the huge collection of premade
                  elements, layouts &amp; effects.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="service_promo_single_item">
              <div class="service_prom_image">
                <img src="~/assets/img/icon/icon_about2.jpg" alt="img" />
              </div>
              <div class="service_prom_content">
                <h3>Express Customization</h3>
                <p>
                  Easy to install and configure the theme customization in a few
                  clicks with Billey.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="service_promo_single_item">
              <div class="service_prom_image">
                <img src="~/assets/img/icon/icon_about3.jpg" alt="img" />
              </div>
              <div class="service_prom_content">
                <h3>Premium Integrations</h3>
                <p>
                  Integrated premium plugins in Billey is the secret weapon for
                  your business to thrive.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="service_promo_single_item">
              <div class="service_prom_image">
                <img src="~/assets/img/icon/icon_about4.jpg" alt="img" />
              </div>
              <div class="service_prom_content">
                <h3>Real-time Editing</h3>
                <p>
                  Edit your work and preview the changes on the screen live with
                  advanced page builder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Area -->
    <section id="team_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="center_heading">
              <h2>Expert Team</h2>
              <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <carousel
              class="team_slider"
              :autoplay="true"
              :loop="true"
              :nav="false"
              :dots="false"
              :smartSpeed="1000"
              :margin="30"
              :responsive="{
                0: { items: 1 },
                600: { items: 2 },
                992: { items: 3 },
                1200: { items: 4 },
              }"
            >
              <div class="team-single">
                <div class="team-img">
                  <img src="~/assets/img/team/team4.png" alt="img" />
                </div>
                <div class="team-content">
                  <h4 class="team-name font--bold">Ms. Sandela</h4>
                  <span class="team-title">CEO</span>
                  <ul class="team-social pos-absolute">
                    <li>
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="team-single">
                <div class="team-img">
                  <img src="~/assets/img/team/team1.png" alt="img" />
                </div>
                <div class="team-content">
                  <h4 class="team-name font--bold">Mr. Heroas</h4>
                  <span class="team-title">Head Of Markating</span>
                  <ul class="team-social pos-absolute">
                    <li>
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="team-single">
                <div class="team-img">
                  <img src="~/assets/img/team/team2.png" alt="img" />
                </div>
                <div class="team-content">
                  <h4 class="team-name font--bold">Ms. Raka</h4>
                  <span class="team-title">Admin</span>
                  <ul class="team-social pos-absolute">
                    <li>
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="team-single">
                <div class="team-img">
                  <img src="~/assets/img/team/team3.png" alt="img" />
                </div>
                <div class="team-content">
                  <h4 class="team-name font--bold">Ms. Valona</h4>
                  <span class="team-title">Manager</span>
                  <ul class="team-social pos-absolute">
                    <li>
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="team-single">
                <div class="team-img">
                  <img src="~/assets/img/team/team4.png" alt="img" />
                </div>
                <div class="team-content">
                  <h4 class="team-name font--bold">Ms. Sandela</h4>
                  <span class="team-title">CEO</span>
                  <ul class="team-social pos-absolute">
                    <li>
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="team-single">
                <div class="team-img">
                  <img src="~/assets/img/team/team1.png" alt="img" />
                </div>
                <div class="team-content">
                  <h4 class="team-name font--bold">Mr. Heroas</h4>
                  <span class="team-title">Head Of Markating</span>
                  <ul class="team-social pos-absolute">
                    <li>
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram Arae -->
    <InstagramArea class="pt-100" />
  </div>
</template>

<script>
import InstagramArea from "~/components/instagram/InstagramArea";
import carousel from "vue-owl-carousel";

export default {
  name: "about-us",
  components: {
    InstagramArea,
    carousel,
  },
  data() {
    return {
      title: "About Us",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "About",
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
          content: "About Us page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>

<style></style>
