<template>
  <div class="col-lg-3">
    <div class="shop_sidebar_wrapper">
      <!-- <div class="shop_sidebar_boxed">
        <h4>Categories</h4>
        <form>
          <label class="custom_boxed"
            >All
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >New
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Best
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Sale
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </form>
      </div> -->

      <div class="shop_sidebar_boxed">
        <h4>Brand</h4>
        <form>
          <label class="custom_boxed"
            >Chanel
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Gucci
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Louis Vuitton
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >PRADA
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Hermes
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >SAINT LAURENT
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Dior
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <div class="clear_button">
            <button type="reset" class="theme-btn-one btn_sm btn-black-overlay">
              Clear Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/dist/vueSimpleRangeSlider.css";

export default {
  name: "ShopSidebar",
  components: {
    VueSimpleRangeSlider,
  },
  data() {
    return {
      // Range Slider Data
      range: [5, 300],
      min: 1,
      max: 5000,
    };
  },
  method: {},
};
</script>
