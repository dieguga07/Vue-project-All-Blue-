<script>

import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import Carrusel from "../components/Carrusel.vue"
import Cart from "../components/Cart.vue"

export default{

components:{Navbar,Footer,Carrusel,Cart}





}

</script>


<template>

<Navbar></Navbar>

<main>

    <Carrusel></Carrusel>

    
    <section class="contenedor_buscador">
        <form>
            <input type="search">
        </form>
    </section>

    <section class="contenedor_categorias">
        <ul>
            <li>Furniture</li>
            <li>Technology</li>
            <li>Footwear</li>
            <li>Clothes</li>
            <li>Accessories</li>
        </ul>
    </section>

   <Cart></Cart>

</main>

<Footer></Footer>
  
</template>


<style scoped>

*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}

main{
    background-color:rgba(197, 176, 149, 1) ;
}


.contenedor_buscador{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    
}

.contenedor_buscador input{
    background-color: rgba(42, 161, 185, 1);
    min-width: 450px;
    height: 50px;
    border-radius: 25px; 
    border: none;
    font-size: 20px;
    outline: none;
}


.contenedor_categorias{
    
    width: 100%;
    padding-top: 3vh;
}

.contenedor_categorias ul{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    width: 70vw;
    list-style: none;
    border-top: 1px solid #000000; 
    border-bottom: 1px solid #000000; 
    border-left: none; 
    border-right: none;
    font-size: 20px; 
    height: 100px;
    margin:  0 auto;
}





</style>