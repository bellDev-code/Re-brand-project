<template>
  <div>
        <!-- Banner Area -->
        <section id="common_banner_one">
            <div class="container">
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

        <!-- About-Top -->
        <section id="about-top" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="about_top_img">
                            <img src="~/assets/img/common/img-about.jpg" alt="img">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="about_top_left_content">
                            <h2>Re:brand에 대해서</h2>
                            <h3>리브랜드는 기존 브랜드에서 새로운 이름과 상징, 디자인의 개념을 조합하기
                            위한 명품 쇼핑몰입니다.</h3>
                            <h4>우리는 좀더 많은 사람들이 다함께 명품을 가질 권리가 있고, <br>
                            누구든 가볍게 소비하며 다양한 명품을 이용하게 하려고 합니다</h4>
                            <p>이러한 이유로 우리는 각 제품들 중에서 명품만을 골라서 대여와 유통을 통하여<br>
                            명품을 소지하는것 뿐만아니라 소비자와 유통을 통한 잠든 명품의 활성화를 할수 있습니다.</p>
                            <p>앞으로 리브랜드가 해야할 것은 시장의 확장과 미래 산업에서 명품과 더불어 성장하는 중요한<br>
                            시장이라 믿으며 앞으로도 더 커진 리브랜드 쇼핑몰이 되겠습니다.</p>
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
                            <h2>기술과 시스템 그리고 블록체인의 만남</h2>
                            <p>현대에 들어서 각종 다양한 패션이 빠르게 지나가면서 다양성과 규모가 커졌습니다. <br>
                            앞으로도 꾸준히 성장하는 명품시장에 눈에 띄는 비주얼과 성장하는 회사가 되겠습니다<br>
                            오른쪽 차트와 같이 온라인 시장이 눌어나며 지속적인 상승을 보일 것입니다.</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="custom-progress m-t-40">
                            <!-- Progressbar Item  -->
                            <div class="progress-bar-item skill-progressbar">
                                <h6 class="skill-name font--semi-bold m-b-15">2019년</h6>
                                <div class="progress">
                                    <div class="progress-bar line-progressbar active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>
                                </div>
                            </div>

                            <!-- Progressbar Item  -->
                            <div class="progress-bar-item skill-progressbar">
                                    <h6 class="skill-name font--semi-bold m-b-15">2020년</h6>
                                <div class="progress">
                                    <div class="progress-bar line-progressbar active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 70%"> </div>
                                </div>
                            </div>
                            
                            <!-- Progressbar Item  -->
                            <div class="progress-bar-item skill-progressbar">
                                <h6 class="skill-name font--semi-bold m-b-15">2021년</h6>
                                <div class="progress">
                                    <div class="progress-bar line-progressbar active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>
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
                                <img src="~/assets/img/icon/icon_about1.jpg" alt="img">
                            </div>
                            <div class="service_prom_content">
                                <h3>대여를 통한 소비</h3>
                                <p>적은 금액으로도 사용자들이 명품을 사용할 수 있습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="service_promo_single_item">
                            <div class="service_prom_image">
                                <img src="~/assets/img/icon/icon_about2.jpg" alt="img">
                            </div>
                            <div class="service_prom_content">
                                <h3>숨겨진 명품의 활성화</h3>
                                <p>비싸게 사서 잠깐 사용하고 들어간 명품들이 아닌 다양한 명품을 사용하여 품질과 소비가 활성화됩니다.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="service_promo_single_item">
                            <div class="service_prom_image">
                                <img src="~/assets/img/icon/icon_about3.jpg" alt="img">
                            </div>
                            <div class="service_prom_content">
                                <h3>품질 관리와 정품보증</h3>
                                <p>공식 품질관리를 통하여 상품성을 유지하고, 정품보증을 확인하여 안정적인 소비가 가능합니다.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="service_promo_single_item">
                            <div class="service_prom_image">
                                <img src="~/assets/img/icon/icon_about4.jpg" alt="img">
                            </div>
                            <div class="service_prom_content">
                                <h3>실물확인과 중고매매</h3>
                                <p>택배를 통하여 실물을 확인가능하며, 소유한 명품을 본사가 매입하여 중고시장을 활성화합니다.</p>
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
                            <h2>팀 구성원</h2>
                            <p>각종 비전문가들이 구성된 최고의 스타트업</p>       
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <carousel class="team_slider" :autoplay="true" :loop="true" :nav="false" :dots="false" :smartSpeed="1000" :margin="30"
                         :responsive="{0:{items:1},600:{items:2},992:{items:3},1200:{items:4}}">

                            <div class="team-single">
                                <div class="team-img">
                                    <img src="~/assets/img/team/team4.png" alt="img">
                                </div>
                                <div class="team-content">
                                    <h4 class="team-name font--bold">Ms. Sandela</h4>
                                    <span class="team-title">CEO</span>
                                    <ul class="team-social pos-absolute">
                                            <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-single">
                                <div class="team-img">
                                    <img src="~/assets/img/team/team1.png" alt="img">
                                </div>
                                <div class="team-content">
                                    <h4 class="team-name font--bold">Mr. Heroas</h4>
                                    <span class="team-title">Head Of Markating</span>
                                    <ul class="team-social pos-absolute">
                                        <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-linkedin"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-single">
                                <div class="team-img">
                                    <img src="~/assets/img/team/team2.png" alt="img">
                                </div>
                                <div class="team-content">
                                    <h4 class="team-name font--bold">Ms. Raka</h4>
                                    <span class="team-title">Admin</span>
                                    <ul class="team-social pos-absolute">
                                            <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-single">
                                <div class="team-img">
                                    <img src="~/assets/img/team/team3.png" alt="img">
                                </div>
                                <div class="team-content">
                                    <h4 class="team-name font--bold">Ms. Valona</h4>
                                    <span class="team-title">Manager</span>
                                    <ul class="team-social pos-absolute">
                                            <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-single">
                                <div class="team-img">
                                    <img src="~/assets/img/team/team4.png" alt="img">
                                </div>
                                <div class="team-content">
                                    <h4 class="team-name font--bold">Ms. Sandela</h4>
                                    <span class="team-title">CEO</span>
                                    <ul class="team-social pos-absolute">
                                            <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-single">
                                <div class="team-img">
                                    <img src="~/assets/img/team/team1.png" alt="img">
                                </div>
                                <div class="team-content">
                                    <h4 class="team-name font--bold">Mr. Heroas</h4>
                                    <span class="team-title">Head Of Markating</span>
                                    <ul class="team-social pos-absolute">
                                        <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-linkedin"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-google-plus-g"></i></a></li>
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
import InstagramArea from '~/components/instagram/InstagramArea'
import carousel from 'vue-owl-carousel'

export default {
    name: 'about-us',
    components: {
        InstagramArea,
        carousel
    },
    data() {
        return {
            title: 'About Us',
            
            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'About'
                }
            ],
        }
    },
    // Page head() Title, description for SEO 
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'About Us page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>

<style>

</style>