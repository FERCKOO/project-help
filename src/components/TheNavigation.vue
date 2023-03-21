<template>
    <div class="nav bar-block card animate-left" >
        
        <button 
        id="openNav" 
        class="bar-item button large" 
        onclick="close()">
            Close &times;
        </button>

        <div class="user-data">
            <p>Administrador</p>
            <p>San Felipe</p>
        </div>


        <router-link to="/usuarios">Usuarios</router-link>
        <router-link to="/sucursales">Sucursales</router-link>
        <router-link to="/inscripciones">Inscripciones</router-link>
        <router-link to="/clase-Libre">Clase libre</router-link>
        <router-link to="/control-Pagos">Control de pagos</router-link>
        <router-link to="/calendario">Calendario</router-link>
        <router-link to="/material">Material</router-link>
        <router-link to="/finanzas">Finanzas</router-link>
        <router-link to="/reportes">Reportes</router-link>
        <router-link to="/configuracion">Configuracion</router-link>
    </div>
</template>

<script>
// export default {
//     methods: {
//         close() {
//             document.getElementById("main").style.marginLeft = "0%";
//             document.getElementById("side-bar").style.display = "none";
//             document.getElementById("openNav").style.display = "inline-block";
//         }
//     }
// }
</script>