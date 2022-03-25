<template>
  <!--intro-->
  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">
          Статьи
        </h1>

      </div>
    </div>
  </div>


  <div class="articles">
    <div class="articles__item">
      <router-link to="/article_text" class="articles__block">
        <div class="entry__heading">Чем кормить шиншилу в домашних условиях</div>
        <div itemprop="description">
          "В статье мы рассмотрим питание шиншилл в домашних условиях, что можно и что нельзя давать животному, особеннос..."
        </div>
        <figure>
          <img class="articles__photo" src="https://lemurrr.ru/medias/sys_master/images/h53/hd8/8904165228574.jpg">
        </figure>
      </router-link>

      <router-link to="/article_text" class="articles__block">
        <div class="entry__heading">Что такое когтерезка для кошек и как ей пользоваться</div>
        <div itemprop="description">
          "Чтобы исключить порчу имущества в доме, можно приобрести специальный аксессуар для аккуратного срезания кошачь..."
        </div>
        <figure>
          <img class="articles__photo" src="https://lemurrr.ru/medias/sys_master/images/h47/h90/8900820074526.png">
        </figure>
      </router-link>
      <router-link to="/article_text" class="articles__block">
        <div class="entry__heading">Как подобрать хороший лоток-туалет для кошки </div>
        <div itemprop="description">
          "В статье мы рассмотрим, какие бывают лотки для кошек, на что обратить внимание при выборе подходящего кошачьег..."
        </div>
        <figure>
          <img class="articles__photo" src="https://lemurrr.ru/medias/sys_master/images/h33/h48/8895449464862.jpg">
        </figure>
      </router-link>
      <router-link to="/article_text" class="articles__block">
        <div class="entry__heading">Какие прививки нужно делать собакам и в каком возрасте </div>
        <div itemprop="description">
          "В статье мы рассмотрим важность прививок для собак, от каких заболеваний они защищают, виды препаратов и схемы..."
        </div>
        <figure>
          <img class="articles__photo" src="https://lemurrr.ru/medias/sys_master/images/he9/hc4/8904424882206.jpg">
        </figure>
      </router-link>



    </div>

  </div>
</template>

<script>
export default {
  name: "ArticlesView"
}
</script>

<style scoped>

</style>