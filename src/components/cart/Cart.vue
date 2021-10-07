<template>
    <div class="cart">
        <!-- back to home -->
        <router-link :to="{name: 'bookSearch', }">
            
           <div class="link_to_cart"> <i class="material-icons">arrow_back</i>Back to store </div> 
        </router-link>

        <h2>Cart</h2>
        <p v-if="!cart_data.length">There are no books in cart...</p>
        <CartItem 
            v-for="(item, index) in cart_data"
            :key="item.id"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />

        <p>Total price: {{cartTotalCost}} UAH</p>
        <button v-if="this.cart_data.length" @click="submitBooksOrder">Place your order</button>

    </div>
</template>

<script>
import CartItem from './CartItem.vue'
import {mapActions} from 'vuex'

export default {
    name: 'cart',
    components: { 
        CartItem 
    },
    data() {
        return {}            
        
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    methods: {
        ...mapActions([
           'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM',
            "CLEAR_CART_AFTER_SUBMIT"
        ]),
        increment(index) {
            this.INCREMENT_CART_ITEM(index)
        },
        decrement(index) {
            this.DECREMENT_CART_ITEM(index)
        },
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
        isNumber(e) {
            let regex = /[0-9]/
            if(!regex.test(e.key)) {
                e.returnValue = false;
                if (e.preventDefault) e.preventDefault();
            }
        },
        submitCartForm() {
            this.$router.push( {name: 'catalog'});
            this.CLEAR_CART_AFTER_SUBMIT();
        },
        submitBooksOrder() {
            this.$router.push( {name: 'bookSearch'});
            this.CLEAR_CART_AFTER_SUBMIT();
        }
    },
    computed: {
        cartTotalCost() {
            let result = []

            if (this.cart_data.length) {
                for(let item of this.cart_data) {
                    result.push(Math.round(item.saleInfo.retailPrice.amount) * item.quantity)
                }
                result = result.reduce(function(sum, el) {
                    return sum + el
                })
                return result
            } else {
                return 0
            }
        },
    },
    
}
</script>

<style lang="scss">
    .cart {
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
    }
</style>