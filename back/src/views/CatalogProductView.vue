<template>
  <!--intro-->
  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">
          Товары для питания
        </h1>
        <h4>Другие товары:</h4>



        <!--                <a class="btn btn&#45;&#45;red" href="#"><img src="images/button.png" width="100" height="100"></a>-->
        <!--                <button class="btn btn&#45;&#45;red" type="button">Начать скорее :)</button>-->
      </div>
      <nav>
        <router-link class="intro__nav" to="/catalog_product">Игрушки</router-link>
        <router-link class="intro__nav" to="/catalog_product">Лежаки, домики</router-link>
        <router-link class="intro__nav" to="/catalog_product">Одежда</router-link>
        <router-link class="intro__nav" to="/catalog_product">Миски и товары для ухода</router-link>
      </nav>
    </div>
  </div>

  <main>
    <div class="container">
      <div class="wrapper">

        <div class="product">

          <div class="product__item"  >
            <img src="images/product_dog/food/rustic%20sticks.jpg">
            <h4 class="product__title">Деревенские лакомства</h4>
            <h5 class="product__subtitle">Мясные колбаски для взрослых собак всех пород</h5>
            <span class="product__price">142 ₽</span>
            <!--                        <a href="dog/food/tovar1.html" class="button">Посмотреть</a>-->
            <router-link to="/product" class="product__button">Посмотреть</router-link>
          </div>

          <div class="product__item">
            <img src="images/product_dog/food/Pro%20Plan%20Duo%20Delice.png">
            <h4 class="product__title">Pro Plan Duo Delice</h4>
            <h5 class="product__subtitle">Сухой корм для взрослых собак всех пород с говядиной</h5>
            <span class="product__price">1 196 ₽</span>
            <router-link to="/product" class="product__button">Посмотреть</router-link>
          </div>

          <div class="product__item">
            <img src="images/product_dog/food/Grandorf%20Lamb%20&%20Rice%20Junior%20All%20Breeds.jpg">
            <h4 class="product__title">Grandorf Lamb & Rice Junior All Breeds</h4>
            <h5 class="product__subtitle">Сухой корм для щенков всех пород</h5>
            <span class="product__price">2 110 ₽</span>
            <router-link to="/product" class="product__button">Посмотреть</router-link>
          </div>

          <div class="product__item">
            <img src="images/product_dog/food/Pronature%20Original%20NEW.jpg">
            <h4 class="product__title">Pronature Original NEW</h4>
            <h5 class="product__subtitle">Сухой корм для взрослых собак всех пород с ягненком</h5>
            <span class="product__price">299 ₽</span>
            <router-link to="/product" class="product__button">Посмотреть</router-link>
          </div>

          <div class="product__item">
            <img src="images/product_dog/food/Royal%20Canin%20Recovery.png">
            <h4 class="product__title">Royal Canin Recovery</h4>
            <h5 class="product__subtitle">Влажный лечебный корм для кошек и собак</h5>
            <span class="product__price">452 ₽</span>
            <router-link to="/product" class="product__button">Посмотреть</router-link>

          </div>

          <div class="product__item">
            <img src="images/product_dog/food/Pronature%20Life%20Chill.jpg">
            <h4 class="product__title">Pronature Life Chill</h4>
            <h5 class="product__subtitle">Сухой корм для собак и щенков</h5>
            <span class="product__price">678 ₽</span>
            <router-link to="/product" class="product__button">Посмотреть</router-link>

          </div>
        </div>
      </div>


    </div>
  </main>

</template>

<script>
export default {
  name: "CatalogProductView"
}
</script>

<style scoped>

</style>