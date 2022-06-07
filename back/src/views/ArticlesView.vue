<template>
  <!--intro-->
  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">
            <img src="images/cat-animal.png" width="70" height="70">
          Статьи
        </h1>
      </div>
    </div>
  </div>

  <div class="articles">
    <div class="articles__item">
        <state_catalog
            v-for="state in articles"
            :key="state.id"
            v-bind:state_data="state"
        />
    </div>

  </div>
</template>

<script>
import state_catalog from "@/components/state/state_catalog";
import axios from "axios";
export default {
  name: "ArticlesView",
    components:{state_catalog},
    data(){
        return {
            articles: []
            // states: [
            //     {
            //         id: 1,
            //         title:'Чем кормить шиншилу в домашних условиях',
            //         subtitle: 'В статье мы рассмотрим питание шиншилл в домашних условиях, что можно и что нельзя давать животному, особеннос...',
            //         image: "https://lemurrr.ru/medias/sys_master/images/h53/hd8/8904165228574.jpg"
            //     },
            //     {
            //         id: 2,
            //         title:'Что такое когтерезка для кошек и как ей пользоваться',
            //         subtitle: 'Чтобы исключить порчу имущества в доме, можно приобрести специальный аксессуар для аккуратного срезания кошачь...',
            //         image: "https://lemurrr.ru/medias/sys_master/images/h47/h90/8900820074526.png"
            //     },
            // ],
        }
    },
    created() {
        // api
        this.id = this.$route.params.id
        axios.get('http://localhost:3000/article ')
            .then((response) => this.articles = response.data)
            .catch((error) => {
                console.log(error);
            })

    },
}
</script>

<style scoped>
.intro{
    height: 250px;
}
.intro__title img{
    margin: 15px 0 0;

}

</style>
