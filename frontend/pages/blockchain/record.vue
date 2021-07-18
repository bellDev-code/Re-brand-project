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

    <table class="numberOfRent">
      <tr>
        <th>대여 횟수</th>
        <td></td>
      </tr>
    </table>

    <!-- Record Area -->
    <section id="Record_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Accordion card -->
            <div class="faqs_area_wrapper">
              <div class="card_items_area">
                <b-card-header role="tab">
                  <a block v-b-toggle.accordion-2>
                    <h5 class="mb-0">
                      제품 대여기록일지<i
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
                    대여기록은 블록체인 상에 저장됩니다. 수정이 불가능한
                    기록으로 아래 기록 사실을 보증합니다.
                  </b-card-body>
                </b-collapse>
              </div>
            </div>

            <table class="table">
              <thead>
                <tr>
                  <th>제품명</th>
                  <th>일련번호</th>
                  <th>대여상태</th>
                  <th colspan="2">대여일자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30 Montaigne Chain</td>
                  <td>ND1AZjmsDgAR4iQ</td>
                  <td>대여중</td>
                  <td>2021/07/16</td>
                  <td>2021/07/23</td>
                </tr>
                <tr>
                  <td>30 Montaigne Chain</td>
                  <td>ND1AZjmsDgAR4iQ</td>
                  <td>대여중</td>
                  <td>2021/07/05</td>
                  <td>2021/07/10</td>
                </tr>
                <tr>
                  <td>30 Montaigne Chain</td>
                  <td>ND1AZjmsDgAR4iQ</td>
                  <td>대여중</td>
                  <td>2021/06/26</td>
                  <td>2021/06/30</td>
                </tr>
                <tr>
                  <td>30 Montaigne Chain</td>
                  <td>ND1AZjmsDgAR4iQ</td>
                  <td>대여중</td>
                  <td>2021/06/15</td>
                  <td>2021/06/23</td>
                </tr>
              </tbody>
            </table>
            <div class="record_text">
              <p>
                블록체인 네트워크에 기록된 제품의 현황과 내역을 확인하실 수
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "record",

  data() {
    return {
      title: "Record",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Recordy",
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
          content: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
th td {
  text-align: center;
  padding: 5px;
}
.record_text {
  margin-top: 1.5rem;
  text-align: right;
}
</style>
