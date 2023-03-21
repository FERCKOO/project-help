import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/LogIn.vue'
import Principal from '../views/Principal.vue'
import Usuarios from '../views/Usuarios.vue'
import Sucursales from '../views/Sucursales.vue'
import Inscripciones from '../views/Inscripciones.vue'
import ClaseLibre from '../views/Clase-libre.vue'
import ControlPagos from '../views/Control-pagos.vue'
import Calendario from '../views/Calendario.vue'
import Material from '../views/Material.vue'
import Finanzas from '../views/Finanzas.vue'
import Reportes from '../views/Reportes.vue'
import Configuracion from '../views/Configuracion.vue'

const routes = [
    {
        path: '/login', 
        name: 'login', 
        component: Login
    },
    {
        path: '/principal', 
        name: 'principal',
        component: Principal,
    },
    {
        path: '/usuarios', 
        name: 'Usuarios', 
        component: Usuarios
    },
    {
        path: '/sucursales',
        name: 'Sucursales',
        component: Sucursales
    },
    {
        path: '/inscripciones',
        name: 'Inscripciones',
        component: Inscripciones
    },
    {
        path: '/clase-libre',
        name: 'Clase libre',
        component: ClaseLibre
    },
    {
        path: '/Control-pagos',
        name: 'Control pagos',
        component: ControlPagos
    },
    {
        path: '/calendario',
        name: 'Calendario',
        component: Calendario
    },
    {
        path: '/material',
        name: 'Material',
        component: Material
    },
    {
        path: '/finanzas',
        name: 'Finanzas',
        component: Finanzas
    },
    {
        path: '/reportes',
        name: 'Reportes',
        component: Reportes
    },
    {
        path: '/configuracion',
        name: 'Configuracion',
        component: Configuracion
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router