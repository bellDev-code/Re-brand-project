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
        <section id="Wishlist_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="table_desc">
                            <div class="table_page table-responsive mb-0">
                                <table class="mb-0">
                                    <!-- Start Wishlist Table Head -->
                                    <thead>
                                        <tr>
                                            <th class="product_remove">Remove</th>
                                            <th class="product_thumb">Image</th>
                                            <th class="product_name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product_stock">Stock Status</th>
                                            <th class="product_addcart">Add To Cart</th>
                                        </tr>
                                    </thead> <!-- End Cart Table Head -->
                                    <tbody v-if="productItems.length > 0"> 
                                        <!-- Start Wishlist Single Item-->
                                        <tr v-for="productItem in productItems" :key="productItem.id">
                                            <td class="product_remove"><button @click="removeProductItem(index)" class="bg-transparent remove-btn"><i class="far fa-trash-alt"></i></button></td>

                                            <td class="product_thumb">
                                                <nuxt-link to="/product">
                                                    <img :src="productItem.productImg1" alt="img" />
                                                </nuxt-link>
                                            </td>
                                            <td class="product_name"><nuxt-link to="/product">{{productItem.productTitle}}</nuxt-link></td>
                                            <td class="product-price">${{productItem.totalPrice}}</td>
                                            <td class="product_stock"><h6>In Stock</h6></td>
                                            <td class="product_addcart">
                                                <nuxt-link to="/cart" class="theme-btn-one btn-black-overlay btn_sm" >Add To Cart</nuxt-link>
                                            </td>
                                        </tr> 
                                    </tbody>
                                    <tbody v-else>
                                        <tr><td class="border-0">No Item found!</td></tr>
                                    </tbody>
                                </table>
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
    name: 'wishlist',

    data() {
        return {
            title: 'Wishlist',

            // Product Items Data 
            productItems: [
                {
                    id: 1,
                    productImg1: require('assets/img/product-image/product5.png'),
                    productImg2: require('assets/img/product-image/product2.png'),
                    productTagClass: '',
                    productTag: '',
                    productTitle: 'Black T-Shirt For Woman',
                    productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                    productPrice: 38.50,
                    totalPrice: 180.00,
                    quantity: 1
                },
                {
                    id: 2,
                    productImg1: require('assets/img/product-image/product4.png'),
                    productImg2: require('assets/img/product-image/product4.png'),
                    productTagClass: 'new',
                    productTag: 'new',
                    productTitle: 'T-Shirt Form Girls',
                    productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                    productPrice: 738.50,
                    totalPrice: 130.00,
                    quantity: 1
                },
                {
                    id: 3,
                    productImg1: require('assets/img/product-image/product3.png'),
                    productImg2: require('assets/img/product-image/product6.png'),
                    productTagClass: 'hot',
                    productTag: 'hot',
                    productTitle: 'White Black Line Dress',
                    productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                    productPrice: 50.50,
                    totalPrice: 160.00,
                    quantity: 1
                }
            ],

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Wishlist',
                    to: '/my-account/wishlist'
                }
            ],

        }
    },

    methods: {
        removeProductItem: function (index) {
            this.productItems.splice(index, 1);
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
            content: 'Wishlist page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>

<style>

</style>