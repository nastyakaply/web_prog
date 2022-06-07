<template>
  <!--intro-->
  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">
            Интернет-магазин
            <br>
            товаров для животных
        </h1>
        <h2 class="intro__subtitle">
          Здесь вы можете приобрести для своего крохи любой товар, будь то игрушка для развлечения,
          корма для питания, ни какого-либо, а полезного для вашего малыша, различные одежки, чтобы вы были самыми модными,
          а также множество других полезных для досуга товаров по доступной цене.
        </h2>
      </div>
    </div>
  </div>

  <div class="container">
      <div class="features">
          <img src="images/cat-animal2.png" width="100" height="100">
            <animal
                :options="options"
                :selected="selected"
                @select="optionSelect"
            />
      </div>
  </div>
<!--    <cart-->
<!--    :cart_data="cart"-->
<!--    />-->
    <div class="container">
        <div class="wrapper">
            <div class="product">
                <catalog
                    v-for="product in filterProducts"
                    :key="product.id"
                    v-bind:catalogs_data="product"
                    @addToCart="addToCart(product)"

                >
                </catalog>
            </div>
        </div>
    </div>
    <div class="reviews">

        <div class="container">

            <div class="reviews__item">
                <div class="reviews__photo">
                    <img class="reviews__img" src="https://sun1-26.userapi.com/s/v1/if2/ZFJcud-D7iGU4C3xVWQOJqeJtmkU6Ql02wJFYGGmrX-jBWZpX9kVvjjrrdwAvW0hA18tnLqufNpw_U67zPUVuxRN.jpg?size=1280x960&quality=96&type=album">
                </div>
                <div class="reviews__content">
                    <div class="reviews__text">"Беззаботные деньки можно проводить,
                        лёжа в кроватке и ни о чем не думая... Ну может только о еде."</div>
                    <div class="reviews__author">Симба</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import animal from "@/components/catalog/animal";
import catalog from "@/components/catalog/catalog";
import axios, {Axios} from 'axios'
export default {
    name: 'HomeView',
    components:{animal, catalog},
    data() {
        return {
            options: [
                {id: 1, title: 'Все', image: 'images/paw-print.png'},
                {id: 2, title: 'Собакам', image: 'images/dog.png'},
                {id: 3, title: 'Кошкам',image: 'images/cat.png'},
                {id: 4, title: 'Грызунам',image: 'images/mouse.png'},
                {id: 5, title: 'Птицам',image: 'images/parrot.png'},
            ],
            catalogs: [],
            selected:'Все',
            sortedProducts:[],
            cart:[]
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
    methods:{
        optionSelect(categories){
            this.sortedProducts = [];
            let vm = this;
            this.selected = categories.title
            this.catalogs.map(function (item){
                if (item.categories === categories.title){
                    vm.sortedProducts.push(item);
                }
            })
        },
        addToCart(product){
            this.cart.push(product)
            console.log(product)
        }
    },
    computed:{
        filterProducts(){
            if (this.sortedProducts.length){
                return this.sortedProducts
            } else{
                return this.catalogs
            }
        },
    }



}
</script>

<style scoped>

.intro__title, .intro__subtitle{

    font-family: montserrat;

}
.features{
    align-items: center;
}
</style>


