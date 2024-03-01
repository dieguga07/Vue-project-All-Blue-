<script>
export default{




}

</script>

<template>

    <section class="contenedor_main">

        <section class="contenedor_carrusel">

            <div class="carrusel">
            
                    <img src="../../../assets/images/Fashion.png" alt="foto_decorativa_1">
               
            </div>
        </section>
    </section>
  
</template>


<style scoped>

.contenedor_carrusel{
    display: grid;
    padding: 20px;
    width: 100%;
   
    place-content: center;
}

.carrusel{
    width: 100%;
}

.carrusel ul{
    display: flex;
    padding: 0px;
    width: 100%;
    list-style: none;
}

.carrusel img{
    width:100%;
    border: 1px solid  rgba(0, 0, 0, 0.174) ;
    border-radius: 25px;
}



@media screen and (max-width:400px){
    
  .contenedor_carrusel{
    display: none;
  }
  

}



</style>