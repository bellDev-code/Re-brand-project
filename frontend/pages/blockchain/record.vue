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

    <!-- Record Area -->
    <section id="Record_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-10"></div>
              <table class="numberOfRent col-2">
                <tr>
                  <th class="numberOfRent-th">대여 횟수</th>
                  <td class="numberOfRent-td" style="text-align:center">3회</td>
                </tr>
              </table>
            </div>

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
                  <td>{{ record.product_name }}</td>
                  <td>ND1AZjmsDgAR4iQ</td>
                  <td>반납완료</td>
                  <td>2021/06/26</td>
                  <td>2021/06/30</td>
                </tr>
                <tr>
                  <td>{{ record.product_name }}</td>
                  <td>ND1AZjmsDgAR4iQ</td>
                  <td>반납완료</td>
                  <td>2021/07/05</td>
                  <td>2021/07/10</td>
                </tr>
                <tr>
                  <td>{{ record.product_name }}</td>
                  <td>ND1AZjmsDgAR4iQ</td>
                  <td>반납완료</td>
                  <td>2021/07/16</td>
                  <td>2021/07/23</td>
                </tr>
                <tr v-if="record.payment_id">
                  <td>{{ record.product_name }}</td>
                  <td>{{ record.certi_id }}</td>
                  <td>{{ record.rent_state }}</td>
                  <td>{{ record.start_rent }}</td>
                  <td>{{ record.end_rent }}</td>
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
      list: [],
      title: "Record",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Record",
        },
      ],
      record: [],
      productId: 0,
    };
  },

  created() {
    this.productId = this.$route.query.product_id;
  },

  mounted() {
    this.getRecord();
  },
  methods: {
    async getRecord() {
      this.record = (
        await this.$api("api/detail?product_id=" + this.productId, "get", {})
      )[0];
    },
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
.numberOfRent-th {
  width: 60px;
  font-size: 1rem;
}
.numberOfRent-td {
  width: 40px;
}
</style>
