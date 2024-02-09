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

    <Cart></Cart>

    <section class="contenedor_buscador">
        <form>
            <input type="search">
        </form>
    </section>    

    <section class="contenedor_categorias">
        <ul>
            <li><a>Furniture</a></li>
            <li><a>Technology</a></li>
            <li><a>Footwear</a></li>
            <li><a>Clothes</a></li>
            <li><a>Accessories</a></li>
        </ul>
    </section>


    <section class="contenedor-cards">
        <div class="cards">
           
                <div class="card">

                    <img src="../../../assets/images/A23_5G.webp" alt="">

                    <div class="card-title">
                        <p> Galaxy A23 5G</p>
                    </div>
                    

                    <div class="card-btn">
                        <p>500€</p>
                        <a > <img src="../../../assets/images/add.png" alt=""></a>
                    </div>
                </div>
           
            


                <div class="card">

                    <img src="../../../assets/images/iPhone_15_Pro.avif" alt="">

                    <div class="card-title">
                        <p>iPhone 15 Pro</p>
                    </div>


                    <div class="card-btn">
                        <p>500€</p>
                        <a > <img src="../../../assets/images/add.png" alt=""></a>
                    </div>
                </div>


                <div class="card">

                    <img src="../../../assets/images/xiaomi-redmi-note-11-4g.jpg" alt="">

                    <div class="card-title">
                        <p>Xiaomi 11 4G</p>
                    </div>


                    <div class="card-btn">
                        <p>500€</p>
                        <a > <img src="../../../assets/images/add.png" alt=""></a>
                    </div>
                </div>


                <div class="card">

                    <img src="../../../assets/images/A23_5G.webp" alt="">

                    <div class="card-title">
                        <p>Hola mundo</p>
                    </div>


                    <div class="card-btn">
                        <p>500€</p>
                        <a > <img src="../../../assets/images/add.png" alt=""></a>
                    </div>
                </div>



                <div class="card">

                    <img src="../../../assets/images/A23_5G.webp" alt="">

                    <div class="card-title">
                        <p>Hola mundo</p>
                    </div>


                    <div class="card-btn">
                        <p>500€</p>
                        <a > <img src="../../../assets/images/add.png" alt=""></a>
                    </div>
                </div>



                <div class="card">

                    <img src="../../../assets/images/A23_5G.webp" alt="">

                    <div class="card-title">
                        <p>Hola mundo</p>
                    </div>


                    <div class="card-btn">
                        <p>500€</p>
                        <a > <img src="../../../assets/images/add.png" alt=""></a>
                    </div>
                </div>


                <div class="card">

                    <img src="../../../assets/images/A23_5G.webp" alt="">

                    <div class="card-title">
                        <p>Hola mundo</p>
                    </div>


                    <div class="card-btn">
                        <p>500€</p>
                        <a > <img src="../../../assets/images/add.png" alt=""></a>
                    </div>
                </div>


                <div class="card">

                    <img src="../../../assets/images/A23_5G.webp" alt="">

                    <div class="card-title">
                        <p>Hola mundo</p>
                    </div>


                    <div class="card-btn">
                        <p>500€</p>
                        <a > <img src="../../../assets/images/add.png" alt=""></a>
                    </div>
                </div>
            
        </div>
    </section>
  

</main>

<Footer></Footer>
  
</template>


<style scoped>



main{
    background-color:rgba(197, 176, 149, 1) ;
}


.contenedor_buscador{

    width: fit-content;
    margin: 0 auto;
    
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

.contenedor-cards {
    display: grid;
    grid-template-columns: 1fr;
    
 
}

.card {
    width: 300px; 
    height: 500px;
    background-color: white;
    border-radius: 50px;
}

.card img{
    width: 100%;
    height: 60%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    
}


.card-title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3vh;
    width: 100%;
    height: 20%;
    
}



.card-btn{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    background-color: rgba(42, 161, 185, 1);
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    font-size: 3vh;
   
    
}

.cards {
    display: grid;
    justify-content: center;
    justify-items:center;
    padding-top: 50px;
    padding-bottom: 200px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 100px;
    margin-left: 150px;
    margin-right: 150px;
   
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