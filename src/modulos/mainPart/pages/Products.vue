<script>

import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import Carrusel from "../components/Carrusel.vue"
import Cart from "../components/Cart.vue"
import { DarkMode } from "@/stores/DarkMode"
import { UserContext } from "@/stores/UserContext"


export default{

components:{Navbar,Footer,Carrusel,Cart},

data() {
    return {
        products: [],
        loader:true,
        cartProducts: Array,
        page:1,
        lastPage:false,
        url:`http://localhost:8000/api/products?page=${this.page}`,
        category: "main",
        userSearch:"",
        dark:DarkMode(),
        showModal:false
    }
},
mounted(){
    this.getProducts(this.url)
},

created() {
    const userStore =UserContext()
    this.cartProducts = userStore.cart 
},

methods:{
    async getProducts(urlActive){
            try{
                const respuesta = await fetch(`${urlActive}`)
                const data = await respuesta.json()
                this.products = data.data
                if(data.next_page_url === null){
                    this.lastPage = true
                }else{
                    this.lastPage = false
                }

            }catch (error){
                console.error("Error al obtener los productos:", error)
            }finally{
                this.loader = false
            }
        },

        addFavourite(name,price,image,id){

            const product = {
                Pname : name,
                Pprice: price,
                Pimage: image,
                Pid:id,
                Pcantidad:1,
            }

            if(!this.cartProducts.some(Newproduct => Newproduct.Pid === product.Pid)){
                this.cartProducts.push(product)
                this.updateLocalStorageCart()
                this.openModal()
            }


        },

        updateLocalStorageCart(){
            const userStore = UserContext()
            userStore.cart = this.cartProducts
        },



        vaciarCart(){

            this.cartProducts = []

        },

        deleteProduct(deleteId){
        this.cartProducts = this.cartProducts.filter((product) => product.Pid !== deleteId)
        this.updateLocalStorageCart()
        },

        async nextPage(category) {
            if (!this.lastPage && this.category !== "search") {
                this.page += 1;
                const nextPageUrl = category === "main" ? `http://localhost:8000/api/products?page=${this.page}` : `http://localhost:8000/api/products/${category}?page=${this.page}`
                await this.getProducts(nextPageUrl)
            } else if ( !this.lastPage && this.category === "search") {
                this.page += 1;
                const searchUrl = `http://localhost:8000/api/products/search?variable=${this.userSearch}&page=${this.page}`
                await this.getProducts(searchUrl)
            }
        },

        async previousPage(category) {
            if (this.page !== 1 && this.category !== "search") {
                this.page -= 1
                const previousPageUrl = category === 'main' ? `http://localhost:8000/api/products?page=${this.page}` : `http://localhost:8000/api/products/${category}?page=${this.page}`
                await this.getProducts(previousPageUrl)
            } else if (this.page !== 1 && this.category === "search") {
                this.page -= 1
                const searchUrl = `http://localhost:8000/api/products/search?variable=${this.userSearch}&page=${this.page}`
                await this.getProducts(searchUrl);
            }
        },

        async furnituresCategory(){
            this.page = 1
            this.category = "furnitures"
            const furnitureUrl = `http://localhost:8000/api/products/furnitures?page=${this.page}`
            await this.getProducts(furnitureUrl)
        },

        async technologyCategory(){
            this.page = 1
            this.category = "technology"
            const technologyUrl = `http://localhost:8000/api/products/technology?page=${this.page}`
            await this.getProducts(technologyUrl)
        },

        async footwearCategory(){
            this.page = 1
            this.category = "footwear"
            const footwearUrl = `http://localhost:8000/api/products/footwear?page=${this.page}`
            await this.getProducts(footwearUrl)
        },

        async clothesCategory(){
            this.page = 1
            this.category = "clothes"
            const clothesUrl = `http://localhost:8000/api/products/clothes?page=${this.page}`
            await this.getProducts(clothesUrl)
        },

        async accessoriesCategory(){
            this.page = 1
            this.category = "accessories"
            const accessoriesUrl = `http://localhost:8000/api/products/accessories?page=${this.page}`
            await this.getProducts(accessoriesUrl)
        },

        async allProducts(){
            this.page = 1
            this.category = "main"
            const allUrl = `http://localhost:8000/api/products?page=${this.page}`
            await this.getProducts(allUrl)
        },

        async searchProducts() {
            this.page = 1;
            this.category = "search";
            if (this.userSearch.trim() !== "") {
                const searchUrl = `http://localhost:8000/api/products/search?variable=${this.userSearch}&page=${this.page}`
                await this.getProducts(searchUrl)
            } else {
                this.products = []
            }
        }, 

        openModal() {
            this.showModal = true
            
            this.timer = setTimeout(() => {
                this.showModal = false
            }, 2000); 
        },
    },

    watch: {
    search: function () {
      this.searchProducts()
    },



  },

}

</script>


<template>

<Navbar></Navbar>

