<template>
    <div class="popups__inner ">
        <div class="popup login__popup">
            <a class="close__popup">
                <i
                    class="material-icons"
                    @click="closeSign"
                >close
                </i>
            </a>

            <div class="registration__choice">
                <h1 class="login">Вход</h1>
<!--                <a class="signin">Зарегистрироваться</a>-->
            </div>

            <form class="form__login">
                <input type="text" name="name" placeholder="Логин" v-model="login">
                <div class="error text-danger">{{ errors.login }}</div>
                <input type="password" name="name" placeholder="Пароль" v-model="password">
                <div class="error text-danger">{{ errors.password }}</div>
                <input type="submit"  value="Войти">
            </form>
<!--            <form class="form__signin">-->
<!--                <input type="text" name="name" placeholder="Логин">-->
<!--                <input type="password" name="name" placeholder="Пароль">-->
<!--                <input type="text" name="name" placeholder="Подтверждение пароля">-->
<!--                <input type="submit"  value="Зарегистрироваться">-->
<!--            </form>-->
        </div>
    </div>
</template>

<script>
export default {
    name: "sign",
    data(){
        return{
            login: "",
            password: "",
            errors: {
                login: "",
                password: ""
            }
        }

    },
    methods:{
        closeSign(event){
            this.$emit('closeSign')
        },
        signIn(){
            this.errors.login = ""
            this.errors.password = ""

            if (this.login.trim().length === 0) {
                this.errors.login = "Заполните пароль"
            }
            // если ошибок нет, то сохраняем пользователя в localStorage.
            if (this.errors.login.length === 0 && this.errors.password.length === 0) {
                // send request
                const user = {
                    login: this.login,
                    password: this.password
                }
                localStorage.setItem('user', JSON.stringify(user));
                location.href = '/'
            }

            event.preventDefault()
        }
    }
}
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");




</style>
