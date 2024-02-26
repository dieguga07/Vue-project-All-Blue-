<script>
import { DarkMode } from '@/stores/DarkMode';

export default{


data() {
    return {
      dark:DarkMode()
    }
},
methods: {
 
},




}

</script>


<template>

    <footer >

        <section :class="{ 'dark_mode': dark.dark }">
            <section class="contenedor_redes_sociales">

                <ul>
                    <li><img src="../../../assets/images/redsocial6.png" alt="" srcset=""></li>
                    <li><img src="../../../assets/images/redsocial5.png" alt="" srcset=""></li>
                    <li><img src="../../../assets/images/redsocial4.png" alt="" srcset=""></li>
                    <li><img src="../../../assets/images/redsocial3.png" alt="" srcset=""></li>
                    <li><img src="../../../assets/images/redsocial2.png" alt="" srcset=""></li>
                    <li><img src="../../../assets/images/redsocial1.png" alt="" srcset=""></li>
                </ul>

            </section>

            <section class="contenedor_contacto">

                <ul>
                    <li> <router-link to="/private/contact" class="nav-link" id="contact">Contact US</router-link> </li>
                    <li>News</li>
                    <li>About</li>
                    <li>Our Team</li>
                </ul>

            </section>

        </section>

       <p class="dark">Copyright ©2024; Designed by dieguga07</p>

    </footer>


</template>


<style scoped>


footer{
    width: 100%;
    background-color: rgb(9, 64, 84); 
    color: white;
    border-top: 1px solid #000000; 
    border-bottom: none; 
    border-left: none; 
    border-right: none;
}

.dark_mode{
    background-color: rgba(63, 62, 62, 1);
    color: white;
}

.dark{
    background-color: #000000;
    color: white;
}

footer p{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:rgba(2, 22, 30, 1);
    font-size: 2vhx;
    height: 4vh;
}

.contenedor_footer{
    
    padding:50px;
    padding: 0%;
    padding-bottom: 50px;
}

.contenedor_redes_sociales{
   
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    height: 10rem;
    margin: 0%;
}

.contenedor_redes_sociales ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    padding-top: 3rem;
}

.contenedor_redes_sociales img {
    margin: 20px;
    width: 60px;
    height: 60px;
}

.contenedor_contacto{
    font-size: 15px;
    display: flex;
    justify-content: space-around;
    height: 3rem;
    margin-top: auto;
}
.contenedor_contacto ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    width: 500px;
    list-style: none;
    
}


#contact{

    color: white;
    list-style: none;
    text-decoration: none;
}


li{
    transition: all 0.2s;
}

li:hover{
    transform: scale(1.2);
}

@media screen and (max-width:620px) {
    
    .contenedor_redes_sociales img {
    margin: 8px;

}      
.contenedor_footer{
    padding: 0;

}

.contenedor_redes_sociales{
    height: 6rem;
}

}


@media screen and (max-width:475px) {
    
    .contenedor_redes_sociales img {
    margin: 6px;
}    





}

@media screen and (max-width:456px) {
    
    .contenedor_redes_sociales img {
    margin: 6px;
    width: 50px;
    height: 50px;  
}      

}


@media screen and (max-width:396px) {
    
    .contenedor_redes_sociales img {
    margin: 4px;
    width: 40px;
    height: 40px;    
}     



}

</style>