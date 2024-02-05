<script>

import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import Carrusel from "../components/Carrusel.vue"

export default{

components:{Navbar,Footer,Carrusel}





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

    <section class="contendor_cards">

        <div>

            <img src="" alt="">
            <div>
                <p><a href=""></a></p>
            </div>

        </div>


        <div>

            <img src="" alt="">
            <div>
                <p><a href=""></a></p>
            </div>

        </div>


        <div>

            <img src="" alt="">
            <div>
                <p><a href=""></a></p>
            </div>

        </div>


        <div>

            <img src="" alt="">
            <div>
                <p><a href=""></a></p>
            </div>

        </div>

    </section>

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
    
}

.contenedor_buscador input{
    background-color: rgba(42, 161, 185, 1);
    width: 500px;
    height: 50px;
    border-radius: 25px; 
    border: none;
    font-size: 20px;
    outline: none;
}
ZZZ

.contenedor_categorias{
    display: flex;
    padding: 50px;
    width: 1092px;
    margin: auto;
}

.contenedor_categorias ul{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    list-style: none;
    border-top: 1px solid #000000; 
    border-bottom: 1px solid #000000; 
    border-left: none; 
    border-right: none;
    font-size: 20px; 
    height: 150px;
}

.contenedor_cards{
    display: flex;
}



</style>