<template>
    <div class="principal" id="main">
        <the-navigation id="side-bar" style="display:none"></the-navigation>

        <div class="page">
            <div class="header">

                <button id="openNav" class="button teal xlarge" onclick="open()">
                    &#9776;
                </button>

                <div class="header-name">
                    <!-- Nombre de la pagina actual -->
                    {{ this.$route.name }}

                </div>
                <img id="user-image" src="/images/hawaii.jpg" alt="User image">
            </div>


            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue'

export default {
    components: {
        TheNavigation
    },
    methods: {
        open() {
            document.getElementById("main").style.marginLeft = "25%";
            // document.getElementById("side-bar").style.width = "25%";
            document.getElementById("side-bar").style.display = "block";
            document.getElementById("openNav").style.display = 'none';
        },
    }
}
</script>

<style scoped>
.principal {
    width: 100%;
    height: 100%;
}

.header {
    overflow: auto;
    top: 0;
    left: 11%;
    right: 0;
    padding: 5px;
    background-color: #FFC107;
    color: white;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    display: flex;
    flex-direction: row;
}
</style>