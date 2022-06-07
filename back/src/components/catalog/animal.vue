<template>
    <div class="v-select">

        <p class="title"

           @click="areOptionVisible =! areOptionVisible"
        >{{ selected }}
        </p>

        <div class="options"
            v-if="areOptionVisible"
            >
            <p
                v-for="option in options"
                :key="option.id"
                @click="selectOption(option)"
                class="options__item"
            >
                <img :src="option.image" width="30" height="30">
                {{option.title}}
            </p>
        </div>

    </div>


</template>

<script>
export default {
    name: "animal",
    props:{
        options:{
            type:Array,
            default(){
                return[]
            }
        },
        selected:{
            type:String,
            default: ''
        }
    },
    data(){
        return{
            areOptionVisible:false
        }
    },
    methods:{
        selectOption(option){
            console.log(option)
            this.$emit('select',option)
            this.areOptionVisible = false
        },
        hideSelect(){
            this.areOptionVisible = false
        }
    },
    mounted() {
        document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.hideSelect)
    }
}
</script>

<style scoped>
    .v-select{
        position: relative;
        width: 200px;
        cursor: pointer;
        text-align: left;
        z-index: 3;
        font-size: 15px;

    }
    .title{
        border: solid 2px #932f91;
        padding: 8px;

    }
    .v-select p{
        margin: 0;
        padding: 8px;

    }

    .options{

        border: solid 2px #932f91;
        background: #FFFFFF;
        position: absolute;
        top: 30px;
        right: 0;
        width: 100%;

    }
    .options__item{
        align-items: center;
        display: flex;
    }
    .options__item img{
        margin-right: 10px;
    }
    .options p:hover{
        background: #e2bee5;
    }

</style>
