<script>

export default{








}
</script>


<template>

<header>

    <nav>

        <ul>
            <li><img src="../assets/images/wave.png" title="All Blue" alt="All Blue"></li>
        </ul>

        <ul>
            <li><router-link to="/user" class="nav-link">User</router-link></li>

            <li class="seleccionado"><router-link to="/products" class="nav-link">Products</router-link></li>

            <li><router-link to="/" class="nav-link">Logout</router-link></li>
        </ul>

        <ul>
            <li id="luna"><a href=""><img src="../assets/images/luna.png" alt="Cambiar modo" title="Cambiar modo" ></a></li>
        </ul>

    </nav>

</header>

</template>


<style scoped> 

*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}

nav {
    font-size: 20px;
    display: flex;
    background-color: rgb(9, 64, 84); 
    color: white;
    perspective: 2000px;
    transform-style: preserve-3d;
    height: 5rem;
    border-top: none; 
    border-bottom: 1px solid #000000; 
    border-left: none; 
    border-right: none;
}

nav ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    list-style: none;
}

nav img {
    width: 50px;
    height: 50px;
}

nav ul a {
    color: white;
    text-decoration: none;
}

#luna img {
    width: 40px;
    height: 40px;
}

.seleccionado a{
    color: rgb(197, 176, 149);
}

</style>