<script>
export default {
   props: {
    cartProducts: {
      type: Array,
    },

   },

   data() {
      return {
         compraState:false,
         cartState:false,
         
      }
   },

   methods:{

      compraUser(){
         this.$emit('vaciarCart')
         this.compraState = true
          setTimeout(() => {
            this.compraState = false
            }, 10000)

      },
      totalPrice(){
         let cartPrice = 0;
         for (let product in this.cartProducts){
            cartPrice += this.cartProducts[product].Pprice * this.cartProducts[product].Pcantidad
         }
   
         return parseFloat(cartPrice.toFixed(2))
      },
      

      addCantidad(product){
         product.Pcantidad += 1
         
      },

      removeCantidad(product){
         if(product.Pcantidad === 1 ){
          return this.$emit('deleteProduct',product.Pid)
         }
         product.Pcantidad -=1
      },

      openCart(){
         if (this.cartState ){
            this.cartState = false   
            
         }else{
            this.cartState = true  
            
         }
      }



   },

   
   emits: ['vaciarCart', 'deleteProduct'], 

}
</script>

<template>

<!--  ---------------------------------------------------------------------------
      -------------------------CARRITO SIN DESPLEGAR-----------------------------
      ---------------------------------------------------------------------------  -->


   <section :class="cartState ? 'contenedor-cart_open' : 'contenedor-cart '">

      <img @click="openCart" src="../../../assets/images/cart.png" alt="Carrito">        
   
<!--  ---------------------------------------------------------------------------
      --------------------------CARRITO  DESPLEGADO------------------------------
      ---------------------------------------------------------------------------  -->

   <section :class="cartState ? 'contenedor-cart2_open' : 'contenedor-cart2'">

      
      <div v-if="compraState" class="purchase-message">

      <p>Purchase has been successfully completed.</p>

      </div>

      <div class="cart">
         <ul class="cart-sections">
            <li>Image</li>
            <li>Name</li>
            <li>Quantity</li>
            <li>Price</li>
            <li>Remove</li>
         </ul>
      </div>

      <div class="cart" v-for="product in cartProducts" :key="product.Pid">

         <ul >
            <li> <img class="cart-img" :src="product.Pimage ? product.Pimage  : 'https://cdn.icon-icons.com/icons2/3001/PNG/512/default_filetype_file_empty_document_icon_187718.png'" :alt="product.name"></li>
            <li> <p>{{ product.Pname }}</p> </li>
            <li class="cart-btn-cantidad " ><a @:click="removeCantidad(product)"><img src="../../../assets/images/menos.png" alt="-"></a><p>{{ product.Pcantidad }}</p><a @:click="addCantidad(product)"> <img src="../../../assets/images/mas.png" alt="+"></a>  </li>
            <li> <p>{{ parseFloat((product.Pprice  * product.Pcantidad).toFixed(2))}} €</p> </li>  
            <a class="cart-btn_vaciar_one" @click="$emit('deleteProduct',product.Pid)">X</a>
         </ul>
          
      </div>
 
      <div class="cart">

         <ul>
            <li> Total price : {{ totalPrice() }} €</li>
            <li> <button @click="compraUser" class="cart-btn-comprar"> Buy </button></li>
            <li> <button @click="$emit('vaciarCart')" class="cart-btn-vaciar"> Remove all </button> </li>
         </ul>

      </div>
   
   </section>

</section> 


</template>

<style scoped>


.contenedor-cart2{
   display: none;
   justify-content: space-evenly;
   flex-direction: column;
   background-color: rgb(9, 64, 84); 
   padding: 20px;
   color: white;
   font-size: 100%;
 
   
}
.purchase-message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(160, 237, 160, 0.8);
  padding: 10px;
  border-radius: 5px;
  z-index: 2; 
  color: black;
}

.dark_mode{
   background-color:  rgba(63, 62, 62, 1);
}

.cart-btn_vaciar_one{
   color: red;
}

.contenedor-cart2_open{
   display: flex;
   justify-content: space-evenly;
   flex-direction: column;
   background-color: rgb(9, 64, 84); 
   padding: 20px;
   color: white;
   font-size: 100%;
   width: 100%;
   min-height: 70vh;
   
}



.cart-btn-cantidad{
   display: flex;
   align-items: center;
   justify-content: center;
  
}

.cart-btn-cantidad a{
   padding-left: 5px;
   padding-right: 5px;
   text-align: center;
   
}


.cart-btn-cantidad a img {
  background-color:  transparent;
  border: none;
  width: 30px;
  height: 30px;
  

}

.cart-btn-cantidad a img:hover {
   transform: scale(1.1);
}



div{
   padding-top: 40px;
}


.cart ul{
  
   display: flex;
   align-items: center;
   flex-direction: row;
   justify-content: space-around;
   list-style: none;
   padding: 2%;
   
}

.cart ul li{
   min-width: 10%;
   max-width: 10%;
   text-align: center;
   padding-left: 0%;
   
   
}

.cart img{
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: white;
   border: 2px solid black;
   transition:transform 0.4s;
   
}


.cart img:hover{
   transform: scale(1.4);
}

.cart button{
   width: 10vw;
   height: 5vh;
   border-radius: 25px;
   border:solid black 1px;
}

.cart-btn-comprar{
   background-color: rgba(197, 176, 149, 1);
}

.cart-btn-vaciar{
   background-color: rgba(42, 161, 185, 1);
}


.contenedor-cart{
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed; 
   right: 0; 
   top:20%;
   width: 70px;
   height: 70px; 
   background-color: rgba(42, 161, 185, 1); 
   border-top-left-radius: 25px;
   border-bottom-left-radius: 25px;
   z-index: 1;
   cursor: pointer;
}

.contenedor-cart_open{
   display: flex;
   justify-content: start;
   align-items: start;
   position: fixed; 
   right: 0; 
   top:10%;
   width:90%;
   background-color: rgba(42, 161, 185, 1); 
   border-top-left-radius: 25px;
   border-bottom-left-radius: 25px;
   z-index: 1;
   cursor: pointer;
   overflow-y: scroll;
   z-index: 4;
   max-height: 70%;
   min-height: 70%;
}




@media screen and (max-width:900px) {
    
  
   .cart img{
      width: 40px;
      height: 40px;
      margin: 0 auto;
   }
   .cart-btn-cantidad a img {
      background-color:  transparent;
      border: none;
      width: 20px;
      height: 20px;
   }

   .cart button{
   width: 80px;
   height: 30px;
   border-radius: 25px;
   border:solid black 1px;
   
}


}


@media screen and (max-width:500px) {
    
    
   .cart ul{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  padding: 2%;


}   
    
  .cart-sections{
   display: none;
   color: transparent;
   height:1px;
  }
  
}
  


</style>