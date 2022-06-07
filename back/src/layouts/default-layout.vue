<template>
    <div class="default-layout">
        <a @click="logout" class="nav-link" v-show="user !== null">Иван И.</a>
    </div>
</template>

<script>
export default {
  name: "default-lauout",
    data() {
        return {
            user: null
        }
    },
    created() {
        this.user = JSON.parse(localStorage.getItem('user'))
    },
    methods: {
        logout(event) {
            localStorage.removeItem('user')
            location.reload()
            event.preventDefault()
        }
    }
}
</script>

<style scoped>

</style>
