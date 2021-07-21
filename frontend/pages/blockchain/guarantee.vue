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

    <!-- Record Area -->
    <section id="Record_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <table class="table">
              <thead>
                <tr>
                  <th colspan="3">정품인증서</th>
                  <th>
                    <img
                      src="/_nuxt/assets/img/logoRe.png"
                      width="125"
                      height="100"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>브랜드(Brand)</th>
                  <td>구찌</td>
                  <th>제품번호</th>
                  <td>qwrwd1fw1f34g</td>
                </tr>
                <tr>
                  <th>모델 명(Model Name)</th>
                  <td>30 Montaigne Chain</td>
                  <th>대여횟수</th>
                  <td>55회</td>
                </tr>
                <tr>
                  <th>일련번호(Serial Number)</th>
                  <td>ND1AZjmsDgAR4iQ</td>
                  <th>제품상태</th>
                  <td>최상</td>
                </tr>
                <tr>
                  <th>A/S 책임자 및 수입자</th>
                  <td>구찌 인터네셔널 02-0000-0000</td>
                  <th>대여여부</th>
                  <td>대여중</td>
                </tr>
              </tbody>
            </table>
            <div class="record_text">
              <h1>유의 사항</h1>
              <p>
                - 사이트 가입 후 생성된 블록체인 기반주소의 지갑은 본 회사의
                서비스 전용으로, 서비스 내에서 다뤄지는 기록과 이력을 조회하는
                수단으로 사용됩니다.<br />
                <br />
                - 해당 주소로 암호화폐인 유틸리티 토큰을 입금하실 경우 출금이
                불가하니 유의바랍니다.<br />
                <br />
                - 제품의 판매 및 대여로 인하여 지갑이 소각 및 이전을 할 수
                있으니 유의 바랍니다.<br />
                <br />
                - 본 정품 인증정보는 정품 인증서를 대체하여, 오프라인 상에서
                본사가 보중하는 용도로만 사용 가능합니다. <br />
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
  name: "guarantee",

  data() {
    return {
      list: [],
      title: "Guarantee",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Guarantee",
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

  mounted() {
    this.certification();
  },

  methods: {
    async certification() {
      this.list = await this.$api("api/certificate", "get", {});
      console.log(this.list);
    },
  },
};
</script>

<style scoped>
th td {
  text-align: center;
  padding: 10px;
}
th {
  padding: 10px;
  border: 2px solid #ccc;
}
h1 {
  color: red;
  font-size: 24px;
}
body {
  padding: 5rem;
}
.record_text {
  margin-top: 1.5rem;
  text-align: ㅣleft;
}
.numberOfRent-th {
  width: 60px;
  font-size: 1rem;
}
.numberOfRent-td {
  width: 40px;
}
</style>
