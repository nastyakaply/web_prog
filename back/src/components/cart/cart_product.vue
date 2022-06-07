<template>

    <button class="v-cart" @click="showCart">
        <img src="images/shopping-bag.png" width="30" height="30">
<!--        <span class="material-icons">add_shopping_cart</span>-->
        <h1 class="v-cart__title">: {{ $store.state.cartCount }}</h1>
    </button>

    <div v-if="show" class="v-cart__product">
        <div @click="closeCart" class="v-cart__close">
            <i class="material-icons">close</i>
        </div>
        <h1 class="v-cart__show">Корзина:</h1>
        <p
            v-for="item in $store.state.cart"
            :key="item.id"
            class="product-item"


        >
            <span
                class="material-icons"
                title="Удалить из корзины"
                @click.prevent="removeFromCart(item)"
            >delete_outline
            </span>
        {{ item.title }} x{{ item.quantity }} - {{ item.totalPrice }} ₽
        </p>
            <p class="navbar-item" href="">
                К оплате: {{ totalPrice }} ₽
            </p>
        </div>



</template>
<script>
export default {
    name: "cart_product",
    data(){
        return{
            show: false
        }
    },
    computed: {
        totalPrice() {
            let total = 0;

            for (let item of this.$store.state.cart) {
                total += item.totalPrice;
            }

            return total.toFixed(2);
        },
        linkOpen () {
            return `/tovar/${this.catalogs_data.id}`;
        }
    },
    methods:{
        removeFromCart(item) {
            this.$store.commit('removeFromCart', item);
        },
        showCart(){
            this.show = true
        },
        closeCart(){
            this.show = false
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.google.com/icons?selected=Material+Icons");

    .v-cart{
        position: fixed;
        display: flex;
        align-items: center;
        margin: 5px 50px 0;
        border: solid 2px #932f91;
        background: #FFFFFF;
    }
    .material-icons{
        color: #0c5460;
        font-size: 30px;
    }
    .v-cart__title{
        font-size: 18px;
        color: #820e86;
    }
    .v-cart__product{
        padding: 16px;
        position: fixed;
        margin: 50px 50px;
        width: 500px;
        background: #FFFFFF;
        box-shadow: 0 0 17px 0 #0c5460;
    }
    .v-cart__close{
        position: absolute;
        top: 9px;
        right: 15px;
        font-size: 37px;
        color: #d62728;
        cursor: pointer;
    }
    .v-cart__show{
        margin-bottom: 10px;
        margin-right: 37px;
        position: relative;
        color: #0c5460;
    }
    .product-item .material-icons{
        color: red;
        cursor: pointer;
    }
    .navbar-item{
        text-decoration: none;
        color: #0c5460;
        font-size: 15px;
    }
    .product-item{
        display: flex;
        align-items: center;
    }



    .removeBtn {
        margin-right: 1rem;
        color: red;
    }
</style>
