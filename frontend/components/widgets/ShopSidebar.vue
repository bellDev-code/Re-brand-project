<template>
    <div class="col-lg-3">
        <div class="shop_sidebar_wrapper">
            <div class="shop_Search">
                <form>
                    <input type="text" class="form-control" placeholder="Search...">
                    <button type="button"><img :src="require('@/assets/img/svg/search.svg')" alt="img"></button>
                </form>
            </div>
            <div class="shop_sidebar_boxed">
                <h4>Product Categories</h4>
                <form>
                    <label class="custom_boxed">Woman Dresses
                        <input type="radio" checked="checked" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">T-shirts
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Fashion
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Bags
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Jackets
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Shoes
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Jeans
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                </form>
            </div>
            <div class="shop_sidebar_boxed">
                <h4>Price</h4>
                <div class="price_filter">
                    <div class="price_slider_amount">
                        <VueSimpleRangeSlider
                            style="width: 100%"
                            :min="min"
                            :max="max"
                            :logarithmic="true"
                            v-model="range"
                        />
                        <span>Price:  ${{range[0]}} - ${{range[1]}}  </span>
                    </div>
                </div>
            </div>
            <div class="shop_sidebar_boxed">
                <h4>Color</h4>
                <div class="product-variable-color">
                    <label for="modal-product-color-red6">
                        <input name="modal-product-color" id="modal-product-color-red6" class="color-select"
                            type="radio" checked="">
                        <span class="product-color-red"></span>
                    </label>
                    <label for="modal-product-color-tomato1">
                        <input name="modal-product-color" id="modal-product-color-tomato1"
                            class="color-select" type="radio">
                        <span class="product-color-tomato"></span>
                    </label>
                    <label for="modal-product-color-green2">
                        <input name="modal-product-color" id="modal-product-color-green2"
                            class="color-select" type="radio">
                        <span class="product-color-green"></span>
                    </label>
                    <label for="modal-product-color-light-green3">
                        <input name="modal-product-color" id="modal-product-color-light-green3"
                            class="color-select" type="radio">
                        <span class="product-color-light-green"></span>
                    </label>
                    <label for="modal-product-color-blue4">
                        <input name="modal-product-color" id="modal-product-color-blue4" class="color-select"
                            type="radio">
                        <span class="product-color-blue"></span>
                    </label>
                    <label for="modal-product-color-light-blue5">
                        <input name="modal-product-color" id="modal-product-color-light-blue5"
                            class="color-select" type="radio">
                        <span class="product-color-light-blue"></span>
                    </label>
                </div>
            </div>
            <div class="shop_sidebar_boxed">
                <h4>Size</h4>
                <form id="sizes_input">
                    <label class="custom_boxed">XS
                        <input type="radio" checked="checked" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">S
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">M
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">L
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">XL
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                </form>
            </div>
            <div class="shop_sidebar_boxed">
                <h4>Brand</h4>
                <form>
                    <label class="custom_boxed">Next
                        <input type="radio" checked="checked" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Adidas
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Calvin Klein
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Nike
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Geox
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">River Island
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <div class="clear_button">
                        <button type="reset" class="theme-btn-one btn_sm btn-black-overlay">Clear Filter</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import VueSimpleRangeSlider from 'vue-simple-range-slider'
import 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css'

export default {
    name: 'ShopSidebar',
    components: {
        VueSimpleRangeSlider
    },
    data() {
        return {
            // Range Slider Data
            range: [5 , 300],
            min: 1,
            max: 5000,
        }
    }
}
</script>