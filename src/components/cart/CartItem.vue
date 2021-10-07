<template>
    <div class="cart-item">
        <!-- image -->
        <template v-if="cart_item_data.volumeInfo.imageLinks">
            <img :src="cart_item_data.volumeInfo.imageLinks.thumbnail" :alt="cart_item_data.volumeInfo.title" class="v-cart-item__image">
        </template>
        <template v-else>
            <img
            src="https://upittpress.org/wp-content/themes/pittspress/images/no_cover_available.png"
            :alt="cart_item_data.volumeInfo.title"
            class="v-cart-item__image"
            >
        </template>
        <!-- description -->
        <div class="v-cart-item__info">
            <p>{{cart_item_data.volumeInfo.title}}</p>
        </div>
        <!-- price -->
        <div class="price">
            <p>
            {{`${Math.round(cart_item_data.saleInfo.retailPrice.amount)} ${cart_item_data.saleInfo.retailPrice.currencyCode}`}}
            </p>
        </div>
        <!-- quantity -->
        <div class="cart-item__quantity">
            <span @click="decrementItem" class="crement"><i class="material-icons">arrow_left</i></span>
            <span>
               <p>Qty: {{cart_item_data.quantity}} </p>
            </span>
            <span @click="incrementItem" class="crement"><i class="material-icons">arrow_right</i></span>
            
        </div>
        <button @click="deleteFromCart" class="btn"><i class="material-icons">delete_forever</i></button>



        
        
    </div>
</template>

<script>

export default {
    name: 'CartItem',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        },
        decrementItem() {
            this.$emit('decrement')
        },
        incrementItem() {
            this.$emit('increment')
        },
    },
    computed: {},

}
</script>

<style lang="scss">
    .cart-item {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin-bottom: 30px;
        &__image {
        max-width: 100px;
        }
        &__info {
        flex-basis: 25%;
        }
        &__quantity {
            display: flex;
            align-items: center;
            & span + span {
                margin-left: 16px;
            }
        }
        .crement {
            width: 26px;
            height: 26px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 50%;
            background: rgba(38, 174, 104, .6);
        }
    }
   
    
</style>