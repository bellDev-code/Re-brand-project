<template>
  <div>
    <section id="common_banner_one">
      <div class="container ">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>Guarantee</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>
    <table>
      <tr>
        <th>정품 인증서</th>
        <th></th>
        <th></th>
        <th></th>
        <th>로 고</th>
        <!-- <th>링크</th>
        <th>이미지</th>
        <th>부제</th>
        <th>제작연도</th>
        <th>감독</th>
        <th>배우</th>
        <th>평점</th> -->

        <!-- <th class="product_thumb">Image</th>
        <th class="product_name">Product</th>
        <th class="product_option">Option</th>
        <th class="product-price">Price</th>
        <th class="product_quantity">Quantity</th>
        <th class="product_total">Total</th>
        <th class="product_remove">Remove</th>
        <th class="product_select">Select</th> -->
      </tr>
      <tr v-for="item in items" :key="item.title">
        <td><span v-html="item.title"></span></td>
        <td><span v-html="item.pubDate"></span></td>
        <td><span v-html="item.subtitle"></span></td>
        <td><span v-html="item.director"></span></td>
        <!-- <td><a target="_blank" :href="item.link">{{item.link}}</a></td> -->
      </tr>
      <h>유의 사항</h>
      <p>
        - 사이트 가입 후 생성된 블록체인 기반주소의 지갑은 본 회사의 서비스
        전용으로,<br />
        서비스 내에서 다뤄지는 기록과 이력을 조회하는 수단으로 사용됩니다.<br />
        <br />
        - 해당 주소로 암호화폐인 유틸리티 토큰을 입금하실 경우 출금이 불가하니
        유의바랍니다.<br />
        <br />
        - 제품의 판매 및 대여로 인하여 지갑이 소각 및 이전을 할 수 있으니 유의
        바랍니다.<br />
        <br />
        - 본 정품 인증정보는 정품 인증서를 대체하여, 오프라인 상에서 본사가
        보중하는 용도로만<br />
        사용 가능합니다.
      </p>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "<strong>브랜드(Brand)</strong>",
          pubDate: "구찌",
          subtitle: "<strong>제품번호</strong>",
          director: "qwrwd1fw1f34g",
        },
        {
          title: "<strong>모델 명(Model  Name)</strong>",
          pubDate: "Black T-Shirt For Woman",
          subtitle: "<strong>대여횟수</strong>",
          director: "55회",
        },
        {
          title: "<strong>일련번호(Serial Number)</strong>",
          pubDate: "ND1AZjmsDgAR4iQ",
          subtitle: "<strong>제품상태</strong>",
          director: "최상",
        },
        {
          title: "<strong>A/S 책임자 및 수입자</strong>",
          pubDate: "구찌 인터네셔널 02-0000-0000",
          subtitle: "<strong>대여여부</strong>",
          director: "대여중",
        },
        //    ,
        //   {
        // "title": "<strong>A/S 책임자 및 수입자</strong>",
        // "link": "",
        // "image": "",
        // "subtitle": "",
        // "pubDate": "",
        // "director": "",
        // "actor": "",
        // "userRating": ""
        //   }
      ],
    };
  },
};
</script>

<style>
td,
th {
  padding: 10px;
  border: 1px solid #ccc;
}
body {
  padding: 1rem;
}
</style>
