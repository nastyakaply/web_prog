<template>
  <!--intro-->
  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">
          Статья: {{ article.title }}
        </h1>
      </div>
    </div>
  </div>

  <div class="article">
    <figure>
      <img class="article__photo" :src="article.image">
    </figure>
    <div class="article__body">
        <p>{{article.text1}}</p>

      <h2>{{ article.subtitle2 }}</h2>
      <p>{{article.text2}}</p>

      <h2>{{ article.subtitle3 }}</h2>
      <p>{{article.text3}}</p>

      <p><strong>{{ article.subtitle3_1 }}</strong></p>

      <ol> <li>{{article.text3_1_1}}</li>
        <li>{{article.text3_1_2}}</li>
        <li>{{article.text3_1_3}}</li>
        <li>{{article.text3_1_4}}</li>
      </ol>

      <h3>{{ article.subtitle4 }}</h3>
        <p>{{article.text4}}</p>

      <h3>{{ article.subtitle5 }}</h3>
      <p>{{article.text5}}</p>

    </div>
    <router-link to="/articles" class="btn__back">Вернуться к списку статей</router-link>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ArticleTextView",
    data(){
        return {
            articles: []
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
    computed: {
        article(){
            let result = {};
            let idN = {};
            idN = parseInt(this.id)
            // console.log(idN)
            let vm = this;
            this.articles.map(function (item){
                // console.log(item.id)
                if (item.id === idN){
                    result = item;
                    // console.log("true")
                }
            })
            return result
        }
    },

}
</script>

<style scoped>

</style>
