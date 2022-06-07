<template>

            <div class="product__item" >
                <img v-bind:src="catalogs_data.image" alt="img">
                <h4 class="product__title">{{catalogs_data.title}}</h4>
                <h5 class="product__subtitle">{{ catalogs_data.subtitle }}</h5>
                <span class="product__price">{{catalogs_data.price}} ₽</span>
                <router-link :to="linkOpen" class="button">Посмотреть</router-link>
                <a to="/cart"
                    class="button"
                    @click="addToCart(catalogs_data)">
                    В корзину
                </a>
            </div>

</template>

<script>
import axios from "axios";
export default {
    name: "catalog",
    components: {},
    props: {
        catalogs_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            count: 0
        }
    },
    computed: {
        linkOpen () {
            return `/tovar/${this.catalogs_data.id}`;
        }
    },
    methods: {

        addToCart(item){
            this.$store.commit('addToCart', item)
        }


    },
    watch: {},
    mounted() {
        // console.log("complete")

    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:wght@700&display=swap');
.button {
    text-decoration: none;
    display: inline-block;
    padding: 0 12px;
    margin: 0 10px;
    background: #cccccc;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 28px;
    transition: .3s ease-in;
}
.button:hover  {
    background: #9f34b0;
    box-shadow: 0 0 10px 0 #75387c;

}
.product__item:hover{
    box-shadow: 0 0 17px 0 #75387c;
    width: 280px;
}
.product__title, .product__price{
    font-family: 'Gentium Plus', serif;
}

</style>
