<script>
import router from '@/router/router'

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
 
      return router.push("/products")
   
    }
  
  },

  checkUser(){
    if(this.user.trim() === "" ){
      this.userMessage = "Este campo no puede estar vacio"
      return this.validUser = false
    }

    else if(this.user.length < 4 ){
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
  },
  checkEmail(){
    if(this.email.trim() === "" ){
      this.emailMessage= "Este campo no puede estar vacio"
      return this.validEmail = false
    }
    else if(!this.emailRegex.test(this.email) ){
      this.emailMessage = "El email no tiene el formato correcto"
      return this.validEmail = false
    }
    this.emailMessage = "Todo OK"
    this.validEmail = true
  },

  checkPhone(){
    if(this.phone.trim() === "" ){
      this.phoneMessage = "Este campo no puede estar vacio"
      return this.validPhone = false
    }
    else if(!this.phoneRegex.test(this.phone) ){
      this.phoneMessage = "El télefono no tiene el formato correcto"
      return this.validPhone = false
    }
    this.phoneMessage = "Todo OK"
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
        <p class="register-title">Sing up</p>
        
        <div class="register-input">

            <label for="user" class="register-label">User</label>
            <input v-model="user"  type="text" id="user" name="user" required placeholder="User">
            <span :class=" validUser ? 'accept-message' : 'error-message' ">{{ userMessage }}</span>
            
            <label for="user" class="register-label">Email</label>
            <input v-model="email"  type="text" id="email" name="user" required placeholder="email@gmail.com">
            <span :class=" validEmail ? 'accept-message' : 'error-message' ">{{ emailMessage }}</span>
            
            <label for="user" class="register-label">Phone</label>
            <input v-model="phone"  type="text" id="phone" name="user" required placeholder="60012356">
            <span :class=" validPhone ? 'accept-message' : 'error-message' ">{{ phoneMessage }}</span>
            
            <label for="password" class="register-label">Password</label>
            <input v-model="password"  type="password" id="password" name="password" required >
            <span  :class=" validPassword ? 'accept-message' : 'error-message' " >{{  passwordMessage }}</span>
            
          
        </div>


        <div class="boton-texto">
            <button @click="sendForm">Get started</button>
        
            <p class="register-end">Already have an account ? <router-link to="/login" class="nav-link" id="registro">Log in now</router-link></p>
        </div>
            

    </form>
        
</section>
  
</template>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,100..700&display=swap');
@import url('https://fonts.cdnfonts.com/css/sansation');
  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  
.boton-texto{
    padding: 0 auto;
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
}


.register-form button{
  background-color: rgba(191, 204, 223, 1);
  width: 257px;
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

</style>