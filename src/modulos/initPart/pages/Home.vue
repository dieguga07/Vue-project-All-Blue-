<script>


export default{







}

</script>


<template>

<nav>

    <ul class="logo">
      <li><img src="../../../assets/images/wave.png" title="All Blue" alt="All Blue"></li>
      <li><p>All Blue</p></li>
    </ul>

    <ul>
        <li><router-link to="/login" class="nav-link" id="login">Login</router-link> <router-link to="/register" class="nav-link" id="registro">Register</router-link> </li>
    </ul>
   
</nav>

<div class="deco-contenedor">
  <div class="deco-1"></div>
  <div class="deco-2"></div>
  <div class="deco-3"></div>
</div>

</template>


<style scoped>



.deco-contenedor{
  display: flex;
  width: 300px;
  height: 200px;
  transform: rotate(180deg);
  transform-origin: 50% 100%;

}


.deco-1{
  z-index: 2;
  display: flex;
  align-items: start;
  justify-content:start;
  width: 200px;
  height: 200px;
  background-color:  rgba(42, 161, 185, 1);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: -5px 4px 40px rgba(0, 0, 0, 0.5), -7px 4px 4px rgba(0, 0, 0, 0.25);
}

.deco-2{
  z-index: 1;
  display: flex;
  align-items: end;
  width: 200px;
  height: 300px;
  background-color:rgba(74, 143, 154, 1);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: -6px 4px 40px rgba(0, 0, 0, 0.5), -7px 4px 4px rgba(0, 0, 0, 0.25);
}

.deco-3{
 
  display: flex;
  align-items: end;
  width: 200px;
  height: 400px;
  background-color:rgba(9, 64, 84, 1);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: -6px 4px 40px rgba(0, 0, 0, 0.5), -7px 4px 4px rgba(0, 0, 0, 0.25);
}


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