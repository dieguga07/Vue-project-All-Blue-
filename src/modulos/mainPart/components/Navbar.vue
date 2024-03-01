<script>
import { UserContext } from '../../../stores/UserContext'
import { DarkMode } from '@/stores/DarkMode'

export default{

    data() {
        return {

            userStore: UserContext(),
            dark: DarkMode().dark
        }
    },
    methods: {
    changeMode() {
      this.dark = !this.dark;
      DarkMode().setDarkMode(this.dark)
    }
  }

}

</script>


<template>

<header>

    <nav :class="{ 'clasic_nav': true, 'dark_mode': dark }">

        <ul class="clasic_ul">
            <li><img src="../../../assets/images/wave.png" title="All Blue" alt="All Blue" class="clasic_img"></li>
        </ul>

        <ul class="clasic_ul">
            <li><router-link to="/private/user" class="nav-link">User</router-link></li>
            <li><router-link to="/private/products" class="nav-link">Products</router-link></li>
            <li><router-link  @click="userStore.setUser(false)"   to="/public" class="nav-link">Logout</router-link></li>
        </ul>

        <ul class="clasic_ul" v-if="!dark">
            <li @click="changeMode" id="luna"><a><img src="../../../assets/images/luna.png" alt="Cambiar modo" title="Cambiar modo" class="clasic_img"></a></li>
        </ul>

        <ul class="clasic_ul" v-if="dark">
            <li @click="changeMode" id="sol"><a><img src="../../../assets/images/sol.png" alt="Cambiar modo" title="Cambiar modo" class="clasic_img"></a></li>
        </ul>
    </nav> 
  

</header>

</template>


<style scoped> 

@import url('https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,100..700&display=swap');

@import url('https://fonts.cdnfonts.com/css/sansation');

.header{
    font-family: "Montagu Slab", serif;
}
.clasic_nav {
    font-size: 20px;
    display: flex;
    background-color: rgb(9, 64, 84); 
    color: white;
    perspective: 2000px;
    transform-style: preserve-3d;
    height: 5rem;
    border-top: none; 
    border-bottom: 1px solid #000000; 
    border-left: none; 
    border-right: none;
    justify-content: space-evenly;
   
}

.dark_mode{
    background-color: rgba(63, 62, 62, 1);
}

.clasic_ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    list-style: none;
}

.clasic_img{
    width: 50px;
    height: 50px;
}

nav ul a {
    color: white;
    text-decoration: none;
}

li{
    transition: all 0.2s;
}

li:hover{
    transform: scale(1.2);
}

nav ul li  a:hover{
    color:rgb(197, 176, 149);
    
}

#luna img {
    width: 40px;
    height: 40px;
}

.seleccionado_user a{
    color: rgb(197, 176, 149);
}

.seleccionado_products a{
    color: rgb(197, 176, 149);
}



@media screen and (max-width:700px){
    
    nav ul a{
        padding: 20px;
    }
    
}

@media screen and (max-width:420px){
    
    #luna img {
        width: 30px;
        height: 30px;   
    }
    
    nav img {
        width: 40px;
        height: 40px;
    }
    
}

@media screen and (max-width:400px){
    
  
    nav img {
        width: 30px;
        height: 30px;
    }

    nav ul a{
        padding: 10px;
        font-size: 16px;
    }

}



</style>