<main :class="{ 'dark_mode': dark.dark }">
    <Carrusel></Carrusel>


    <section class="contenedor_buscador">

      <form>

        <div class="search-container">

            <img src="../../../assets/images/lupa.png" alt="search" class="contenedor_buscador_img">
            <label for="search" class="hidden_label">Search</label>
            <input v-model="userSearch" @keyup.enter="searchProducts" type="search" id="search" name="search" placeholder=" Search....">
        </div>

      </form>

    </section>



    <section class="contenedor_categorias" :class="{ 'dark_mode_categories': dark.dark  }">
        <ul>
            <li><a @click="allProducts" :class="{ 'products_selection': category === 'main' }" > All Products</a></li>
            <li><a @click="furnituresCategory" :class="{ 'products_selection': category === 'furnitures' }" >Furniture</a> </li>
            <li><a @click="technologyCategory" :class="{ 'products_selection': category === 'technology' }" >Technology</a></li>
            <li><a @click="footwearCategory" :class="{ 'products_selection': category === 'footwear' }" >Footwear</a></li>
            <li><a @click="clothesCategory" :class="{ 'products_selection': category === 'clothes' }" >Clothes</a></li>
            <li><a @click="accessoriesCategory" :class="{ 'products_selection': category === 'accessories' }" >Accessories</a></li>

        </ul>
    </section>



    <form class="contenedor_page_btn">

        <button @click="previousPage(this.category)" >Previous page</button>
        <button @click="nextPage(this.category)">Next page</button>


    </form>


   
        <div class="info-message" v-if="showModal">
            <p>Product added to cart!</p>
        </div>

    <section class="contenedor-cards" >

        <div class="card" :class="{ 'dark_mode': dark.dark  }" v-for="product in products" :key="product.id">

            <img class="card-img" :class="{ 'dark': dark.dark  }" :src="product.image ? product.image  : 'https://cdn.icon-icons.com/icons2/3001/PNG/512/default_filetype_file_empty_document_icon_187718.png'" :alt="product.name">
            <!-- <p class="card-img-back">{{ product.description }}</p> -->

            <div class="card-title" :class="{ 'dark': dark.dark  }">
                <p>{{ product.name }}</p>
            </div>
            <div class="card-btn" :class="{ 'dark': dark.dark  }">
                <p>{{ product.price }} €</p>

                <a v-if="!dark.dark" @click="addFavourite(product.name,product.price,product.image,product.id)"> <img src="../../../assets/images/add.png" alt="Add to cart"></a>
                <a v-if="dark.dark" @click="addFavourite(product.name,product.price,product.image,product.id)"> <img src="../../../assets/images/add_white.png" alt="Add to cart"></a>
            </div>
        </div>

    </section>

    <Cart :cartProducts="cartProducts"  @vaciarCart = "vaciarCart" @deleteProduct = "deleteProduct"></Cart>

</main>

<Footer></Footer>

</template>


<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,100..700&display=swap');

@import url('https://fonts.cdnfonts.com/css/sansation');

.hidden_label{
    user-select: none;
    color: transparent;
}

main{
    background-color:rgba(197, 176, 149, 1);
    font-family: "Montagu Slab", serif;

}
.dark_mode {
    background-color:rgba(42, 44, 42, 1);
    font-family: "Montagu Slab", serif;
    color: white;
}

.dark_mode .card  {
    background-color:rgba(63, 62, 62, 1);
}

.dark{
    background-color:  rgba(63, 62, 62, 1);
    border:none;
}

.info-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(42, 161, 185, 0.9);
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.info-message p {
  margin: 0;
  font-size: 18px;
}

.contenedor_page_btn{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 30px;
}

.contenedor_page_btn button{
   width: 10vw;
   height: 5vh;
   border-radius: 25px;
   border:solid black 1px;
   background-color: rgba(42, 161, 185, 1);
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
   transition: box-shadow 0.3s ease;
}


.contenedor_page_btn button:hover{
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
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
    left: 75px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  input[type="search"] {
    background-color: rgba(42, 161, 185, 1);
    width: 50vw;
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
    transition:transform 0.2s;
}

.card:hover{
    transform: scale(1.1);
}


.card-img{
    width: 250px;
    height: 250px;
    padding: 20px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
}

.card-img-back{
    height: 20px;
    display: none;
    text-align: center;
}

.card:hover .card-img-back {
    display: block;
}

.card-title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:20px;
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
    font-size: 25px;
}

.card-btn img{
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition:transform 0.2s;
}

.card-btn img:hover{
    transform: scale(1.3);
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

.products_selection{
    padding-bottom: 5px;
    border-bottom: solid black 1px;
}

.dark_mode_categories ul{
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
}

.dark_mode_categories .products_selection{
    padding-bottom: 5px;
    border-bottom: solid rgb(255, 255, 255) 1px;
}
.contenedor_categorias a{
    cursor: pointer;
}


@media screen and (max-width:1050px) {
    .contenedor_categorias ul{
    display: flex;
    width: 615px;
    height: 100px;
    font-size: 15px;
   }

}


@media screen and (max-width:690px) {
    a{
        font-size: 15px;
    }
    .contenedor_categorias ul{
        display: flex;
        flex-direction: column;
        width: 150px;
        height: 400px;
        font-size: 15px;
   }


    .contenedor_page_btn button{
        width: 100px;
        height: 40px;
        border-radius: 25px;
        border:solid black 1px;
        background-color: rgba(42, 161, 185, 1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
        transition: box-shadow 0.3s ease;
    }



}


@media screen and (max-width:480px) {

   .contenedor_categorias ul{
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 400px;
    font-size: 30px;
   }

}

@media screen and (max-width:400px){




}



</style>