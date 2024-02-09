<script>
export default{








}

</script>


<template>

    <section>

            <article>


                <h1>Oops !</h1>

                <img src="../../../assets/images/NotFound.png"> 

                <p>Page not found . <router-link to="/" class="nav-link">Go Home</router-link></p>


            </article>
      
    </section>

</template>


<style scoped>



section{
    display: flex;
    width: 100%;
    height: 100%;
    
}
section h1{
font-size: 15vh;
}

section a , p{
font-size: 3vh;
}

section img{
width: 657px;
height: 603px;
}

article{
    padding-top: 40px;
 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}



</style>