<script>

import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import Carrusel from "../components/Carrusel.vue"
import Cart from "../components/Cart.vue"

export default{

components:{Navbar,Footer,Carrusel,Cart},

data() {
    return {
        products: [],
        loader:true,
        cartProducts : []
    }
},
mounted(){
    this.getProducts()
},

methods:{
    async getProducts() {
            try {
                const respuesta = await fetch("http://localhost:8000/api/products")
                const data = await respuesta.json()
                this.products = data
            } catch (error) {
                console.error("Error al obtener los productos:", error)
            } finally {
                this.loader = false
            }
        },

        addFavourite(name,price,image,id) {
            
            const product = {
                Pname : name,
                Pprice: price,
                Pimage: image,
                Pid:id,
                Pcantidad:1,
            }

            if(!this.cartProducts.some(Newproduct => Newproduct.Pid === product.Pid)){
                this.cartProducts.push(product)
            }
            
            
        },

        vaciarCart(){

            this.cartProducts = []

        },

        deleteProduct(deleteId){
        this.cartProducts = this.cartProducts.filter((product) => product.Pid !== deleteId);
        }


    },




}

</script>


<template>

<Navbar></Navbar>

<main>

    <Carrusel></Carrusel>

    

    <section class="contenedor_buscador">
      <form>
        <div class="search-container">
          <img src="../../../assets/images/lupa.png" alt="search" class="contenedor_buscador_img">
          <input type="search" placeholder=" Search....">
        </div>
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
    
        <div class="card" v-for="product in products" :key="product.id">
            
            <img class="card-img" :src="product.image ? product.image  : 'https://cdn.icon-icons.com/icons2/3001/PNG/512/default_filetype_file_empty_document_icon_187718.png'" :alt="product.name">

            <div class="card-title">
                <p>{{ product.name }}</p>
            </div>
            <div class="card-btn">
                <p>{{ product.price }} €</p>
                <a @click="addFavourite(product.name,product.price,product.image,product.id)"> <img src="../../../assets/images/add.png" alt="Add to cart"></a>
            </div>
        </div>

    </section>

    <Cart :cartProducts="cartProducts"  @vaciarCart = "vaciarCart" @deleteProduct = "deleteProduct"></Cart>

</main>

<Footer></Footer>
  
</template>


<style scoped>



main{
    background-color:rgba(197, 176, 149, 1) ;
}


.contenedor_buscador {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .contenedor_buscador form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }

  .search-container {
    position: relative;
    
  }

  .contenedor_buscador_img {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 20px; 
    height: 20px;
    cursor: pointer; 
  }

  input[type="search"] {
    background-color: rgba(42, 161, 185, 1);
    width: 70vw;
    height: 50px;
    border-radius: 18px; 
    border: none;
    font-size: 20px;
    outline: none;
    color: black;
    padding-left: 40px; 
  }

.contenedor-cards {
    display: grid;
    justify-content: center;
    justify-items:center;
    padding-top: 50px;
    padding-bottom: 200px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 100px;
    margin: 0 150px;

 
}

.card {
    min-width: 250px; 
    min-height: 400px;
    background-color: white;
    border-radius: 50px;
}

.card-img{
    width: 100%;
    height: 60%;
    padding: 20px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
}


.card-title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:30px;
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
    font-size: 30px;
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


@media screen and (max-width:616px) {
    a{
        font-size: 15px;
    }
}


@media screen and (max-width:480px) {
    
   .contenedor_categorias ul{
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    font-size: 30px;
   }    

}

@media screen and (max-width:400px){
    
  
  

}

 

</style>