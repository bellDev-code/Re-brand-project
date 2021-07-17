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
                  <input type="date" name="" id="" />
                </div>
                <div class="col">
                  <span class="mr-3">To</span>
                  <input type="date" name="" id="" />
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
                          placeholder="info@gmail.com"
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
                  <div class="col text-center">
                    Date_Start
                  </div>
                  <div class="col text-center">
                    ~
                  </div>

                  <div class="col text-center">
                    Date_End
                  </div>
                </div>
              </div>
              <div class="table-responsive order_table mt-3">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th class="w-auto p-3">Option</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Blue Dress For Woman
                        <span class="product-qty">x 2</span>
                      </td>
                      <td>Option_color</td>
                      <td>$90.00</td>
                    </tr>
                    <tr>
                      <td>
                        Lether Gray Tuxedo <span class="product-qty">x 1</span>
                      </td>
                      <td>Option_color</td>
                      <td>$55.00</td>
                    </tr>
                    <tr>
                      <td>
                        Woman Full Sliv Dresss
                        <span class="product-qty">x 3</span>
                      </td>
                      <td>Option_color</td>
                      <td>$204.00</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>SubTotal</th>
                      <td></td>
                      <td class="product-subtotal">$349.00</td>
                    </tr>
                    <tr>
                      <th>배송비</th>
                      <td></td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <th>쿠폰 할인</th>
                      <td></td>
                      <td>(Subtotal * Coupon_rate)</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td></td>
                      <td class="product-subtotal">$349.00</td>
                    </tr>
                  </tfoot>
                </table>
                <div
                  class="col-lg-6 col-md-12 col-sm-=12 col-12 border border-warning border-5 mt-3"
                >
                  <div class="form-group">
                    <label for="coupon">Use Coupon</label>
                    <select class="form-control first_null" id="city">
                      <option value="">Select your coupon</option>
                      <option value="AX">New customer 10% off</option>
                      <option value="AF">VIP 30% off</option>
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

              <button
                v-b-toggle.search_sidebar
                class="theme-btn-one btn-black-overlay btn_sm search_width offcanvas-toggle"
              >
                > Place Order
              </button>
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
      title: "Checkout",
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
};
</script>

<style></style>
