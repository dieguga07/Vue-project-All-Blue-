<script>
import router from '@/router/router';

export default{


    props:{
      
    },

    data(){

        return{
        
        
          user: "",
          password: "",
        
        validPassword:false,
        validUser:false,
        userMessage: "" ,
        passwordMessage: "" ,

        } 
    },

    methods:{
       sendForm(e){
        e.preventDefault()

        this.checkPassword()

        this.checkUser()

        if(this.validUser && this.validPassword){
         
           return router.push("/private/products")
           
        }
          
       },

       checkUser(){
        if(this.user.trim() === "" ){
          
          this.userMessage = "Este campo no puede estar vacio"
          return this.validUser = false
        }else if(this.user.length < 4 ){
          this.userMessage = "El nombre del usuario de estar compuesto por 4 letras o mas"
          return this.validUser = false
        }
        this.userMessage = "Todo OK"
        this.validUser = true
       },
       
       checkPassword(){
        if(this.password.trim() === "" ){
          this.passwordMessage = "Este campo no puede estar vacio"
          return this.validPassword = false
        }
        this.passwordMessage = "Todo OK"
        this.validPassword = true
       }
    }, 
    watch: {
    user: function () {
      this.checkUser()
    },

    password: function () {
      this.checkPassword()
    },

  },



}

</script>


<template>

    <section class="contendor-login">

        <form class="login-form">
            <p class="login-title">Login</p>
        
            <article class="login-input">

                <label for="user" class="login-label">User</label>
                 <!-- Con v-model hacemos un enlazado bidireccional de este input con la variable user -->
                <input v-model="user"  type="text" id="user" name="user" required>
                <!-- Segun la validez del usuario , establecemos una clase u otra -->
                <span :class=" validUser ? 'accept-message' : 'error-message' ">{{ userMessage }}</span>
        
                <label for="password" class="login-label">Password</label>
                <!-- Con v-model hacemos un enlazado bidireccional de este input con la variable password -->
                <input v-model="password"  type="password" id="password" name="password" required>
                <!-- Segun la validez de password , establecemos una clase u otra -->
                <span  :class=" validPassword ? 'accept-message' : 'error-message' " >{{ passwordMessage }}</span>

            </article>
            
            <button @click="sendForm">Login</button>
            
            <p class="login-end">Not a member yet? <router-link to="/public/register" class="nav-link" id="login">Sign up now</router-link></p>

        </form>
        
    </section>


    <div class="banda1">

      <svg width="100%" height="100%" viewBox="0 0 1440 1002" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dd_61_215)">
        <rect x="-158" y="866.912" width="1941.41" height="176" rx="88" transform="rotate(-40 -158 866.912)" fill="#2AA1B9"/>
        </g>
        <defs>
          <filter id="filter0_dd_61_215" x="-200" y="-407" width="1661.33" height="1442.74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="15"/>
              <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61_215"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-12" dy="4"/>
                <feGaussianBlur stdDeviation="15"/>
                <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_61_215" result="effect2_dropShadow_61_215"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_61_215" result="shape"/>
          </filter>
        </defs>
      </svg>

    </div>

    <div class="banda2">

      <svg width="100%" height="100%" viewBox="0 0 1338 910" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dd_130_103)">
      <rect x="-302" y="766.65" width="1992.34" height="176" rx="88" transform="rotate(-40 -302 766.65)" fill="#4A8F9A"/>
      </g>
        <defs>
          <filter id="filter0_dd_130_103" x="-354" y="-550" width="1719.35" height="1495.47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="15" dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_130_103"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-12" dy="4"/>
              <feGaussianBlur stdDeviation="20"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_130_103" result="effect2_dropShadow_130_103"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_130_103" result="shape"/>
          </filter>
        </defs>
      </svg>

    </div>

    <div class="banda3">

      <svg width="100%" height="100%" viewBox="0 0 1144 750" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dd_130_104)">
      <rect x="-373" y="606.282" width="1831.53" height="176" rx="88" transform="rotate(-40 -373 606.282)" fill="#0A4154"/>
      </g>
        <defs>
          <filter id="filter0_dd_130_104" x="-425" y="-607" width="1596.16" height="1392.11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="15" dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_130_104"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-12" dy="4"/>
              <feGaussianBlur stdDeviation="20"/>
            <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_130_104" result="effect2_dropShadow_130_104"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_130_104" result="shape"/>
        </filter>
        </defs>
      </svg>

    </div>

</template>
  
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,100..700&display=swap');

@import url('https://fonts.cdnfonts.com/css/sansation');


.banda1{
  
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index:-1;
  top: 0;
}

.banda2{
  
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index:-2;
  top: 0;
}

.banda3{
  
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index:-3;
  top: 0;
}


  .contendor-login {
    font-family: "Montagu Slab", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

  }




  .login-title{
    font-size: 5.5vh;
    font-family: 'Sansation', sans-serif;
    font-weight: 100;
  }
  
  .login-form {
  width: 450px;
  min-height: 550px;
  padding: 4vh;
  border-radius: 25px;
  box-shadow: 6px 7px 40px rgba(0, 0, 0, 0.5),10px 10px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  background-color: white;
 
}


.login-form button{
  background-color: rgba(191, 204, 223, 1);
  width: 257px;
  height: 54px;
  border-radius: 25px; 
  font-size: 20px;
  margin: 0 auto;
  transition: background-color 0.zs ease;
}

.login-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    justify-content: start;
    transition: background-color 0.3s ease;
}

.login-input input {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    outline: none;
    padding: 5px 0;
    font-size: 16px;
}

.login-input .login-label{
  display: flex;
  justify-content: start;
  font-size: 20px;
  padding-top: 50px;
  color:  rgba(0, 0, 0, 0.6);
}

.login-end{
padding-top: 50px;

}

.login-end a{
  color: rgba(42, 161, 185, 1);
  list-style: none;
  text-decoration: none;
}

.login-form button:hover {
  background-color: rgba(150, 170, 190, 1);
}

.error-message {
    color: red;
  }

  .accept-message {
    color: green;
  }

</style>