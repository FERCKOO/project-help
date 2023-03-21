<template>
    <div class="users">
        
        <table id="table-users">
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Nombre usuario</th>
                <th>Sucursal</th>
                <th>Acciones</th>
            </tr>
            <tr>
                <td id="user-image"><img id="user-image" src="/images/hawaii.jpg" alt="User image"></td>
                <td id="user-name">Fernando Vazquez</td>
                <td id="user-type">Administrador</td>
                <td id="user-user">Administrador1</td>
                <td id="user-branch">San felipe</td>
                <td id="user-accion">yuggyggyyg</td>
            </tr>
            <tr>
                <td id="user-image"><img id="user-image" src="/images/OP.jpg" alt="User image"></td>
                <td id="user-name">Fernando Vazquez</td>
                <td id="user-type">Administrador</td>
                <td id="user-user">Administrador1</td>
                <td id="user-branch">San felipe</td>
                <td id="user-accion">yuggyggyyg</td>
            </tr>

        </table>

        <button class="btn">Crear usuario</button>
    </div>
</template>

<script>

export default {
    // Falta funcion del boton
}
</script>


<style scoped>
#table-users {
    width: 100%;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 2.5px 3px darkgray;
    border-collapse: collapse;
}

#table-users th,
td {
    justify-content: center;
    align-items: center;
    padding: 1vw;
    padding-inline: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    border-collapse: collapse;
    text-align: center;
}




th {
    color: #757575;
    background-color: #D9E2FF;
}

.users .btn {
    display: flex;
    margin-top: 25px;
    padding-inline: 25px;
    padding-block: 7px;
}
</style>