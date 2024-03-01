<script>
import { UserContext } from '@/stores/UserContext'
import router from '../../../router/router.js'

export default{

data(){
  return{
    user: "",
    email:"",
    phone:"",
    password:"",

    validUser:false,
    validPassword:false,
    validEmail:false,
    validPhone:false,

    userMessage: "" ,
    passwordMessage: "" ,
    emailMessage:"",
    phoneMessage:"",

    responseFail:"",

    emailRegex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phoneRegex:  /^[6789]\d{8}$/

  }
},
methods:{

  sendForm(e){

    e.preventDefault()

    this.checkPassword()

    this.checkUser()

    this.checkEmail()

    this.checkPhone()

    if(this.validUser && this.validPassword && this.validEmail && this.validPhone ){

      const userStore = UserContext()
    
      const registerData = {
        nombre: this.user,
        email:this.email,
        phone:this.phone,
        password:this.password,
      }

      const configuration = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        }

      fetch('http://localhost:8000/api/register', configuration)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error()
        }
      })
      .then( () =>{
        userStore.setUser(true)

        userStore.setName(this.user)
        userStore.setEmail(this.email)
        userStore.setPhone(this.phone)

        router.push("/private/products")

      })
      .catch(() => {
        userStore.setUser(false)
        this.responseFail = "The user or email already exists"

        setTimeout(() => {
          this.responseFail = ""
        }, 5000)
      })

    }
  },

  checkUser(){
    if(this.user.trim() === "" ){
      this.userMessage = "This field cannot be empty."
      return this.validUser = false
    }

    else if(this.user.length < 4  || this.user.length > 20){
      this.userMessage = "The username must be composed of 4 to 20 letters."
      return this.validUser = false
    }

    this.userMessage = "✔"
    this.validUser = true
  },

  checkPassword(){
    if(this.password.trim() === "" ){
      this.passwordMessage ="This field cannot be empty."
      return this.validPassword = false
    }
    this.passwordMessage = "✔"
    this.validPassword = true
  },
  checkEmail(){
    if(this.email.trim() === "" ){
      this.emailMessage= "This field cannot be empty."
      return this.validEmail = false
    }
    else if(!this.emailRegex.test(this.email) ){
      this.emailMessage = "The email does not have the correct format."
      return this.validEmail = false
    }
    this.emailMessage = "✔"
    this.validEmail = true
  },

  checkPhone(){
    if(this.phone.trim() === "" ){
      this.phoneMessage = "This field cannot be empty."
      return this.validPhone = false
    }
    else if(!this.phoneRegex.test(this.phone) ){
      this.phoneMessage = "The phone number does not have the correct format."
      return this.validPhone = false
    }
    this.phoneMessage = "✔"
    this.validPhone = true  
  }





}, 
watch: {
  user: function (){
  this.checkUser()
  },

  password: function (){
  this.checkPassword()
  },

  email: function (){
    this.checkEmail()

  },

  phone: function (){
    this.checkPhone()
  },

},

}

</script>


<template>

<section class="contendor-register">

    <form class="register-form">
      <fieldset>
        <h1 class="register-title">Sing up</h1>
        
        <div class="register-input">

            <span class="error-message"> {{ responseFail }} </span>

            <label for="user" class="register-label">User</label>
            <input v-model="user"  type="text" id="user" name="user" required placeholder="Username">
            <span :class=" validUser ? 'accept-message' : 'error-message' ">{{ userMessage }}</span>
            
            <label for="email" class="register-label">Email</label>
            <input v-model="email"  type="text" id="email" name="email" required placeholder="Email@gmail.com">
            <span :class=" validEmail ? 'accept-message' : 'error-message' ">{{ emailMessage }}</span>
            
            <label for="phone" class="register-label">Phone</label>
            <input v-model="phone"  type="text" id="phone" name="phone" required placeholder="600123567">
            <span :class=" validPhone ? 'accept-message' : 'error-message' ">{{ phoneMessage }}</span>
            
            <label for="password" class="register-label">Password</label>
            <input v-model="password"  type="password" id="password" name="password" autocomplete="current-password" required placeholder="Password" >
            <span  :class=" validPassword ? 'accept-message' : 'error-message' " >{{  passwordMessage }}</span>
            
        </div>

        <div class="boton-texto">
            <button @click="sendForm">Get started</button>
        
            <p class="register-end">Already have an account ? <router-link to="/public/login" class="nav-link" id="registro">Log in now</router-link></p>
        </div>
            
      </fieldset>

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
  position: absolute;
  overflow: hidden;
  z-index:-1;
  top: 0;
}

.banda2{
  
  height: 100vh;
  position: absolute;
  overflow: hidden;
  z-index:-2;
  top: 0;
}

.banda3{
  
  height: 100vh;
  position: absolute;
  overflow: hidden;
  z-index:-3;
  top: 0;
}
  
.boton-texto{
    padding: 0 auto;
}

fieldset {
  border: none; 
}

  .contendor-register {
    font-family: "Montagu Slab", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
  }

  .register-title{
    font-size: 5.5vh;
    font-family: 'Sansation', sans-serif;
    font-weight: 100;
  }
  
  .register-form {
  width: 450px;
  min-height: 550px;
  padding: 4vh;
  border-radius: 25px;
  box-shadow: 6px 7px 40px rgba(0, 0, 0, 0.5),10px 10px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding-bottom: 5px;
  background-color: rgb(255, 255, 255);
 
}


.register-form button{
  background-color: rgba(191, 204, 223, 1);
  width: 70%;
  height: 54px;
  border-radius: 25px; 
  font-size: 20px;
  transition: background-color 0.zs ease;
}

  .register-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    justify-content: start;
    transition: background-color 0.3s ease;
  }

.register-input input {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    outline: none;
    padding: 5px 0;
    font-size: 16px;
}

.register-input .register-label{
  display: flex;
  justify-content: start;
  font-size: 20px;
  padding-top: 10px;
  color:  rgba(0, 0, 0, 0.6);
 
}

.register-end{
padding-top: 20px;
padding-bottom: 20px ;

}

.register-end a{
  color: rgba(42, 161, 185, 1);
  list-style: none;
  text-decoration: none;
}

.register-form button:hover {
  background-color: rgba(150, 170, 190, 1);
}

.error-message {
    color: red;
  }

  .accept-message {
    color: green;
  }

  
  @media screen and (max-width:480px) {
    .register-form {
      min-width: 250px;

    }

    .contendor-register {

    padding: 20px;

  }
  }

</style>