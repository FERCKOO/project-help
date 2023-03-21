<template>
    <div class="login">

        <div class="form">

            <h2>BIENVENIDO</h2>

            <h3>Para ingresar primero inicie sesion.</h3>

            <input v-model="username" name="username" type="text" class="input" placeholder="Username">

            <input v-model="password" name="password" type="password" class="input" placeholder="Password">

            <button @click="login" class="btn">INICIAR SESION</button>

        </div>

        <div class="image"></div>

    </div>

    <!-- <footer readonly>2023 ◦ Vortech</footer> -->

</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {

    setup() {
        const username = ref('')
        const password = ref('')
        const router = useRouter()
        const route = useRoute()

        const login = () => {

            // console.log(username);

            const redirectPath = route.query.redirect || '/principal'
            router.push(redirectPath)
        }
        return { username, password, login }
    }
}
</script>


<style scoped>

</style>