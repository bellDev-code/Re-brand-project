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

    <!-- Faq-Area -->
    <section id="faqs_arae" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="faqs_area_wrapper">
              <div class="accordion" role="tablist">
                <!-- Accordion card -->
                <div class="card_items_area">
                  <b-card-header role="tab">
                    <a block v-b-toggle.accordion-1>
                      <h5 class="mb-0">
                        배송 기간이 궁금합니다<i
                          class="fas fa-angle-down rotate-icon"
                        ></i>
                      </h5>
                    </a>
                  </b-card-header>
                  <b-collapse
                    id="accordion-1"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      배송 기간은 출고 이후 평일 기준 1~2일 정도 소요됩니다.
                      <br />택배사 사정으로 인해 배송이 지연되는 경우도 있으니
                      참고 부탁드립니다. <br />결제 완료 후 익일 내에는 출고하기
                      위해 노력하고 있으며, <br />예상일보다 늦어질 시
                      개별적으로 연락드리고 있습니다.
                    </b-card-body>
                  </b-collapse>
                </div>

                <!-- Accordion card -->
                <div class="card_items_area">
                  <b-card-header role="tab">
                    <a block v-b-toggle.accordion-2>
                      <h5 class="mb-0">
                        상품 사용 중 음식물을 흘렸어요. 비용이 청구되나요?<i
                          class="fas fa-angle-down rotate-icon"
                        ></i>
                      </h5>
                    </a>
                  </b-card-header>
                  <b-collapse
                    id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      상품 반납 이후 저희 소속 감정가가 상품을 감정합니다.
                      <br />상품이 많이 훼손되어 재렌트가 불가하거나 수리가
                      필요하다고 판단될 시에는 그에 적당한 비용이 청구됩니다.
                      <br />그러나 사용 중에 발생한 생활 잔기스에 대한 비용은
                      청구되지 않습니다.
                    </b-card-body>
                  </b-collapse>
                </div>

                <!-- Accordion card -->
                <div class="card_items_area">
                  <b-card-header role="tab">
                    <a block v-b-toggle.accordion-3>
                      <h5 class="mb-0">
                        결제 완료했는데, 추가 또는 취소하고 싶어요.<i
                          class="fas fa-angle-down rotate-icon"
                        ></i>
                      </h5>
                    </a>
                  </b-card-header>
                  <b-collapse
                    id="accordion-3"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <strong>출고 이전</strong>
                      <br />추가로 상품을 구매 후 고객센터로 전화 주시면 합배송
                      가능합니다. <br />추가로 주문을 했어도 고객센터로 문의주지
                      않을 시에는 따로 배송되니 유의바랍니다. <br />취소는
                      마이메뉴 > 주문확인 > 주문상세 페이지로 들어가시면 취소가
                      가능합니다. <br /><br /><strong>출고 이후</strong>
                      <br />출고 이후에는 추가로 주문해 주셔도 기존 주문과 같이
                      배송 기간 1~2일 소요됩니다. <br />출고 이후 취소는
                      불가합니다.
                    </b-card-body>
                  </b-collapse>
                </div>

                <!-- Accordion card -->
                <div class="card_items_area">
                  <b-card-header role="tab">
                    <a block v-b-toggle.accordion-4>
                      <h5 class="mb-0">
                        구성품을 알고 싶습니다.<i
                          class="fas fa-angle-down rotate-icon"
                        ></i>
                      </h5>
                    </a>
                  </b-card-header>
                  <b-collapse
                    id="accordion-4"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      리브랜드의 모든 상품은 병행 수입하고 있습니다.<br />
                      병행 수입 특성상 백화점과 구성품 차이가 있을 수
                      있습니다.<br />
                      정확한 확인이 필요한 경우에는 고객센터로 문의
                      부탁드립니다.
                    </b-card-body>
                  </b-collapse>
                </div>

                <!-- Accordion card -->
                <div class="card_items_area">
                  <b-card-header role="tab">
                    <a block v-b-toggle.accordion-5>
                      <h5 class="mb-0">
                        정품 맞나요?<i
                          class="fas fa-angle-down rotate-icon"
                        ></i>
                      </h5>
                    </a>
                  </b-card-header>
                  <b-collapse
                    id="accordion-5"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      리브랜드는 국외 브랜드 공식 전개사 또는 최상위
                      공급업체에서 제공하는 정품만을 유통하고 있습니다.<br />
                      또한, 리브랜드 내의 감정사가 직접 감정 후 대여하고
                      있습니다.<br />
                      대여하신 상품이 정품 판별 프로세스를 통해 가품으로 확인 될
                      경우 대여금액의 150%를 보상해드립니다.<br />
                      (대여 가격 100% 환불 + 대여 가격 100% 적립금으로 보상)
                    </b-card-body>
                  </b-collapse>
                </div>
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
  name: "FAQ",

  data() {
    return {
      title: "FAQ",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "FAQ",
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
          content: "FAQ page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>

<style></style>
