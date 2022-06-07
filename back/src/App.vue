<template>
  <div id="app">
    <!--header-->
    <header class="header">
      <div class="container">

        <div class="header__inner">
          <div class="header__logo" >
            <router-link to="/"><img src="images/logotip.png" width="300">
            </router-link>
          </div>

<!--            <cart :cart_data="cart"/>-->
          <nav class="nav">
            <router-link class="nav__link" to="/about">
              <img src="images/kitty.png" width="30" height="30">
              О нас
            </router-link>
            <router-link class="nav__link" to="/articles">
              <img src="images/open-book.png" width="30" height="30">
              Статьи
            </router-link>
              <sign
                v-if="isSign"
                @closeSign="closeIsSign"
              />
              <button class="nav__link" @click="showSign" >
                  <img src="images/man.png" width="30" height="30">
                  Вход
              </button>
          </nav>
            <nav class="burger">
                <transition name="fade" mode="out-in">
                    <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu">menu</i>
                    <i class="material-icons clear" v-else @click="show = !show" key="clear">clear</i>
                </transition>
                <transition name="fade">
                    <ul v-if="show">
<!--                        <li v-for="item in items">{{ item }}</li>-->

                            <router-link class="burger-str" to="/">
                                Главная
                            </router-link>
                            <router-link class="burger-str" to="/about">
                                О нас
                            </router-link>
                            <router-link class="burger-str" to="/articles">
                                Статьи
                            </router-link>
                            <sign
                                v-if="isSign"
                                @closeSign="closeIsSign"
                            />
                            <button class="burger-str" @click="showSign" >
                                Вход
                            </button>

                    </ul>
                </transition>
            </nav>

<!--          <button class="burger" type="button">-->
<!--            <span class="burger__item">Menu</span>-->
<!--          </button>-->
        </div>
      </div>
        <cart_product/>
    </header>
    <main>

      <router-view/>

    </main>
      <!--Footer-->
    <footer class="footer">
      <div class="container">

        <div class="footer__inner">
          <div class="footer__block">
            <h4 class="footer__title">Находимся:</h4>
            <address class="footer__address"> <p> г. Белгород, ул. Костюкова,46</p></address>
          </div>

          <div class="footer__block">
            <h4 class="footer__title">Контакты:</h4>
            <div class="footer__contact">
              <div>+7 (800) 535 45 31</div>
              <div>+7 (800) 536 80 02</div>
            </div>
          </div>

        </div>
      </div>

      <div class="copyright">
        <div class="container">
          <div class="copyright__text">
            <div>© 2022 SimbaLife</div>
            <div>Made witn by Nastya Mishina</div>
          </div>
        </div>

      </div>
    </footer>



  </div>
</template>
<script>
import sign from "@/components/sign";
import Cart_product from "@/components/cart/cart_product";
export default {
    name: 'App',
    components:{Cart_product, sign},
    data(){
        return{
            items:[
                'Главная','О нас', 'Статьи', 'Вход'
            ],
            show: false,
            isSign: false,
            cart:[]
        }
    },
    methods:{
        showSign(){
            this.isSign = true
        },
        closeIsSign(){
            this.isSign = false
        },
        showBurgerSign(){
            this.isSign = true
        }

    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:wght@700&display=swap');
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

    div,p,h,h1,h2,h3, h4, button, main{
        /*font-family: 'Gentium Plus', serif;*/
        font-family: Roboto,sans-serif;
    }
    .burger{
        margin-left: 20px;
    }
    ul{
        align-self: flex-start;
        margin: 0;
        padding: 0;
        position: absolute;

    }
    .fade-enter-active,
    .fade-leave-active{
        transition: opacity .3s ease;
    }
    .fade-enter,
    .fade-leave-to{
        opacity: 0;
    }
    .menu, .clear{
        cursor: pointer;
        font-size: 3em;
        padding-left: 5%;
        transition: all .3s ease;
        width: 1.5em;
        color: #ffffff;
    }

    .burger-str{
        padding-left: 10px;
        text-transform: uppercase;
        text-decoration: none;
        color: #ffffff;

    }
    .nav__link{
        font-family: Roboto,sans-serif;
    }

    @media (max-width: 299px)  {
        .burger-str{
            font-size: 10px;
        }
        .menu, .clear{
            font-size: 2em;
        }
    }
    button{
        background: none;
        border: none;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 700;
        padding: 0;
        cursor: pointer;
    }

</style>


