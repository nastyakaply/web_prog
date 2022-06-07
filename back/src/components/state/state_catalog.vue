<template>

        <router-link :to="linkOpen" class="articles__block">
            <div class="entry__heading">{{state_data.title}}</div>
            <div itemprop="description">
                {{state_data.subtitle}}
            </div>
            <figure>
                <img class="articles__photo" v-bind:src="state_data.image">
            </figure>
        </router-link>

</template>

<script>

export default {
    name: "state_catalog",
    props:{
        state_data:{
            type: Object,
            default(){
                return{}
            }
        }
    },
    data(){
        return {
        }
    },

    computed: {
        linkOpen () {
            return `/article_text/${this.state_data.id}`;
        }
    },
    methods:{},
    watch:{},
}
</script>

<style scoped>

</style>
