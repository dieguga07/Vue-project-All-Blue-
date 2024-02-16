<script>
export default{








}

</script>

<template>

    <section class="contenedor_main">

        <section class="contenedor_carrusel">

            <div class="carrusel">
                <ul>
                    <li><img src="../../../assets/images/tennis.jpg" alt=""></li>
                    <li><img src="../../../assets/images/zapatos.jpg" alt=""></li>
                    <li><img src="../../../assets/images/soffa.jpg" alt=""></li>
                    <li><img  src="../../../assets/images/phone.jpg" alt=""></li>
                    <li> <img  src="../../../assets/images/sunglasses.jpg" alt=""></li>
                </ul>   
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
    overflow: hidden;
    height: 40vh;
    width: 80vw;
}

.carrusel ul{
    display: flex;
    padding: 0px;
    width: 400%;
    list-style: none;
}



@media screen and (max-width:400px){
    .contenedor_carrusel{
    display: none;

}
    
}



</style>