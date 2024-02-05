<script>


export default{







}

</script>


<template>

<nav>

    <ul class="logo">
      <li><img src="../../../assets/images/wave.png" title="All Blue" alt="All Blue"></li>
      <li><p>All Blue</p></li>
    </ul>


    <ul>
        <li><router-link to="/login" class="nav-link">Login</router-link></li>
        <li><router-link to="/register" class="nav-link" id="registro">Register</router-link></li>
    </ul>
   
</nav>


</template>


<style scoped>


*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; /* Añadido para dar espacio al contenido */
  background-color: #fff; /* Cambiado para un fondo blanco */
}

nav img {
    width: 200px;
    height: 200px;
}

nav ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    list-style: none;
    margin-right: 20px; /* Añadido margen derecho entre enlaces */
    font-size: 40px;

}



.nav-link{
  color: rgb(0, 0, 0);
  list-style: none;
  text-decoration: none;
  
}
    
#registro {
  padding: 10px 20px; /* Añadido para dar espacio al contenido */
  background-color: rgb(197, 176, 149);
  border-radius: 50px; /* Reducido el radio de la esquina para que sea más redondeado */
  color: #000000; /* Añadido color de texto */
  border: solid 2px #000000;
}

</style>