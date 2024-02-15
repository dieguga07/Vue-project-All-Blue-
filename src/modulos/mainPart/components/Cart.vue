<script>
export default {
   props: {
    cartProducts: {
      type: Array,
    }
   },

   data() {
      return {
         
      }
   },

   methods:{

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
         if(product.Pcantidad > 1){
            product.Pcantidad -=1
            
         }
         
      }
   },
}
</script>

<template>

<!--  ---------------------------------------------------------------------------
      ---------------------------------------------------------------------------
      -------------------------CARRITO SIN DESPLEGAR-----------------------------
      ---------------------------------------------------------------------------
      ---------------------------------------------------------------------------  -->



   <!-- <section class="contenedor-cart">

      <img src="../../../assets/images/cart.png" alt="Carrito">
        
   </section> -->





<!--  ---------------------------------------------------------------------------
      ---------------------------------------------------------------------------
      --------------------------CARRITO  DESPLEGADO------------------------------
      ---------------------------------------------------------------------------
      ---------------------------------------------------------------------------  -->



   <section class="contenedor-cart2">

      <div class="cart">
         <ul >
            <li>Imagen</li>
            <li>Nombre</li>
            <li>Cantidad</li>
            <li>Precio</li>
         </ul>
      </div>

      <div class="cart" v-for="product in cartProducts" :key="product.Pid">
         <ul >
            <li> <img class="cart-img" :src="product.Pimage ? product.Pimage  : 'https://cdn.icon-icons.com/icons2/3001/PNG/512/default_filetype_file_empty_document_icon_187718.png'" :alt="product.name"></li>
            <li> <p>{{ product.Pname }}</p> </li>
            <li class="cart-btn-cantidad " > {{ product.Pcantidad }} <a @:click="removeCantidad(product)"><img src="../../../assets/images/menos.png" alt="-"></a><a @:click="addCantidad(product)"> <img src="../../../assets/images/mas.png" alt="+"></a>  </li>
            <li> <p>{{ parseFloat((product.Pprice  * product.Pcantidad).toFixed(2))}} €</p> </li>
         </ul>
      </div>
 
      <div class="cart">

         <ul>
            <li> Precio total : {{ totalPrice() }} €</li>
            <li> <button @click="" class="cart-btn-comprar"> Comprar </button></li>
            <li> <button @click="$emit('vaciarCart')" class="cart-btn-vaciar"> vaciar todo </button> </li>
         </ul>

      </div>

   
   
   </section>





</template>

<style scoped>



.contenedor-cart2{
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   background-color: rgb(98, 169, 195);
   padding: 20px;
   color: white;
   font-size: 20px;
}

.cart-btn-cantidad{
   display: flex;
   align-items: center;
   justify-content: center;
}

.cart-btn-cantidad a{
   padding-left: 10px;
   text-align: center;
}

.cart-btn-cantidad a img {
  background-color:  transparent;
  border: none;
  width: 30px;
  height: 30px;

}

div{
   padding-top: 40px;
}


.cart ul{
   
   display: flex;
   align-items: center;
   flex-direction: row;
   justify-content: space-evenly;
   list-style: none;
   padding: 20px;

}

.cart ul li{
   width: 5%;
   text-align: center;
}

.cart img{
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background-color: white;
   border: 2px solid black;
}


.cart button{
   width: 10vw;
   height: 5vh;
   border-radius: 25px;
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
}

.contenedor-cart img{
  
   width: 40px;
   height: 40px;
}


@media screen and (max-width:564px) {
    
   .contenedor-cart{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 50px;
        margin-bottom: 30px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;    

    }     
    
   .contenedor-cart img{
    
      width: 30px;
      height: 30px;
      margin: 0 auto;
   }

}

</style>