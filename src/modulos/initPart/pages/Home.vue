<script>
import FooterPublic from '../components/FooterPublic.vue'
export default{

components:{FooterPublic}





}

</script>


<template>

<nav>

    <ul class="logo">
      <li><img src="../../../assets/images/wave.png" title="All Blue" alt="All Blue"></li>
      <li><p>All Blue</p></li>
    </ul>

    <ul>
        <li><router-link to="/public/login" class="nav-link" id="login">Login</router-link> <router-link to="/public/register" class="nav-link" id="registro">Register</router-link> </li>
    </ul>
   
</nav>

<FooterPublic></FooterPublic>



</template>


<style scoped>


nav {
  display: flex;
  padding: 10px 20px; 
   
}

nav img {
  width: 200px;
  height: 200px;
}

nav ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: end;
    width: 100%;
    list-style: none;
    margin-right: 20px;
    font-size: 40px;

}

.logo{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
}

.nav-link{
  color: rgb(0, 0, 0);
  list-style: none;
  text-decoration: none;
  
}
    
#registro {
  padding: 10px 20px; 
  background-color: rgb(197, 176, 149);
  border-radius: 50px; 
  color: #000000; 
  border: solid 2px #000000;
}

#registro:hover{
  background-color: rgba(42, 161, 185, 1);
  
}

#login:hover{
  color: rgba(42, 161, 185, 1);
}

</style>