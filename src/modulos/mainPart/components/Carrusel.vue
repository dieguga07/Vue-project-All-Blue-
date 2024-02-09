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
    animation: slide 50s infinite cubic-bezier(0.55, 0.048, 0.37, 0.92);
}



@keyframes slide {
    0% {margin-left:0;}

    20% {margin-left:0;}

    25% {margin-left:-100%;}

    45% {margin-left:-100%;}

    50% {margin-left:-200%;}

    70% {margin-left:-200%;}

    75% {margin-left:-300%;}

    95% {margin-left:-300%;}

    100% {margin-left:-400%;}

}




</style>