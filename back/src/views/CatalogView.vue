<template>
  <!--intro-->
  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">
          Товары для собак
        </h1>
      </div>
    </div>
  </div>

  <!--    Catalog-->
  <div class="container">
    <div class="catalog">
      <router-link class="catalog__item" to="/catalog_product">
        <img class="catalog__icon" src="images/food1.png" alt="">
        <p>Корм, лакомства</p>
      </router-link>

      <router-link class="catalog__item" to="/catalog_product">
        <img class="catalog__icon" src="images/toy.png" alt="">
        <p>Игрушки, развлечения</p>
      </router-link>

      <router-link class="catalog__item" to="/catalog_product">
        <img class="catalog__icon" src="images/house.png" alt="">
        <p>Лежаки, домики</p>
      </router-link>

      <router-link class="catalog__item" to="/catalog_product">
        <img class="catalog__icon" src="images/clothes.png" alt="">
        <p>Одежда</p>
      </router-link>

      <router-link class="catalog__item" to="/catalog_product">
        <img class="catalog__icon" src="images/care.png" alt="">
        <p>Миски и товары для ухода</p>
      </router-link>
    </div>
  </div>


</template>

<script>
export default {
  name: "CatalogView"
}
</script>

<style scoped>

</style>