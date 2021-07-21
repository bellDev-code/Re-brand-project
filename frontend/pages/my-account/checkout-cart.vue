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

    <!-- Checkout-Area -->
    <section id="checkout_one" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="user-actions">
              <h3 role="tab">
                <i class="far fa-file"></i>Returning customer?
                <b-button
                  class="border-0 p-0 bg-transparent"
                  v-b-toggle.checkout_coupon
                  >Click here to enter your code</b-button
                >
              </h3>
              <b-collapse
                id="checkout_coupon"
                class="checkout_coupon"
                accordion="my-accordion"
                role="tabpanel"
              >
                <div class="checkout_info">
                  <form action="#">
                    <input placeholder="Coupon code" type="text" />
                    <button
                      class="theme-btn-one btn btn-black-overlay btn-md"
                      type="button"
                    >
                      Apply coupon
                    </button>
                  </form>
                </div>
              </b-collapse>
            </div>
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="checkout-area-bg bg-white">
              <div class="check-heading">
                <h3>주문 고객정보</h3>
              </div>

              <div class="row align-items-center mt-3">
                <div class="col">
                  <span class="mr-3">From</span>
                  <b-form-datepicker
                    id="start-datepicker"
                    v-model="period_start"
                    class="mb-2"
                    @input="startDate"
                  ></b-form-datepicker>
                  <!-- <input
                    type="date"
                    name=""
                    v-model="period_start"
                    @change="startDate"
                  /> -->
                </div>
                <div class="col">
                  <span class="mr-3">To</span>
                  <b-form-datepicker
                    id="end-datepicker"
                    v-model="period_end"
                    class="mb-2"
                    @input="endDate"
                  ></b-form-datepicker>
                  <!-- <input
                    type="date"
                    name=""
                    v-model="period_end"
                    @change="endDate"
                  /> -->
                </div>
              </div>

              <div class="check-out-form">
                <form>
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <label for="fname">이름</label>
                        <input
                          type="text"
                          required=""
                          class="form-control"
                          id="fname"
                          placeholder="First name *"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <label for="lname">성</label>
                        <input
                          type="text"
                          required=""
                          class="form-control"
                          id="lname"
                          placeholder="Last name *"
                        />
                      </div>
                    </div>
                    <!-- <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <label for="cname">Company Name</label>
                        <input
                          class="form-control"
                          required=""
                          type="text"
                          id="cname"
                          placeholder="Company Name"
                        />
                      </div>
                    </div> -->
                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                      <div class="form-group mt-3">
                        <label for="email">Email</label>
                        <input
                          class="form-control"
                          required=""
                          type="text"
                          id="email"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                      <div class="form-group mt-3">
                        <label for="email">연락처</label>
                        <input
                          class="form-control"
                          required=""
                          type="tel"
                          id="phone"
                          placeholder="000-0000-0000 형식으로 입력"
                          pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
                          maxlength="13"
                        />
                      </div>
                    </div>
                    <!-- <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <label for="country">Country</label>
                        <select class="form-control first_null" id="country">
                          <option value=""s>Select an option...</option>
                          <option value="AX">usa</option>
                          <option value="AF">Afghanistan</option>
                        </select>
                      </div>
                    </div> -->
                    <div class="col-lg-6 col-md-12 col-sm-=12 col-12 mt-3">
                      <div class="form-group">
                        <label for="city">시/도</label>
                        <select class="form-control first_null" id="city">
                          <option value="">시/도를 선택해주세요.</option>
                          <option value="AX">Seoul</option>
                          <option value="AF">Gyeonggi-do</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-=12 col-12 mt-3">
                      <div class="form-group">
                        <label for="zip">동/읍/면/리</label>
                        <input
                          type="text"
                          class="form-control"
                          id="zip"
                          required=""
                          placeholder="동/읍/면/리"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12 mt-3">
                      <div class="form-group">
                        <label for="faddress">상세주소</label>
                        <input
                          type="text"
                          class="form-control"
                          id="faddress"
                          required=""
                          placeholder="상세주소를 기입해주세요."
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12 mt-3">
                      <div class="form-group">
                        <label for="messages">추가 요청사항</label>
                        <textarea
                          rows="5"
                          class="form-control"
                          id="messages"
                          placeholder="안전한 배송 부탁드립니다."
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="materialUnchecked"
                        />
                        <label class="form-check-label" for="materialUnchecked"
                          >Save In Address Book</label
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="order_review  box-shadow bg-white">
              <div class="check-heading">
                <h3>주문상세</h3>
              </div>
              <h4 class="mt-3 order_review  box-shadow bg-white">이용 기간</h4>

              <div class="container">
                <div class="row">
                  <input
                    type="text"
                    class="col text-center"
                    v-model="period_start"
                    placeholder="시작일"
                    readonly
                  />

                  <div class="col text-center">
                    -
                  </div>

                  <input
                    type="text"
                    class="col text-center"
                    v-model="period_end"
                    placeholder="반납일"
                    readonly
                  />
                </div>
              </div>
              <div class="table-responsive order_table mt-3">
                <table class="table">
                  <thead>
                    <tr>
                      <th>제품</th>
                      <th class="w-auto p-3">옵션</th>
                      <th>합계</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      :key="productItem.id"
                      v-for="productItem in productItems"
                    >
                      <td>
                        {{ productItem.productTitle }}
                      </td>
                      <td>{{ productItem.productColor }}</td>
                      <td>${{ productItem.productPrice }}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>배송비</th>
                      <td></td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <th>합계</th>
                      <td></td>
                      <td class="product-subtotal">${{ sumTotalPrice }}</td>
                    </tr>
                    <tr>
                      <th>대여기간</th>
                      <td></td>
                      <td>{{ dateDiff }}일</td>
                    </tr>
                    <tr>
                      <th>총 금액</th>
                      <td></td>
                      <td class="product-subtotal">
                        ${{ sumTotalPrice * dateDiff }}
                      </td>
                    </tr>

                    <tr>
                      <th>쿠폰 할인</th>
                      <td></td>
                      <td>{{ 100 - Coupon_rate * 100 }}%</td>
                    </tr>
                    <tr>
                      <th>결제 금액</th>
                      <td></td>
                      <td class="product-subtotal">
                        ${{ parseInt(sumTotalPrice * dateDiff * Coupon_rate) }}
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <div
                  class="col-lg-6 col-md-12 col-sm-=12 col-12 border border-warning border-5 mt-3"
                >
                  <div class="form-group">
                    <label for="coupon">Use Coupon</label>
                    <select
                      class="form-control first_null"
                      id="discount"
                      v-model="Coupon_rate"
                      @change="applyCoupon"
                    >
                      <option value="1" selected>Select your coupon</option>
                      <option value="0.9">New customer 10% off</option>
                      <option value="0.7">VIP 30% off</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="order_review bg-white">
              <div class="check-heading">
                <h3>결제수단</h3>
              </div>
              <div class="payment_method">
                <div class="payment_option">
                  <!-- <div class="custome-radio">
                    <input
                      class="form-check-input"
                      required=""
                      type="radio"
                      name="payment_option"
                      id="exampleRadios3"
                      value="option3"
                      checked=""
                    />
                    <label class="form-check-label" for="exampleRadios3"
                      >Direct Bank Transfer</label
                    >
                    <p data-method="option3" class="payment-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div> -->
                  <div class="custome-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="payment_option"
                      id="exampleRadios4"
                      value="option4"
                    />
                    <label class="form-check-label" for="exampleRadios4"
                      >Credit cards</label
                    >
                    <p data-method="option4" class="payment-text">
                      Use your credit cards
                    </p>
                  </div>
                  <div class="custome-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="payment_option"
                      id="exampleRadios5"
                      value="option5"
                    />
                    <label class="form-check-label" for="exampleRadios5"
                      >Check-Card</label
                    >
                    <p data-method="option5" class="payment-text">
                      Use your check cards
                    </p>
                  </div>
                </div>
              </div>
              <nuxt-link to="/" class="theme-btn-one btn-black-overlay btn_sm">
                > Back to Main</nuxt-link
              >
              <!-- modal test -->

              <b-button
                id="show-btn"
                @click="$bvModal.show('bv-modal-example')"
                class="theme-btn-one btn btn-warning btn_sm"
              >
                > Place Order</b-button
              >

              <b-modal id="bv-modal-example" hide-footer>
                <template #modal-title>
                  Re:brand Payment Process
                </template>
                <div class="d-block text-center">
                  <h2 class="mt-5 mb-5">결제가 진행중입니다.</h2>
                  <input
                    type="image"
                    src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
                    class="mb-5"
                  />
                </div>
                <b-button
                  class="mt-5 btn-lg"
                  block
                  @click="$bvModal.hide('bv-modal-example')"
                  >닫기</b-button
                >
                <b-button
                  to="/my-account/payment_complete"
                  class="mt-5 btn-lg btn btn-warning"
                  block
                >
                  > 결제완료</b-button
                >
              </b-modal>

              <!-- modal test -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "checkout",

  data() {
    return {
      period_start: "",
      period_end: "",
      i: 0,
      sumtotal: 0,
      sdt: 0,
      edt: 0,
      dateDiff: "",
      title: "Checkout",
      startD: "시작일",
      endD: "반납일",
      Coupon_rate: 1,
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Checkout",
          to: "/my-account/checkout",
        },
      ],
      productItems: [
        {
          id: 1,
          productImg1: require("assets/img/product-image/product1.png"),
          productImg2: require("assets/img/product-image/product2.png"),
          productTagClass: "",
          productTag: "",
          productTitle: "Black T-Shirt For Woman",
          productColor: "Black",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 38.5,
          totalPrice: 180.0,
          quantity: 1,
        },
        {
          id: 2,
          productImg1: require("assets/img/product-image/product2.png"),
          productImg2: require("assets/img/product-image/product4.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "T-Shirt Form Girls",
          productColor: "White",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 130.0,
          quantity: 1,
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
          content: "Checkout page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
  computed: {
    sumTotalPrice() {
      for (var product of this.productItems) {
        this.sumtotal += parseFloat(product.productPrice);
        console.log(product);
        console.log(this.sumtotal);
      }

      return this.sumtotal;
    },
  },
  methods: {
    // 날짜 업데이트
    startDate() {
      this.startD = this.period_start;
    },
    endDate() {
      this.endD = this.period_end;
      var sdt = new Date(this.startD);
      var edt = new Date(this.endD);
      var dateDiff = Math.ceil(
        (edt.getTime() - sdt.getTime()) / (1000 * 3600 * 24)
      );
      console.log(dateDiff);
      this.dateDiff = dateDiff + 1;
      return this.dateDiff;
    },
    applyCoupon() {
      return this.Coupon_rate;
    },
  },
};
</script>

<style></style>
