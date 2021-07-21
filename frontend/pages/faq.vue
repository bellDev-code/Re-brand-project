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
                                        <h5 class="mb-0">배송 기간을 알고 싶어요.<i class="fas fa-angle-down rotate-icon"></i></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    배송기간은 배송방법, 고객님의 수령지역 및 배송사에 따라 차이가 있습니다. <br>
                                    대부분 상품 배송기간은 판매자가 상품을 발송한 날로부터 영업일 기준 3~5일 정도 소요됩니다.
                                    </b-card-body>
                                </b-collapse>
                            </div>

                            <!-- Accordion card -->
                            <div class="card_items_area">
                                <b-card-header role="tab">
                                    <a block v-b-toggle.accordion-2>
                                        <h5 class="mb-0">주문한 상품을 반품/교환하고 싶어요.<i class="fas fa-angle-down rotate-icon"></i></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                     '전자상거래에 의한 소비자보호에 관한 법률'에 의거, 반품기간 이내에는 언제든지 판매자(가맹점)에 반품/교환을 요청하실 수 있습니다. <br>
                                    (반품운송비 원인제공자가 부담 원칙) <br>
                                    반품을 원하시는 경우 우선 판매자(가맹점)에 직접 연락하여 사유, 배송방법, 운송비를 협의하신 후 상품을 반송하시면 됩니다. <br>
                                    구매확정 이후에는 반품/교환요청을 하실 수 없습니다.
                                    </b-card-body>
                                </b-collapse>
                            </div>

                            <!-- Accordion card -->
                            <div class="card_items_area">
                                <b-card-header role="tab">
                                    <a block v-b-toggle.accordion-3>
                                        <h5 class="mb-0">주문을 취소했는데, 상품이 발송되어 버렸어요. 어떻게 하나요?<i class="fas fa-angle-down rotate-icon"></i></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    취소요청을 했는데 상품이 발송된 경우, 상품을 받으신 뒤 반품처리를 진행해주셔야 합니다. <br>
                                    단, 구매자 귀책사유로 반품이 요청되는 경우 반품배송비가 청구될 수 있습니다.
                                    </b-card-body>
                                </b-collapse>
                            </div>

                            <!-- Accordion card -->
                            <div class="card_items_area">
                                <b-card-header role="tab">
                                    <a block v-b-toggle.accordion-4>
                                        <h5 class="mb-0">A/S를 받고 싶습니다.<i class="fas fa-angle-down rotate-icon"></i></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    A/S는 본사가 엄선한 전문 수선업체에서 이루어지며, 수선업체에 수선가능여부 확인, 견적 등의 전체적인 과정을 본사에서 대행해드리고 있습니다. <br>
                                    - 고객센터를 통해 상품의 하자 부분과 전체적인 상태을 말씀해주시면 됩니다.<br>
                                    - 일부 심한 하자의 경우 수선이 불가능할 수도 있습니다.<br>
                                    - 유상/무상 수선 여부는 상품 훼손의 귀책여부, 본사의 고객 정책 등에 의해 유동적으로 변경될 수 있습니다.<br>
                                       자세한 내용은 고객센터에 문의 부탁 드립니다.
                                    </b-card-body>
                                </b-collapse>
                            </div>

                            <!-- Accordion card -->
                            <div class="card_items_area">
                                <b-card-header role="tab">
                                    <a block v-b-toggle.accordion-5>
                                        <h5 class="mb-0">대여한 상품을 기간 내에 반납 못하면 어떻게 되나요?<i class="fas fa-angle-down rotate-icon"></i></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    정해진 반납 일자를 초과해 반납할 경우 연체료가 발생합니다. <br>
                                     '연체일 X 1일 단기 대여 이용료' 기준으로 연체료가 발생합니다.
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
    name: 'FAQ',

    data() {
        return {

            title: 'FAQ',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'FAQ'
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
            content: 'FAQ page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>

<style>

</style>