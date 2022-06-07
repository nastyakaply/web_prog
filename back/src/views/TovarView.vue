<template>

    <div class="intro">
        <div class="container">
            <div class="intro__inner">
            </div>
        </div>
    </div>
    <div class="good">
        <div class="good__item">
            <img class="good__photo" :src="product.image">
            <div class="good__body">

                <h2 class="good__title"></h2>
                <h1>{{product.title}}</h1>
                <p>{{product.text}}</p>
                <span class="good__price">{{product.price}} ₽</span>
                <a  to="/cart" class="good__button" @click="addToCart(product)"> В корзину </a>

            </div>
        </div>

    </div>
</template>

<script>
import axios, {Axios} from 'axios'
export default {
    name: 'TovarView',
    components:{
    },
    props:{

    },
    data(){
        return{
            catalogs: [],

        }
    },
    created() {
        // api
        this.id = this.$route.params.id
        axios.get('http://localhost:3000/catalogs')
            .then((response) => this.catalogs = response.data)
            .catch((error) => {
                console.log(error);
            })

    },
    computed: {
        product(){
            let result = {};
            let idN = {};
            idN = parseInt(this.id)
            let vm = this;
            this.catalogs.map(function (item){
                if (item.id === idN){
                    result = item;
                }
            })
            return result
        }
    },
    methods:{
        sendDataToParent(){
            this.$emit('sendArticle', this.$route.params.id)
        },
        addToCart(item){
            this.$store.commit('addToCart', item)
        }


    },

}
</script>
<style scoped>
.intro{
    height: 150px;
}
.good{
    margin-right: 10%;
    margin-left: 10%;
}
</style>
