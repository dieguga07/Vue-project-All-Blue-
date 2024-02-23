<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { UserContext   } from '@/stores/UserContext'


export default{
    components: { Navbar,Footer },

    data() {
        return {
            nombre: "",
            email: "",
            phone: ""
        }
    },

  created() {
        const userStore = UserContext()
        this.nombre = userStore.nombre
        this.email = userStore.email
        this.phone = userStore.phone
    }
}

</script>


<template>

<Navbar></Navbar>

    <section>

        <article class="user_part_contenedor">
            <div class="user_part">
                <ul>
                    <li>  <img src="../../../assets/images/foto_profile_1.png" alt="user_image"></li>
                    <div class="user_part_information">
                        <li><h2>{{nombre}}</h2></li>
                        <li><p>{{email}}</p></li>
                        <li><p>{{phone}}</p></li>
                    </div>

                </ul>

            </div>

        </article>


    </section>


<Footer></Footer>

</template>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,100..700&display=swap');

@import url('https://fonts.cdnfonts.com/css/sansation');

section{
    background-color:rgba(197, 176, 149, 1);
    font-family: "Montagu Slab", serif;
    width: 100%;
    height: 100vh;
    color: rgb(0, 0, 0);
}

.user_part_contenedor{
    width: 100%;
    height: 30vh;
    background-image: url(../../../assets/images/User_fondo_1.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    padding-left: 10%;
}

.user_part ul{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;


}

.user_part img{
    width: 150px;
    height: 150px;
}

.user_part_information{
    padding-left: 20px;
    width:120px;
}

@media screen and (max-width:500px) {
    .user_part img{
        width: 100px;
        height: 100px;
    }

    .user_part_information{
     font-size: 15px; 
    }

 }



 @media screen and (max-width:339px) {

    .user_part img{
        width: 90px;
        height: 90px;
    }

    .user_part_information{
        font-size: 12px; 
    }

}


</style>